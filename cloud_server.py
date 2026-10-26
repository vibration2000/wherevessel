"""Cloud HTTP service and real AIS receiver. Never generates vessel positions."""
import asyncio
import json
import os
import random
import time
import hmac
import hashlib
import base64
import math
from email.utils import parsedate_to_datetime
from pathlib import Path
import sqlite3
import threading
from datetime import datetime, timezone
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlsplit, parse_qs

ROOT = Path(__file__).resolve().parent
DATA = Path(os.environ.get("DATA_DIR", "/tmp/wherevessel"))
ASSETS = {"index.html", "app.js", "cloud-status.js", "style.css", "leaflet.js", "leaflet.css", "splash_image.jpg"}
lock = threading.RLock()
vessels = json.loads((ROOT / "vessels.json").read_text(encoding="utf-8"))
observed = {}
feed = {"state": "awaiting_api_key", "last_received_at": None}
last_relay_times = {}
last_position_received = None
search_slots = threading.BoundedSemaphore(3)


def feed_status(now=None):
    """A connected relay is not evidence of a recent, valid position report."""
    now = time.time() if now is None else now
    with lock:
        status = dict(feed)
        if last_position_received is not None:
            age = max(0, now - last_position_received)
            status["age_seconds"] = round(age)
            if status["state"] == "receiving" and age > 120:
                status["state"] = "stale"
        return status


def rate_limit_delay(value, now=None):
    """Respect Retry-After seconds or HTTP dates; wait five minutes if absent."""
    now = time.time() if now is None else now
    try:
        seconds = float(value)
    except (ValueError, TypeError):
        try:
            seconds = parsedate_to_datetime(value).timestamp() - now
        except (ValueError, TypeError, AttributeError, OverflowError):
            seconds = 300
    return max(60, seconds)


def database():
    DATA.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(DATA / "registered.sqlite3")
    conn.execute("CREATE TABLE IF NOT EXISTS vessels (mmsi TEXT PRIMARY KEY, payload TEXT NOT NULL)")
    return conn


def live_vessel(actual):
    return dict(actual, id="ais-" + actual["mmsi"], category="global",
        name=actual.get("name") or actual["mmsi"], carrier="AIS 수신 선박",
        koreanName=actual.get("name", ""), status="AIS 수신", origin="미확인",
        destination=actual.get("destination") or "미확인", area="AIS 수신 위치",
        callsign=actual.get("callsign", "미확인"), imo=actual.get("imo", "미확인"),
        mapCenter=[actual["lat"], actual["lon"]], mapZoom=8,
        routeWaypoints=[[actual["lat"], actual["lon"]]], arrowNodes=[], logs=[], voyageHistory=[])


def ais_text(value):
    # Vessel-provided text is rendered by legacy HTML templates.
    return "".join(c for c in str(value) if c not in '<>&"\'' and c.isprintable()).strip(" @")[:100]


def observation_time(value):
    """Parse timezone-bearing ISO/AIS timestamps without inventing observation time."""
    if not isinstance(value, str):
        return None
    value = value.strip()
    if value.endswith(" UTC"):
        value = value[:-4].rstrip()
    try:
        stamp = datetime.fromisoformat(value.replace("Z", "+00:00"))
        return stamp.astimezone(timezone.utc) if stamp.tzinfo is not None else None
    except (ValueError, OverflowError):
        return None


def ingest(message):
    global last_position_received
    meta = message.get("MetaData", {})
    mmsi = str(meta.get("MMSI", ""))
    if not mmsi.isdigit() or len(mmsi) != 9:
        return
    body = message.get("Message", {})
    pos = body.get("PositionReport") or body.get("StandardClassBPositionReport")
    static = body.get("ShipStaticData", {})
    with lock:
        # Disk-loaded vessels and evicted observations still define the latest
        # accepted position. Never compare against saved example provenance.
        existing = next((v for v in vessels if str(v.get("mmsi")) == mmsi
                         and v.get("source") == "aisstream"), {})
        item = observed.setdefault(mmsi, {"mmsi": mmsi})
        existing_time = observation_time(existing.get("receivedAt"))
        item_time = observation_time(item.get("receivedAt"))
        if "lat" in existing and ("lat" not in item or
                (existing_time is not None and (item_time is None or existing_time > item_time))):
            item.update({key: existing[key] for key in
                         ("lat", "lon", "speed", "heading", "source", "receivedAt") if key in existing})
        name = ais_text(meta.get("ShipName") or static.get("Name") or "")
        if name:
            item["name"] = name
        if static.get("ImoNumber"):
            item["imo"] = str(static["ImoNumber"])
        if static.get("CallSign"):
            item["callsign"] = ais_text(static["CallSign"])
        if static.get("Destination"):
            item["destination"] = ais_text(static["Destination"])
        accepted_position = False
        if pos:
            lat = pos.get("Latitude", meta.get("Latitude", meta.get("latitude")))
            lon = pos.get("Longitude", meta.get("Longitude", meta.get("longitude")))
            timestamp = meta.get("time_utc")
            stamp = observation_time(timestamp)
            previous = [observation_time(record.get("receivedAt")) for record in (item, existing)]
            latest = max((value for value in previous if value is not None), default=None)
            # Equal timestamps are first-wins, including conflicting coordinates.
            # Missing/invalid times cannot establish order and are not positions.
            accepted_position = (pos.get("Valid") is not False and stamp is not None
                and (latest is None or stamp > latest)
                and type(lat) in (int, float) and type(lon) in (int, float)
                and math.isfinite(lat) and math.isfinite(lon)
                and -90 <= lat <= 90 and -180 <= lon <= 180)
        if accepted_position:
            speed = pos.get("Sog")
            valid_speed = type(speed) in (int, float) and math.isfinite(speed) and 0 <= speed < 102.3
            heading = pos.get("TrueHeading")
            if type(heading) not in (int, float) or not math.isfinite(heading) or not 0 <= heading < 360:
                heading = pos.get("Cog")
            if type(heading) not in (int, float) or not math.isfinite(heading) or not 0 <= heading < 360:
                heading = None
            item.update(lat=lat, lon=lon, speed=f"{speed:.1f} kn" if valid_speed else "수신되지 않음", heading=heading,
                        source="aisstream", receivedAt=timestamp)
            last_position_received = time.time()
            feed.update(state="receiving", last_received_at=timestamp)
            feed.pop("last_error", None)
            feed.pop("next_retry_at", None)
            if not any(str(v.get("mmsi")) == mmsi for v in vessels) and len(vessels) < 774:
                vessels.insert(0, live_vessel(item))
        for vessel in vessels:
            if str(vessel.get("mmsi")) == mmsi and "lat" in item:
                if vessel.get("source") != "aisstream":
                    # A saved example must never become an observed historical track.
                    vessel.update(logs=[], voyageHistory=[], routeWaypoints=[], arrowNodes=[],
                                  origin="미확인", destination="미확인", callsign="미확인", imo="미확인")
                vessel.update(item)
                if accepted_position:
                    vessel.setdefault("logs", []).insert(0, {
                        "lat": f"{item['lat']:.3f}", "lon": f"{item['lon']:.3f}",
                        "speed": item["speed"], "status": "AIS 수신 (UTC)",
                        "time": item["receivedAt"], "source": "aisstream"})
                    vessel["logs"] = vessel["logs"][:30]
        # Bound memory even when subscribing to worldwide observations.
        if len(observed) > 50000:
            observed.pop(next(iter(observed)))


async def receive():
    from websockets.asyncio.client import connect
    key = os.environ.get("AISSTREAM_API_KEY", "").strip()
    if os.environ.get("AIS_RECEIVER_MODE") == "relay":
        feed["state"] = "waiting_for_relay"
        return
    if not key or "YOUR_AISSTREAM" in key:
        return
    delay = 2
    while True:
        wait = delay
        try:
            feed["state"] = "connecting"
            feed.pop("next_retry_at", None)
            async with connect("wss://stream.aisstream.io/v0/stream", ping_interval=20) as ws:
                await ws.send(json.dumps({"APIKey": key,
                    "BoundingBoxes": [[[-90, -180], [90, 180]]],
                    "FilterMessageTypes": ["PositionReport", "StandardClassBPositionReport", "ShipStaticData"]}))
                feed["state"] = "connected_waiting_for_reports"
                delay = 2
                async for raw in ws:
                    message = json.loads(raw)
                    if message.get("error") or message.get("Error"):
                        feed["state"] = "upstream_rejected"
                        break
                    ingest(message)
        except Exception as exc:
            # Expose only safe protocol diagnostics, never secrets or response bodies.
            response = getattr(exc, "response", None)
            status = getattr(response, "status_code", None)
            feed["last_error"] = {"type": type(exc).__name__, "http_status": status}
            # Handshake occurs before our API key is sent. Classify the response
            # locally; publish only a fixed diagnostic label, never its body.
            response_body = getattr(response, "body", b"") or b""
            if isinstance(response_body, bytes):
                response_body = response_body.decode("utf-8", errors="replace")
            lower_body = response_body.lower()
            if "connection" in lower_body and ("limit" in lower_body or "many" in lower_body):
                feed["last_error"]["reason"] = "upstream_connection_limit"
            elif "rate" in lower_body or "too many requests" in lower_body:
                feed["last_error"]["reason"] = "upstream_request_limit"
            elif "cloudflare" in lower_body:
                feed["last_error"]["reason"] = "upstream_edge_rejection"
            else:
                feed["last_error"]["reason"] = "upstream_handshake_rejection"
            if response is not None:
                feed["last_error"]["retry_after"] = getattr(response, "headers", {}).get("Retry-After")
            print("AIS reconnect:", type(exc).__name__, "HTTP", status, flush=True)
            feed["state"] = "reconnecting"
            if status == 429:
                retry_after = getattr(response, "headers", {}).get("Retry-After")
                wait = rate_limit_delay(retry_after) + random.uniform(1, 10)
                feed["state"] = "rate_limited"
        feed["next_retry_at"] = datetime.fromtimestamp(time.time() + wait, timezone.utc).isoformat()
        await asyncio.sleep(wait)
        delay = min(delay * 2, 60)


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def reply(self, status, value):
        payload = json.dumps(value, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)

    def do_HEAD(self):
        if urlsplit(self.path).path.lstrip("/") not in ASSETS | {""}:
            self.send_error(404)
            return
        super().do_HEAD()

    def do_GET(self):
        path = urlsplit(self.path).path
        if path == "/api/search-vessel":
            query = parse_qs(urlsplit(self.path).query, keep_blank_values=True)
            values = query.get("q", [])
            if (set(query) != {"q"} or len(values) != 1 or len(self.path) > 1200
                    or not 2 <= len(values[0].strip()) <= 80
                    or any(ord(c) < 32 for c in values[0])):
                self.reply(400, {"error": "선박명 또는 IMO·MMSI를 2~80자로 입력하세요."})
                return
            if not search_slots.acquire(blocking=False):
                self.reply(429, {"error": "조회가 진행 중입니다. 잠시 후 다시 시도하세요."})
                return
            try:
                from vessel_search import search_vessel
                self.reply(200, search_vessel(values[0].strip()))
            except Exception:
                self.reply(502, {"error": "공개 선박 자료를 조회하지 못했습니다. 잠시 후 다시 시도하세요."})
            finally:
                search_slots.release()
            return
        if path == "/api/vessel-position":
            from marinetraffic_service import vessel_position_from_query
            if len(self.path) > 256:
                self.reply(400, {"success": False, "provider": "marinetraffic", "state": "invalid_request",
                                 "error": "9자리 MMSI 한 개로 조회하세요."})
                return
            status, result = vessel_position_from_query(parse_qs(urlsplit(self.path).query, keep_blank_values=True))
            self.reply(status, result)
        elif path == "/api/route":
            from route_service import route_from_query
            try:
                if len(self.path) > 512:
                    raise ValueError('항로 요청이 너무 깁니다.')
                result = route_from_query(parse_qs(urlsplit(self.path).query))
                self.reply(200, result)
            except (ValueError, TypeError, OverflowError) as exc:
                self.reply(422, {"success": False, "error": str(exc)})
            except RuntimeError as exc:
                self.reply(503, {"success": False, "error": str(exc)})
            except Exception:
                self.reply(503, {"success": False, "error": "해상망 참고 항로를 계산하지 못했습니다. 잠시 후 다시 시도해주세요."})
        elif path in ("/api/health", "/api/status"):
            self.reply(200, {"success": True, "mode": "single_vessel_on_demand",
                             "data_note": "Public vessel information is fetched only on an explicit search."})
        elif path == "/api/vessel-count":
            self.reply(200, {"success": True, "count": len(vessels)})
        elif path == "/vessels.json":
            with lock:
                self.reply(200, [{"name": v["name"]} for v in vessels if v.get("name")])
        elif path.lstrip("/") in ASSETS | {""}:
            super().do_GET()
        else:
            self.send_error(404)

    def do_POST(self):
        if urlsplit(self.path).path == "/api/add-vessel":
            self.reply(410, {"error": "선박 등록 대신 검색창에서 한 척씩 조회하세요."})
            return
        if urlsplit(self.path).path == "/api/relay":
            try:
                length = int(self.headers.get("Content-Length", "0"))
                stamp = int(self.headers.get("X-AIS-Time", "0"))
                if not 0 < length <= 2000000 or abs(time.time() - stamp) > 120:
                    raise ValueError()
                payload = self.rfile.read(length)
                device = self.headers.get("X-AIS-Device", "owner")
                signed = str(stamp).encode() + b"." + payload
                valid = False
                if device != "owner" and self.headers.get("X-AIS-Auth") == "rsa-sha256":
                    import rsa
                    parameters = json.loads(os.environ.get("AIS_RELAY_PUBLIC_KEYS", "{}")).get(device)
                    if parameters:
                        try:
                            public = rsa.PublicKey(int.from_bytes(base64.b64decode(parameters["Modulus"]), "big"), int.from_bytes(base64.b64decode(parameters["Exponent"]), "big"))
                            rsa.verify(signed, base64.b64decode(self.headers.get("X-AIS-Signature", ""), validate=True), public)
                            valid = True
                        except (rsa.VerificationError, ValueError, TypeError):
                            pass
                elif device == "owner":
                    key = os.environ.get("AISSTREAM_API_KEY", "")
                    expected = hmac.new(key.encode(), signed, hashlib.sha256).hexdigest()
                    valid = bool(key) and hmac.compare_digest(expected, self.headers.get("X-AIS-Signature", ""))
                if not valid:
                    self.reply(403, {"success": False})
                    return
                records = json.loads(payload)
                if not isinstance(records, list) or len(records) > 1000:
                    raise ValueError()
                if any(not isinstance(record, dict) or not isinstance(record.get("MetaData"), dict)
                       or not isinstance(record.get("Message"), dict) for record in records):
                    raise ValueError()
                with lock:
                    if stamp <= last_relay_times.get(device, 0):
                        self.reply(409, {"success": False})
                        return
                    for record in records:
                        ingest(record)
                    last_relay_times[device] = stamp
                    feed["receiver"] = "local_relay"
                self.reply(200, {"success": True, "accepted": len(records)})
            except (ValueError, TypeError, OverflowError):
                self.reply(400, {"success": False})
            return
        if urlsplit(self.path).path != "/api/add-vessel":
            self.send_error(404)
            return
        try:
            length = int(self.headers.get("Content-Length", "0"))
            if not 0 < length <= 2048:
                raise ValueError()
            query = json.loads(self.rfile.read(length)).get("name", "").strip().upper()
            if not 2 <= len(query) <= 100:
                raise ValueError()
        except (ValueError, TypeError, AttributeError):
            self.reply(400, {"success": False, "error": "선박명 또는 MMSI를 입력해주세요."})
            return
        with lock:
            existing = next((v for v in vessels if query in
                (str(v.get("name", "")).upper(), str(v.get("mmsi", "")))), None)
            if existing:
                self.reply(200, {"success": True, "alreadyExists": True,
                    "count": len(vessels), "vessel": existing})
                return
            actual = next((v for v in observed.values() if "lat" in v and query in
                (str(v.get("name", "")).upper(), v["mmsi"])), None)
            if not actual:
                self.reply(404, {"success": False,
                    "error": "이 선박의 실제 AIS 위치가 아직 수신되지 않았습니다. MMSI로 검색하거나 잠시 후 다시 시도해주세요."})
                return
            if len(vessels) >= 5000:
                self.reply(429, {"success": False, "error": "등록 가능한 선박 수에 도달했습니다."})
                return
            vessel = live_vessel(actual)
            with database() as db:
                db.execute("INSERT OR REPLACE INTO vessels VALUES (?, ?)",
                    (actual["mmsi"], json.dumps(vessel)))
            vessels.insert(0, vessel)
            self.reply(200, {"success": True, "count": len(vessels), "vessel": vessel})


if __name__ == "__main__":
    # Single-vessel research is on demand. The relay remains an explicit separate service.
    ThreadingHTTPServer(("0.0.0.0", int(os.environ.get("PORT", "10000"))), Handler).serve_forever()

"""Cloud HTTP service and real AIS receiver. Never generates vessel positions."""
import asyncio
import json
import os
from pathlib import Path
import sqlite3
import threading
from datetime import datetime, timezone
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parent
DATA = Path(os.environ.get("DATA_DIR", "/tmp/wherevessel"))
ASSETS = {"index.html", "app.js", "style.css", "leaflet.js", "leaflet.css", "splash_image.jpg"}
lock = threading.RLock()
vessels = json.loads((ROOT / "vessels.json").read_text(encoding="utf-8"))
observed = {}
feed = {"state": "awaiting_api_key", "last_received_at": None}


def database():
    DATA.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(DATA / "registered.sqlite3")
    conn.execute("CREATE TABLE IF NOT EXISTS vessels (mmsi TEXT PRIMARY KEY, payload TEXT NOT NULL)")
    return conn


def ingest(message):
    meta = message.get("MetaData", {})
    mmsi = str(meta.get("MMSI", ""))
    if not mmsi.isdigit() or len(mmsi) != 9:
        return
    body = message.get("Message", {})
    pos = body.get("PositionReport") or body.get("StandardClassBPositionReport")
    static = body.get("ShipStaticData", {})
    with lock:
        item = observed.setdefault(mmsi, {"mmsi": mmsi})
        name = str(meta.get("ShipName") or static.get("Name") or "").strip(" @")
        if name:
            item["name"] = name
        if static.get("ImoNumber"):
            item["imo"] = str(static["ImoNumber"])
        if static.get("CallSign"):
            item["callsign"] = str(static["CallSign"]).strip(" @")
        if static.get("Destination"):
            item["destination"] = str(static["Destination"]).strip(" @")
        if pos:
            if pos.get("Valid") is False:
                return
            lat = pos.get("Latitude", meta.get("Latitude", meta.get("latitude")))
            lon = pos.get("Longitude", meta.get("Longitude", meta.get("longitude")))
            if not isinstance(lat, (int, float)) or not isinstance(lon, (int, float)):
                return
            if not (-90 <= lat <= 90 and -180 <= lon <= 180):
                return
            timestamp = str(meta.get("time_utc") or datetime.now(timezone.utc).isoformat())
            speed = pos.get("Sog", 0)
            heading = pos.get("TrueHeading", 511)
            if heading == 511:
                heading = pos.get("Cog", 0)
            item.update(lat=lat, lon=lon, speed=f"{speed:.1f} kn", heading=heading,
                        source="aisstream", receivedAt=timestamp)
            feed.update(state="receiving", last_received_at=timestamp)
        for vessel in vessels:
            if str(vessel.get("mmsi")) == mmsi and "lat" in item:
                vessel.update(item)
                if pos:
                    vessel.setdefault("logs", []).insert(0, {
                        "lat": f"{item['lat']:.3f}", "lon": f"{item['lon']:.3f}",
                        "speed": item["speed"], "status": "AIS 수신 (UTC)",
                        "time": item["receivedAt"][:16].replace("T", " ")})
                    vessel["logs"] = vessel["logs"][:30]
        # Bound memory even when subscribing to worldwide observations.
        if len(observed) > 50000:
            observed.pop(next(iter(observed)))


async def receive():
    from websockets.asyncio.client import connect
    key = os.environ.get("AISSTREAM_API_KEY", "").strip()
    if not key or "YOUR_AISSTREAM" in key:
        return
    delay = 2
    while True:
        try:
            feed["state"] = "connecting"
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
            # Log only the exception class, never credentials or upstream payloads.
            print("AIS reconnect:", type(exc).__name__, flush=True)
            feed["state"] = "reconnecting"
        await asyncio.sleep(delay)
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
        if path in ("/api/health", "/api/status"):
            self.reply(200, {"success": True, "ais": dict(feed),
                             "data_note": "Only source=aisstream positions are live; other records are saved snapshots."})
        elif path == "/api/vessel-count":
            self.reply(200, {"success": True, "count": len(vessels)})
        elif path == "/vessels.json":
            with lock:
                self.reply(200, vessels)
        elif path.lstrip("/") in ASSETS | {""}:
            super().do_GET()
        else:
            self.send_error(404)

    def do_POST(self):
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
            vessel = dict(actual, id="ais-" + actual["mmsi"], category="global",
                name=actual.get("name") or actual["mmsi"], carrier="AIS 수신 선박",
                koreanName=actual.get("name", ""), status="AIS 수신", origin="미확인",
                destination=actual.get("destination") or "미확인", area="AIS 수신 위치",
                mapCenter=[actual["lat"], actual["lon"]], mapZoom=8,
                routeWaypoints=[[actual["lat"], actual["lon"]]], logs=[], voyageHistory=[])
            with database() as db:
                db.execute("INSERT OR REPLACE INTO vessels VALUES (?, ?)",
                    (actual["mmsi"], json.dumps(vessel)))
            vessels.insert(0, vessel)
            self.reply(200, {"success": True, "count": len(vessels), "vessel": vessel})


if __name__ == "__main__":
    with database() as db:
        for (payload,) in db.execute("SELECT payload FROM vessels"):
            record = json.loads(payload)
            if not any(str(v.get("mmsi")) == record["mmsi"] for v in vessels):
                vessels.append(record)
    threading.Thread(target=lambda: asyncio.run(receive()), daemon=True).start()
    ThreadingHTTPServer(("0.0.0.0", int(os.environ.get("PORT", "10000"))), Handler).serve_forever()

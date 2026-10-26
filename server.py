"""Local viewer for saved and genuinely received AIS data. Never invent positions."""
import json
import math
import os
from datetime import datetime, timezone
from http.server import ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit
from cloud_server import Handler as AssetHandler

ROOT = Path(__file__).resolve().parent
VESSELS_FILE = ROOT / "vessels.json"
PORT = int(os.environ.get("PORT", "3000"))


def read_vessels():
    records = json.loads(Path(VESSELS_FILE).read_text(encoding="utf-8-sig"))
    if not isinstance(records, list):
        raise ValueError("Invalid vessel catalogue")
    return records


def report_epoch(value):
    try:
        normalized = str(value).replace(" +0000 UTC", "+00:00").replace("Z", "+00:00")
        stamp = datetime.fromisoformat(normalized)
        if stamp.tzinfo is None:
            stamp = stamp.replace(tzinfo=timezone.utc)
        return stamp.timestamp()
    except (ValueError, TypeError, OverflowError):
        return None


def local_feed_status(records, now=None):
    now = datetime.now(timezone.utc).timestamp() if now is None else now
    reports = [(report_epoch(v.get("receivedAt")), v.get("receivedAt"))
               for v in records if v.get("source") == "aisstream"]
    reports = [(stamp, raw) for stamp, raw in reports if stamp is not None and stamp <= now + 60]
    if not reports:
        return {"state": "waiting_for_relay", "last_received_at": None, "receiver": "local_file"}
    stamp, raw = max(reports, key=lambda pair: pair[0])
    age = max(0, now - stamp)
    return {"state": "receiving" if age <= 120 else "stale", "last_received_at": raw,
            "age_seconds": round(age), "receiver": "local_file"}


def crawl_and_build_vessel(query_name, existing_vessels):
    """Compatibility entry point: return an observed record or explicitly fail."""
    query = query_name.strip().upper()
    for vessel in existing_vessels:
        if vessel.get("source") != "aisstream":
            continue
        if query not in (str(vessel.get("name", "")).upper(), str(vessel.get("mmsi", ""))):
            continue
        lat, lon = vessel.get("lat"), vessel.get("lon")
        if (type(lat) in (int, float) and type(lon) in (int, float)
                and math.isfinite(lat) and math.isfinite(lon)
                and -90 <= lat <= 90 and -180 <= lon <= 180):
            return dict(vessel)
    raise ValueError("실제 AIS 위치가 아직 수신되지 않았습니다. MMSI를 확인하거나 수신 후 다시 조회하세요.")


class WhereVesselServerHandler(AssetHandler):
    def do_GET(self):
        path = urlsplit(self.path).path
        if path == "/api/vessel-position":
            # Shared provider validation, credentials, cache and cost guard.
            super().do_GET()
            return
        if path in ("/vessels.json", "/api/vessel-count", "/api/status", "/api/health"):
            try:
                records = read_vessels()
                if path == "/vessels.json":
                    result = [{"name": v["name"]} for v in records if v.get("name")]
                elif path == "/api/vessel-count":
                    result = {"success": True, "count": len(records)}
                else:
                    result = {"success": True, "mode": "single_vessel_on_demand",
                              "data_note": "Public vessel information is fetched only on an explicit search."}
                self.reply(200, result)
            except (OSError, ValueError):
                self.reply(503, {"success": False, "error": "선박 목록을 읽을 수 없습니다. 잠시 후 다시 시도하세요."})
            return
        super().do_GET()

    def do_POST(self):
        self.reply(410, {"error": "선박 등록 대신 검색창에서 한 척씩 조회하세요."})
        return


def run_server():
    server = ThreadingHTTPServer(("127.0.0.1", PORT), WhereVesselServerHandler)
    print(f"wherevessel: http://localhost:{PORT} (single-vessel on-demand research)", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    run_server()

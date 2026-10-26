"""On-demand, single-vessel MarineTraffic API adapter. Never synthesizes positions.

Requires a separately contracted MARINETRAFFIC_API_KEY on the server. Importing
this module does not read credentials or contact the provider.
"""
from collections import OrderedDict
from copy import deepcopy
from datetime import datetime, timezone
import json
import math
import os
import re
import socket
import threading
import time
from urllib.error import HTTPError, URLError
from urllib.parse import quote, urlencode, urlsplit
from urllib.request import HTTPRedirectHandler, Request, build_opener

PROVIDER = "marinetraffic"
HOST = "services.marinetraffic.com"
TIMEOUT_SECONDS = 6
MAX_RESPONSE_BYTES = 65536
CACHE_TTL_SECONDS = 60
MAX_CACHE_ENTRIES = 128
GLOBAL_INTERVAL_SECONDS = 60
FRESH_SECONDS = 300
_lock = threading.Lock()
_cache = OrderedDict()
_inflight = False
_next_request_at = 0


class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        # The API credential is in the path: never forward it to another URL.
        return None


def _failure(state, error, status=503):
    return status, {"success": False, "provider": PROVIDER, "state": state, "error": error}


def _number(value):
    if isinstance(value, bool) or not isinstance(value, (str, int, float)):
        return None
    try:
        number = float(value)
        return number if math.isfinite(number) else None
    except (ValueError, OverflowError):
        return None


def _timestamp(value):
    if not isinstance(value, str):
        return None
    try:
        parsed = datetime.fromisoformat(value.strip().replace("Z", "+00:00"))
        return parsed.astimezone(timezone.utc) if parsed.tzinfo else None
    except (ValueError, OverflowError):
        return None


def _text(value):
    if not isinstance(value, str):
        return ""
    return "".join(c for c in value if c.isprintable() and c not in '<>&\"\'')[:100].strip()


def _normalize(payload, mmsi, now):
    rows = payload.get("DATA") if isinstance(payload, dict) else payload
    if rows == []:
        return _failure("not_found", "이 MMSI의 공식 위치 자료가 없습니다.", 404)
    if not isinstance(rows, list) or len(rows) != 1 or not isinstance(rows[0], dict):
        return _failure("invalid_data", "공식 위치 응답을 확인할 수 없습니다.", 502)
    row = rows[0]
    if str(row.get("MMSI", "")) != mmsi:
        return _failure("invalid_data", "조회한 MMSI와 공식 응답의 선박이 일치하지 않습니다.", 502)
    lat, lon = _number(row.get("LAT")), _number(row.get("LON"))
    observed = _timestamp(row.get("TIMESTAMP"))
    if (lat is None or lon is None or not -90 <= lat <= 90 or not -180 <= lon <= 180
            or observed is None or observed.timestamp() > now + 60):
        return _failure("invalid_data", "공식 응답의 위치 또는 관측 시각이 유효하지 않습니다.", 502)
    speed = _number(row.get("SPEED"))
    heading = _number(row.get("HEADING"))
    # Official v6 documentation specifies HEADING degrees but not COURSE units.
    # STATUS=97 uses HEADING as aircraft altitude, never a vessel heading.
    if heading is None or not 0 <= heading < 360 or str(row.get("STATUS")) == "97":
        heading = None
    position = {"mmsi": mmsi, "lat": lat, "lon": lon,
                "receivedAt": observed.isoformat().replace("+00:00", "Z"),
                "speed": f"{speed / 10:.1f} kn" if speed is not None and 0 <= speed < 1023 else "수신되지 않음",
                "heading": heading, "source": PROVIDER, "verified": True,
                "sourceUrl": "https://www.marinetraffic.com/en/ais/details/ships/mmsi:" + mmsi}
    imo = str(row.get("IMO", ""))
    if re.fullmatch(r"[0-9]{7}", imo) and imo != "0000000":
        position["imo"] = imo
    name = _text(row.get("SHIPNAME"))
    if name:
        position["name"] = name
    return 200, {"success": True, "provider": PROVIDER, "position": position}


def _presentation(result, now, cached):
    status, body = deepcopy(result)
    if body["success"]:
        age = max(0, now - _timestamp(body["position"]["receivedAt"]).timestamp())
        body.update(state="verified" if age <= FRESH_SECONDS else "stale",
                    age_seconds=round(age), cached=cached)
    return status, body


def _fetch(mmsi, key, now):
    query = urlencode({"v": 6, "mmsi": mmsi, "protocol": "jsono", "timespan": 1440})
    url = "https://" + HOST + "/api/exportvessel/" + quote(key, safe="") + "?" + query
    request = Request(url, headers={"Accept": "application/json", "User-Agent": "WhereVessel/1.0"})
    try:
        with build_opener(NoRedirect()).open(request, timeout=TIMEOUT_SECONDS) as response:
            target = urlsplit(response.geturl())
            if target.scheme != "https" or target.hostname != HOST:
                return _failure("provider_error", "공식 제공자 연결을 확인할 수 없습니다.", 502)
            raw = response.read(MAX_RESPONSE_BYTES + 1)
            if len(raw) > MAX_RESPONSE_BYTES:
                return _failure("invalid_data", "공식 위치 응답이 허용 크기를 초과했습니다.", 502)
            return _normalize(json.loads(raw.decode("utf-8-sig")), mmsi, now)
    except HTTPError as exc:
        code = exc.code
        exc.close()
        if code == 429:
            return _failure("rate_limited", "공식 제공자의 조회 한도에 도달했습니다. 잠시 후 다시 시도하세요.", 429)
        if code in (401, 403):
            return _failure("provider_error", "공식 API 계약 또는 서버 인증 설정을 확인해야 합니다.")
        if code == 404:
            return _failure("not_found", "이 MMSI의 공식 위치 자료가 없습니다.", 404)
        return _failure("provider_error", "공식 위치 제공자가 조회를 완료하지 못했습니다.", 502)
    except (TimeoutError, socket.timeout):
        return _failure("timeout", "공식 위치 조회 시간이 초과되었습니다.", 504)
    except URLError as exc:
        if isinstance(exc.reason, (TimeoutError, socket.timeout)):
            return _failure("timeout", "공식 위치 조회 시간이 초과되었습니다.", 504)
        return _failure("provider_error", "공식 위치 제공자에 연결하지 못했습니다.", 502)
    except (ValueError, UnicodeError, OSError):
        # Never serialize exception text, HTTP bodies, or credential-bearing URLs.
        return _failure("invalid_data", "공식 위치 응답을 확인할 수 없습니다.", 502)


def vessel_position_from_query(query):
    """Return (HTTP status, safe JSON body); one explicit MMSI request only."""
    global _inflight, _next_request_at
    if (set(query) - {"mmsi", "provider"} or len(query.get("mmsi", [])) != 1
            or not re.fullmatch(r"[0-9]{9}", query["mmsi"][0])
            or ("provider" in query and query["provider"] != [PROVIDER])):
        return _failure("invalid_request", "9자리 MMSI 한 개로 조회하세요. 제공자는 MarineTraffic만 지원합니다.", 400)
    mmsi = query["mmsi"][0]
    key = os.environ.get("MARINETRAFFIC_API_KEY", "").strip()
    if not key:
        return _failure("not_configured", "MarineTraffic 공식 API 계약과 서버 키 설정이 필요합니다.")
    if not re.fullmatch(r"[0-9a-fA-F]{40}", key):
        return _failure("configuration_error", "MarineTraffic 서버 API 키 설정을 확인해야 합니다.")
    now, monotonic = time.time(), time.monotonic()
    with _lock:
        for target in list(_cache):
            if monotonic - _cache[target][0] >= CACHE_TTL_SECONDS:
                del _cache[target]
        if mmsi in _cache:
            _cache.move_to_end(mmsi)
            return _presentation(_cache[mmsi][1], now, True)
        if _inflight or monotonic < _next_request_at:
            return _failure("rate_limited", "조회 비용과 호출 한도 보호를 위해 잠시 후 다시 조회하세요.", 429)
        _inflight = True
        _next_request_at = monotonic + GLOBAL_INTERVAL_SECONDS
    try:
        result = _fetch(mmsi, key, now)
        with _lock:
            _cache[mmsi] = (time.monotonic(), result)
            while len(_cache) > MAX_CACHE_ENTRIES:
                _cache.popitem(last=False)
        return _presentation(result, time.time(), False)
    finally:
        with _lock:
            _inflight = False

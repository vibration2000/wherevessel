"""Offline sea-network reference routes for visualization, never observed voyages."""
from functools import lru_cache
import math
from pathlib import Path
import sys
import threading

_route_lock = threading.Lock()
MAX_NETWORK_GAP_KM = 150


def _distance(a, b):
    lon1, lat1, lon2, lat2 = map(math.radians, [*a, *b])
    value = math.sin((lat2 - lat1) / 2) ** 2 + math.cos(lat1) * math.cos(lat2) * math.sin((lon2 - lon1) / 2) ** 2
    return 6371.0088 * 2 * math.asin(math.sqrt(min(1, max(0, value))))


def route_from_query(query):
    values = []
    for key, limit in [('start_lon', 180), ('start_lat', 90), ('end_lon', 180), ('end_lat', 90)]:
        raw = query.get(key, [])
        if len(raw) != 1:
            raise ValueError('출발항과 도착항 좌표를 지정해주세요.')
        value = float(raw[0])
        if not math.isfinite(value) or abs(value) > limit:
            raise ValueError('항구 좌표의 범위가 올바르지 않습니다.')
        values.append(round(value, 6))
    if _distance(values[:2], values[2:]) < 1:
        raise ValueError('서로 다른 출발항과 도착항을 선택해주세요.')
    return _route(*values)


@lru_cache(maxsize=128)
def _route(start_lon, start_lat, end_lon, end_lat):
    # Local optional install stays inside this project. Production uses requirements.txt.
    local_packages = Path(__file__).resolve().parent / '.runtime' / 'route_packages'
    if str(local_packages) not in sys.path and local_packages.is_dir():
        sys.path.insert(0, str(local_packages))
    try:
        import searoute
    except (ImportError, PermissionError) as exc:
        raise RuntimeError('해상망 항로 모듈을 사용할 수 없습니다. requirements.txt의 의존성을 설치해주세요.') from exc
    if not callable(getattr(searoute, 'searoute', None)):
        raise RuntimeError('해상망 모듈 파일을 읽을 수 없습니다. 서버 실행 계정에서 requirements.txt를 설치하고 다시 실행해주세요.')
    with _route_lock:
        # Do not append straight land-to-network connectors or guessed terminal legs.
        feature = searoute.searoute([start_lon, start_lat], [end_lon, end_lat],
                                   units='km', append_orig_dest=False, include_ports=False)
    raw = feature.get('geometry', {}).get('coordinates', [])
    if len(raw) < 2:
        raise ValueError('해상망에서 연결 가능한 참고 항로를 찾지 못했습니다.')
    coordinates = []
    for pair in raw:
        lon, lat = map(float, pair[:2])
        if not math.isfinite(lon) or not math.isfinite(lat) or abs(lat) > 90:
            raise ValueError('해상망 항로 좌표가 올바르지 않습니다.')
        coordinates.append([round((lon + 180) % 360 - 180, 6), round(lat, 6)])
    start_gap = _distance([start_lon, start_lat], coordinates[0])
    end_gap = _distance([end_lon, end_lat], coordinates[-1])
    if max(start_gap, end_gap) > MAX_NETWORK_GAP_KM:
        raise ValueError('선택한 위치와 해상망의 거리가 너무 멉니다. 가까운 항구를 선택해주세요.')
    return {'success': True, 'mode': 'reference',
            'geometry': {'type': 'LineString', 'coordinates': coordinates},
            'properties': {'distance_km': round(float(feature['properties']['length']), 1),
                           'network_start_gap_km': round(start_gap, 1),
                           'network_end_gap_km': round(end_gap, 1),
                           'source': 'SeaRoute 1.4.3 / maritime network',
                           'source_url': 'https://pypi.org/project/searoute/1.4.3/',
                           'note': '해상망 기반 참고 항로 · 실제 운항 이력/항해 지침 아님 · 항구 부근 해상망 지점을 연결합니다.'}}

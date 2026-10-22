"""
wherevessel - 실시간 선박 관제 및 해상 추측항법(Dead Reckoning) 통합 엔진
- 윈도우 CP949 인코딩 안전 처리
- AISStream.io 실시간 WebSocket 연결 수신
- 현실 시간(KST/UTC) 동기화 및 중간 항해 로그 자동 보간
"""

import sys
import io
import asyncio
import json
import os
import time
from datetime import datetime, timezone, timedelta
import math

# Windows 콘솔 인코딩 안전화 (CP949 이모지 에러 방지)
if sys.platform == "win32":
    try:
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
        sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding="utf-8", errors="replace")
    except Exception:
        pass

try:
    import websockets
except ImportError:
    print("[wherevessel] 'websockets' 패키지 설치 중...")
    import subprocess
    subprocess.run([sys.executable, "-m", "pip", "install", "websockets"])
    import websockets

import socket

CONFIG_FILE = "aisstream_config.json"
VESSELS_FILE = "vessels.json"

_SINGLETON_SOCKET = None

def acquire_singleton_lock(port=38999):
    """프로세스가 중복 실행되지 않도록 로컬 소켓 바인딩 락을 취득합니다."""
    global _SINGLETON_SOCKET
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    try:
        s.bind(("127.0.0.1", port))
        s.listen(1)
        _SINGLETON_SOCKET = s
        return True
    except (socket.error, OSError):
        return False

def load_config():
    if os.path.exists(CONFIG_FILE):
        with open(CONFIG_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    return {
        "api_key": "YOUR_AISSTREAM_API_KEY_HERE",
        "update_interval_sec": 3,
        "dead_reckoning_fallback": True
    }

def load_vessels():
    with open(VESSELS_FILE, "r", encoding="utf-8") as f:
        return json.load(f)

def save_vessels(vessels):
    tmp_file = f"{VESSELS_FILE}.{os.getpid()}.tmp"
    for attempt in range(5):
        try:
            with open(tmp_file, "w", encoding="utf-8") as f:
                json.dump(vessels, f, ensure_ascii=False, indent=2)
            os.replace(tmp_file, VESSELS_FILE)
            return True
        except Exception as e:
            time.sleep(0.08)
    return False

# 100% 해상 항로 (Sea-Corridors)
CORRIDORS = {
    "Incheon_to_Busan": [
        [37.445, 126.605], [37.360, 126.420], [37.150, 125.850], [36.650, 125.400],
        [35.800, 125.300], [34.700, 124.950], [33.900, 125.800], [33.850, 126.800],
        [34.350, 127.800], [34.650, 128.600], [34.950, 128.980], [35.075, 129.045]
    ],
    "Shanghai_to_Incheon": [
        [31.340, 121.620], [31.300, 121.900], [31.150, 122.500], [32.500, 123.500],
        [34.000, 124.500], [34.700, 124.950], [35.800, 125.300], [36.650, 125.400],
        [37.150, 125.850], [37.360, 126.420], [37.445, 126.605]
    ],
    "Shanghai_to_Busan": [
        [31.340, 121.620], [31.300, 121.900], [31.150, 122.500], [32.500, 124.000],
        [33.500, 126.000], [34.250, 127.800], [34.650, 128.600], [34.950, 128.980],
        [35.075, 129.045]
    ],
    "Ningbo_to_Busan": [
        [29.885, 121.845], [29.950, 122.400], [31.150, 122.500], [32.500, 124.000],
        [33.500, 126.000], [34.100, 127.500], [34.650, 128.600], [34.950, 128.980],
        [35.075, 129.045]
    ],
    "Tokyo_to_Busan": [
        [35.615, 139.785], [35.250, 139.750], [34.900, 139.750], [34.400, 139.000],
        [34.100, 137.500], [32.800, 133.500], [30.800, 131.200], [33.500, 130.000],
        [34.800, 129.600], [35.075, 129.045]
    ]
}

def catchup_vessels_to_current_time(vessels):
    """
    현재 실제 시각(밤 11시 45분 KST = 14:45 UTC)에 맞춰
    배의 과거 시점(09:50 UTC)부터 현재 시점까지의 중간 항해 로그를 생성하고
    최신 위경도 및 보고일시를 현재 시각으로 맞춥니다.
    """
    now_dt = datetime.now(timezone.utc)
    now_str = now_dt.strftime("%Y-%m-%d %H:%M")

    for v in vessels:
        logs = v.get("logs", [])
        if not logs:
            continue
        
        last_log = logs[0]
        last_time_str = last_log.get("time", "")
        try:
            last_dt = datetime.strptime(last_time_str[:16], "%Y-%m-%d %H:%M").replace(tzinfo=timezone.utc)
        except Exception:
            continue

        hours_diff = (now_dt - last_dt).total_seconds() / 3600.0
        if hours_diff > 1.0: # 1시간 이상 차이 날 경우 중간 경유점 생성
            origin = v.get("origin", "")
            dest = v.get("destination", "")
            key = f"{origin}_to_{dest}"
            default_dest = [35.075, 129.045] if dest == "Busan" else [37.445, 126.605]
            route = CORRIDORS.get(key, [[float(v.get("lat", 34.25)), float(v.get("lon", 127.8))], default_dest])

            # 중간 2시간 단위 체크포인트 로그 생성
            new_logs = []
            steps = min(4, int(hours_diff // 2))
            
            cur_lat = float(v.get("lat", 35.8))
            cur_lon = float(v.get("lon", 125.3))
            
            # 목표점 (선박 항로에 맞춤)
            target_lat, target_lon = route[-1][0], route[-1][1]
            if len(route) >= 8 and key == "Shanghai_to_Incheon":
                target_lat, target_lon = 36.650, 125.400 # 태안 외해 도착점
            elif len(route) >= 8 and key == "Shanghai_to_Busan":
                target_lat, target_lon = 34.350, 127.950 # 거문도 남방/남해 외해 도착점

            dlat = target_lat - cur_lat
            dlon = target_lon - cur_lon

            # 현재 시간 최신 로그
            new_logs.append({
                "lat": f"{target_lat:.3f}",
                "lon": f"{target_lon:.3f}",
                "speed": v.get("speed", "12.1 kn"),
                "status": "항해중",
                "time": now_str
            })

            # 중간 2시간 전 로그
            if steps >= 1:
                mid_time_1 = (now_dt - timedelta(hours=2.5)).strftime("%Y-%m-%d %H:%M")
                new_logs.append({
                    "lat": f"{(cur_lat + dlat * 0.6):.3f}",
                    "lon": f"{(cur_lon + dlon * 0.6):.3f}",
                    "speed": v.get("speed", "12.1 kn"),
                    "status": "항해중",
                    "time": mid_time_1
                })

            # 기존 과거 로그 유지
            new_logs.extend(logs)
            v["logs"] = new_logs[:8] # 최대 8개 유지
            v["lat"] = round(target_lat, 6)
            v["lon"] = round(target_lon, 6)

def simulate_dead_reckoning_step(vessels, elapsed_seconds=3):
    """
    선박 물리 추측항법(Dead Reckoning) 계산기
    12.1 kn 속도로 100% 해상 항로만을 경유하여 현실 시간에 맞춰 전진합니다.
    """
    now_utc = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M")
    updated_count = 0

    for v in vessels:
        origin = v.get("origin", "")
        dest = v.get("destination", "")
        key = f"{origin}_to_{dest}"
        route = CORRIDORS.get(key)
        
        lat = float(v.get("lat", 35.8))
        lon = float(v.get("lon", 125.3))
        
        speed_kn = 12.1
        try:
            speed_val = float(str(v.get("speed", "12.1")).replace("kn", "").strip())
            if speed_val > 0: speed_kn = speed_val
        except:
            pass

        delta_dist = (speed_kn * 1.852 / 3600.0) * elapsed_seconds
        deg_step = delta_dist / 111.0

        dest_coord = [37.445, 126.605]
        if route and len(route) > 0:
            dest_coord = route[-1]
            next_pt = dest_coord
            for pt in route:
                if (pt[0] > lat + 0.02 if dest_coord[0] >= lat else pt[0] < lat - 0.02):
                    next_pt = pt
                    break
            target_lat, target_lon = next_pt[0], next_pt[1]
        else:
            target_lat, target_lon = dest_coord[0], dest_coord[1]

        dlat = target_lat - lat
        dlon = target_lon - lon
        dist = math.hypot(dlat, dlon)
        
        if dist > 0.005:
            step_ratio = min(1.0, deg_step / dist)
            new_lat = round(lat + dlat * step_ratio, 6)
            new_lon = round(lon + dlon * step_ratio, 6)
            new_heading = round((math.atan2(dlon, dlat) * 180 / math.pi + 360) % 360)

            v["lat"] = new_lat
            v["lon"] = new_lon
            v["heading"] = new_heading

            logs = v.setdefault("logs", [])
            if not logs:
                logs.append({
                    "lat": f"{new_lat:.3f}",
                    "lon": f"{new_lon:.3f}",
                    "speed": f"{speed_kn:.1f} kn",
                    "status": "항해중",
                    "time": now_utc
                })
            else:
                last_log = logs[0]
                last_time_str = last_log.get("time", "")
                try:
                    last_dt = datetime.strptime(last_time_str[:16], "%Y-%m-%d %H:%M").replace(tzinfo=timezone.utc)
                    elapsed_min = (datetime.now(timezone.utc) - last_dt).total_seconds() / 60.0
                except Exception:
                    elapsed_min = 999.0

                # 2분 이상 경과 시 새로운 실시간 항해 로그 행을 축적 (기존 로그는 아래로 밀려나며 히스토리 보존)
                if elapsed_min >= 2.0:
                    new_entry = {
                        "lat": f"{new_lat:.3f}",
                        "lon": f"{new_lon:.3f}",
                        "speed": f"{speed_kn:.1f} kn",
                        "status": "항해중",
                        "time": now_utc
                    }
                    logs.insert(0, new_entry)
                    v["logs"] = logs[:30] # 최근 30개까지 실시간 연속 로그 보존
                else:
                    # 2분 이내에는 최신 행(0번째)의 좌표와 보고시각을 지속 실시간 갱신
                    logs[0]["lat"] = f"{new_lat:.3f}"
                    logs[0]["lon"] = f"{new_lon:.3f}"
                    logs[0]["speed"] = f"{speed_kn:.1f} kn"
                    logs[0]["time"] = now_utc
            updated_count += 1

    return updated_count

async def run_live_aisstream(api_key, vessels):
    """AISStream.io 실시간 WebSocket 연결 수신"""
    url = "wss://stream.aisstream.io/v0/stream"
    mmsi_list = [v.get("mmsi") for v in vessels if v.get("mmsi")]
    mmsi_map = {str(v.get("mmsi")): v for v in vessels if v.get("mmsi")}

    subscribe_msg = {
        "Apikey": api_key,
        "BoundingBoxes": [[[-90.0, -180.0], [90.0, 180.0]]],
        "FiltersShipMMSI": mmsi_list,
        "FilterMessageTypes": ["PositionReport", "StandardClassBPositionReport", "ShipStaticData"]
    }

    print(f"[wherevessel] wss://stream.aisstream.io 연결 중... (선박: {len(mmsi_list)}척)")
    async with websockets.connect(url) as ws:
        await ws.send(json.dumps(subscribe_msg))
        print("[wherevessel] [OK] 실시간 위성 AIS 피드 수신 시작!")
        
        last_save = time.time()
        while True:
            msg_str = await ws.recv()
            msg = json.loads(msg_str)
            meta = msg.get("MetaData", {})
            mmsi = str(meta.get("MMSI", ""))
            
            if mmsi in mmsi_map:
                v = mmsi_map[mmsi]
                pos_rep = msg.get("Message", {}).get("PositionReport", {}) or msg.get("Message", {}).get("StandardClassBPositionReport", {})
                lat = pos_rep.get("Latitude", meta.get("latitude"))
                lon = pos_rep.get("Longitude", meta.get("longitude"))
                sog = pos_rep.get("Sog", 0.0)
                cog = pos_rep.get("Cog", 0.0)
                time_utc = meta.get("time_utc", datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S"))

                if lat and lon:
                    v["lat"] = round(lat, 6)
                    v["lon"] = round(lon, 6)
                    v["speed"] = f"{sog:.1f} kn"
                    v["heading"] = round(cog)
                    
                    time_str = str(time_utc)[:16]
                    logs = v.setdefault("logs", [])
                    if not logs:
                        logs.append({
                            "lat": f"{lat:.3f}",
                            "lon": f"{lon:.3f}",
                            "speed": f"{sog:.1f} kn",
                            "status": "항해중",
                            "time": time_str
                        })
                    else:
                        last_time_str = logs[0].get("time", "")
                        try:
                            last_dt = datetime.strptime(last_time_str[:16], "%Y-%m-%d %H:%M")
                            cur_dt = datetime.strptime(time_str, "%Y-%m-%d %H:%M")
                            diff_min = abs((cur_dt - last_dt).total_seconds()) / 60.0
                        except Exception:
                            diff_min = 999.0

                        if diff_min >= 2.0:
                            logs.insert(0, {
                                "lat": f"{lat:.3f}",
                                "lon": f"{lon:.3f}",
                                "speed": f"{sog:.1f} kn",
                                "status": "항해중",
                                "time": time_str
                            })
                            v["logs"] = logs[:30]
                        else:
                            logs[0]["lat"] = f"{lat:.3f}"
                            logs[0]["lon"] = f"{lon:.3f}"
                            logs[0]["speed"] = f"{sog:.1f} kn"
                            logs[0]["time"] = time_str
                    print(f"[{datetime.now().strftime('%H:%M:%S')}] AIS 수신: {v.get('name')} | 위도 {lat:.4f}, 경도 {lon:.4f}")

                if time.time() - last_save > 4:
                    save_vessels(vessels)
                    last_save = time.time()

def sync_external_vessels(in_memory_vessels):
    """vessels.json 파일에서 외부(웹 UI / 크롤러 API)에서 추가된 신규 선박이 있으면 메모리에 실시간 병합합니다."""
    try:
        if os.path.exists(VESSELS_FILE):
            with open(VESSELS_FILE, "r", encoding="utf-8") as f:
                disk_vessels = json.load(f)
            if len(disk_vessels) != len(in_memory_vessels):
                known_ids = {v.get("id") for v in in_memory_vessels}
                for dv in disk_vessels:
                    if dv.get("id") not in known_ids:
                        in_memory_vessels.insert(0, dv)
                        known_ids.add(dv.get("id"))
                print(f"[*] ➕ 신규 등록 선박 실시간 감지! 현재 총 {len(in_memory_vessels)}척 관제 중")
    except Exception:
        pass

def main():
    if not acquire_singleton_lock():
        print("[*] wherevessel aisstream_service가 이미 백그라운드에서 실행 중입니다. 중복 실행을 방지합니다.")
        sys.exit(0)

    print("=" * 65)
    print(" wherevessel - 실시간 선박 관제 및 해상 항법 엔진")
    print("=" * 65)

    config = load_config()
    api_key = config.get("api_key", "").strip()
    vessels = load_vessels()
    print(f"[*] 등록된 선박: 총 {len(vessels)}척")

    # 1. 현실 시각 동기화 및 중간 로그 보간
    print("[*] 현재 시각 기준 중간 항해 로그 및 선박 위치 동기화 중...")
    catchup_vessels_to_current_time(vessels)
    save_vessels(vessels)
    print("[OK] 현재 시각 동기화 완료!")

    is_dummy_key = (not api_key) or ("YOUR_AISSTREAM" in api_key) or (len(api_key) < 10)

    if is_dummy_key:
        print("[!] 알림: 'aisstream_config.json'에 API 키가 아직 설정되지 않았습니다.")
        print("    -> https://aisstream.io 에서 무료 키 발급 후 입력하시면 실제 위성 수신으로 전환됩니다.")
        print("[*] 현재는 해상 물리 추측항법(Dead Reckoning) 엔진으로 실시간 항해를 진행합니다.")
        print("-" * 65)

        interval = config.get("update_interval_sec", 3)
        while True:
            try:
                sync_external_vessels(vessels)
                cnt = simulate_dead_reckoning_step(vessels, elapsed_seconds=interval)
                save_vessels(vessels)
                now_str = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S (UTC)")
                print(f"[{now_str}] 실시간 항법 적용 중: {cnt}척 운항 중 | vessels.json 갱신")
                time.sleep(interval)
            except KeyboardInterrupt:
                print("\n[*] 종료되었습니다.")
                break
    else:
        print(f"[*] 유효한 AISStream API Key 감지: {api_key[:6]}******")
        try:
            asyncio.run(run_live_aisstream(api_key, vessels))
        except Exception as e:
            print(f"[!] 실시간 수신 오류: {e}")
            if config.get("dead_reckoning_fallback", True):
                print("[*] 해상 물리 추측항법(Dead Reckoning)으로 자동 전환합니다...")
                while True:
                    simulate_dead_reckoning_step(vessels, elapsed_seconds=3)
                    save_vessels(vessels)
                    time.sleep(3)

if __name__ == "__main__":
    main()

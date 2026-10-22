"""Forward genuine AIS messages over authenticated HTTPS; no fabricated data."""
import asyncio
import hashlib
import hmac
import json
import os
from pathlib import Path
import random
import sys
import time
import urllib.request

if sys.platform == "win32":
    # The bundled runtime's optional site hooks are unnecessary for this service.
    import sysconfig
    sys.path.append(sysconfig.get_paths()["purelib"])
from websockets.asyncio.client import connect

ROOT = Path(__file__).resolve().parent


def load_key():
    if os.environ.get("AISSTREAM_API_KEY"):
        return os.environ["AISSTREAM_API_KEY"]
    protected = ROOT / ".aisstream-key.bin"
    if sys.platform != "win32" or not protected.exists():
        raise RuntimeError("Set AISSTREAM_API_KEY or save the Windows-protected key first")
    import ctypes
    from ctypes import wintypes
    class Blob(ctypes.Structure):
        _fields_ = [("size", wintypes.DWORD), ("data", ctypes.POINTER(ctypes.c_ubyte))]
    raw = protected.read_bytes()
    buffer = (ctypes.c_ubyte * len(raw)).from_buffer_copy(raw)
    source, output = Blob(len(raw), buffer), Blob()
    if not ctypes.windll.crypt32.CryptUnprotectData(ctypes.byref(source), None, None, None, None, 0, ctypes.byref(output)):
        raise RuntimeError("Cannot decrypt the AIS key for this Windows user")
    try:
        return ctypes.string_at(output.data, output.size).decode()
    finally:
        ctypes.windll.kernel32.LocalFree(output.data)


def send_batch(key, records):
    payload = json.dumps(records, separators=(",", ":")).encode()
    stamp = str(int(time.time()))
    signature = hmac.new(key.encode(), stamp.encode() + b"." + payload, hashlib.sha256).hexdigest()
    request = urllib.request.Request(
        os.environ.get("AIS_RELAY_URL", "https://wherevessel-live.onrender.com") + "/api/relay",
        data=payload, headers={"Content-Type": "application/json", "X-AIS-Time": stamp,
                               "X-AIS-Signature": signature})
    with urllib.request.urlopen(request, timeout=20) as response:
        result = json.load(response)
    print("Real AIS messages delivered:", result.get("accepted", 0), flush=True)


async def run():
    key = load_key().strip()
    delay = 5
    pending = {}
    async def forward():
        while True:
            await asyncio.sleep(5)
            if not pending:
                continue
            batch = dict(pending)
            pending.clear()
            try:
                await asyncio.to_thread(send_batch, key, list(batch.values()))
            except Exception as exc:
                # Keep newest observations when HTTPS delivery is temporarily unavailable.
                for identity, record in batch.items():
                    if len(pending) >= 500:
                        break
                    pending.setdefault(identity, record)
                print("Relay delivery retry:", type(exc).__name__, flush=True)
    sender = asyncio.create_task(forward())
    try:
        while True:
            try:
                async with connect("wss://stream.aisstream.io/v0/stream", proxy=None, ping_interval=20) as ws:
                    await ws.send(json.dumps({"APIKey": key, "BoundingBoxes": [[[-90, -180], [90, 180]]],
                        "FilterMessageTypes": ["PositionReport", "StandardClassBPositionReport", "ShipStaticData"]}))
                    print("AIS provider connected", flush=True)
                    delay = 5
                    async for raw in ws:
                        record = json.loads(raw)
                        if record.get("error") or record.get("Error"):
                            raise RuntimeError("AIS subscription rejected")
                        mmsi = record.get("MetaData", {}).get("MMSI")
                        if mmsi:
                            identity = (str(mmsi), record.get("MessageType", ""))
                            pending[identity] = record
                            if len(pending) > 500:
                                pending.pop(next(iter(pending)))
            except Exception as exc:
                status = getattr(getattr(exc, "response", None), "status_code", None)
                print("AIS reconnect:", type(exc).__name__, "HTTP", status, flush=True)
                await asyncio.sleep((300 if status == 429 else delay) + random.uniform(1, 5))
                delay = min(delay * 2, 60)
    finally:
        sender.cancel()


if __name__ == "__main__":
    # One relay process per PC; never multiply upstream connections.
    import socket
    singleton = socket.socket()
    singleton.bind(("127.0.0.1", 39001))
    asyncio.run(run())

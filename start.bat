@echo off
chcp 65001 > nul
title wherevessel - 실시간 선박 관제 솔루션

echo ============================================================
echo   🚢 wherevessel (실시간 선박 해상 위치 관제 솔루션)
echo ============================================================
echo.
echo [1/3] 로컬 웹 서버 시작 중 (포트 3000)...
start /b python -m http.server 3000 > nul 2>&1

echo [2/3] 백그라운드 실시간 AIS 수신 및 해상 항법 엔진 시작 중...
start /b python aisstream_service.py > nul 2>&1

echo [3/3] wherevessel 브라우저 실행 중...
timeout /t 1 /nobreak > nul
start http://localhost:3000

echo.
echo ✅ wherevessel이 정상적으로 실행되었습니다!
echo 접속 주소: http://localhost:3000
echo.
echo ※ 바탕화면의 [wherevessel] 바로가기를 더블클릭하시면 
echo    언제든지 창 없이 깔끔하게 바로 실행됩니다.
echo.
pause

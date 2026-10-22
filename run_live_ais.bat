@echo off
chcp 65001 > nul
title AISStream 실시간 선박 관제 및 해상 항법 엔진
echo ======================================================================
echo  🚢 AISStream.io 실시간 위성/기지국 AIS 및 해상 추측항법(Dead Reckoning) 엔진
echo ======================================================================
echo.
python aisstream_service.py
pause

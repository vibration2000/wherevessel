@echo off
chcp 65001 > nul
title wherevessel 바탕화면 바로가기 생성기

echo ======================================================================
echo   🚢 wherevessel 바탕화면 바로가기 아이콘 생성기
echo ======================================================================
echo.
echo  바탕화면에 [wherevessel] 바로가기 아이콘을 생성하는 중입니다...

cscript //nologo "%~dp0make_shortcut.vbs"

echo.
echo ======================================================================
echo  ✅ [생성 완료] 바탕화면에 'wherevessel' 바로가기가 생성되었습니다!
echo     아이콘 위치: %USERPROFILE%\Desktop\wherevessel.lnk
echo ======================================================================
echo.
echo  바탕화면의 [wherevessel] 바로가기를 더블클릭하시면 
echo  자동으로 백그라운드 수신 엔진과 함께 프로그램이 즉시 실행됩니다.
echo.
pause

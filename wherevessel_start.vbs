Set WshShell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

' Set working directory to project folder
scriptDir = fso.GetParentFolderName(WScript.ScriptFullName)
WshShell.CurrentDirectory = scriptDir

' 1. Launch wherevessel in Chrome App Mode IMMEDIATELY (Instant 0ms popup upon shortcut click!)
chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
If fso.FileExists(chromePath) Then
    WshShell.Run """" & chromePath & """ --app=http://localhost:3000/index.html", 1, False
Else
    WshShell.Run "http://localhost:3000/index.html", 1, False
End If

' 2. Ensure HTTP Server (port 3000) and aisstream_service run silently in background (asynchronous, non-blocking)
WshShell.Run "cmd /c netstat -ano | findstr :3000 >nul || start /b python server.py", 0, False
WshShell.Run "cmd /c tasklist | findstr /i aisstream >nul || start /b python -u aisstream_service.py", 0, False

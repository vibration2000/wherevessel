Set WshShell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

desktop = WshShell.SpecialFolders("Desktop")
currDir = fso.GetParentFolderName(WScript.ScriptFullName)

Set link = WshShell.CreateShortcut(desktop & "\wherevessel.lnk")
link.TargetPath = "wscript.exe"
link.Arguments = """" & currDir & "\wherevessel_start.vbs"""
link.WorkingDirectory = currDir
link.IconLocation = "shell32.dll, 14"
link.Save

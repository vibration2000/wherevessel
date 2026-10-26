param([switch]$OpenBrowser)
$ErrorActionPreference = 'Stop'
$singleAppRoot = $PSScriptRoot
$singleAppUrl = 'http://localhost:3000/'
$singleServerReady = $false
try {
    $singleHealth = Invoke-RestMethod 'http://127.0.0.1:3000/api/health' -TimeoutSec 2
    if ($singleHealth.mode -ne 'single_vessel_on_demand') { throw 'Port 3000 is occupied by an older server. Close it and retry.' }
    $singleServerReady = $true
} catch {
    if ($_.Exception.Message -like '*older server*') { throw }
}
if (-not $singleServerReady) {
    $singleBundledPython = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe'
    if (Test-Path -LiteralPath $singleBundledPython) { $singlePythonPath = $singleBundledPython }
    else { $singlePythonPath = (Get-Command python -ErrorAction Stop).Source }
    $singleLogDir = Join-Path $singleAppRoot '.runtime'
    New-Item -ItemType Directory -Path $singleLogDir -Force | Out-Null
    Start-Process -FilePath $singlePythonPath -ArgumentList 'server.py' -WorkingDirectory $singleAppRoot -WindowStyle Hidden -RedirectStandardOutput (Join-Path $singleLogDir 'single-server.stdout.log') -RedirectStandardError (Join-Path $singleLogDir 'single-server.stderr.log')
    for ($singleAttempt=0; $singleAttempt -lt 20; $singleAttempt++) {
        try {
            $singleHealth = Invoke-RestMethod 'http://127.0.0.1:3000/api/health' -TimeoutSec 1
            if ($singleHealth.mode -eq 'single_vessel_on_demand') { $singleServerReady=$true; break }
        } catch { }
        Start-Sleep -Milliseconds 250
    }
    if (-not $singleServerReady) { throw 'The local vessel research server could not start. Check .runtime/single-server.stderr.log.' }
}
if ($OpenBrowser) { Start-Process $singleAppUrl }
Write-Output ('Ready: ' + $singleAppUrl)


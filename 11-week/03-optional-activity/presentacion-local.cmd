@echo off
setlocal
cd /d "%~dp0"
set PORT=5511
start "" "http://127.0.0.1:%PORT%/release2-presentation.html"
py -m http.server %PORT% --bind 127.0.0.1

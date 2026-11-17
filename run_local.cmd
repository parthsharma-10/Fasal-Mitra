@echo off
setlocal

cd /d "%~dp0"

echo Starting Plant Disease Assistant at http://127.0.0.1:5000
echo Running with system Python...
python app.py

endlocal

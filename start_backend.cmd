@echo off
setlocal
cd /d "%~dp0"

echo [1/2] Ensuring Python packages are installed...
python -m pip install -q -r requirements.txt
if errorlevel 1 (
  echo Retrying installation with --user flag...
  python -m pip install -q --user -r requirements.txt
)

echo [2/2] Starting Flask backend:
echo Open: http://127.0.0.1:5000
echo.
python app.py

endlocal

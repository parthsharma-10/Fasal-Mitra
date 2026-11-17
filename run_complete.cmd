@echo off
setlocal
cd /d "%~dp0"

echo [1/3] Python dependencies...
python -m pip install -q -r requirements.txt
if errorlevel 1 (
  echo Retrying with --user...
  python -m pip install -q --user -r requirements.txt
)

where npm >nul 2>&1
if not errorlevel 1 (
  echo [2/3] Building DTI frontend...
  pushd DTI
  call npm run build
  popd
) else (
  echo [2/3] npm not found; using existing pre-built frontend in DTI\dist
)

echo [3/3] Starting Flask backend + static frontend...
echo Open: http://127.0.0.1:5000
python "app.py"

endlocal

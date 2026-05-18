@echo off
REM OSED Website - One-Click Setup & Run Script
REM This script installs dependencies and starts the dev server

echo.
echo ========================================
echo   OSED Website - Setup ^& Run
echo   One Step Every Day
echo ========================================
echo.

REM Change to project directory
cd /d "c:\Users\domin\OSED Pt 2"

REM Check if Node.js is installed
where node >nul 2>&1
if errorlevel 1 (
    echo.
    echo ERROR: Node.js is not installed!
    echo.
    echo You need to install Node.js first:
    echo 1. Go to: https://nodejs.org/
    echo 2. Download the LTS version
    echo 3. Run the installer
    echo 4. Restart your computer
    echo 5. Try this script again
    echo.
    pause
    exit /b 1
)

echo [1/3] Checking if node_modules exists...
if exist "node_modules\" (
    echo ✓ Dependencies already installed
) else (
    echo Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo.
        echo ✗ Failed to install dependencies
        echo Please check the error messages above
        echo.
        pause
        exit /b 1
    )
    echo ✓ Dependencies installed
)

echo.
echo [2/3] Checking React Router...
npm list react-router-dom >nul 2>&1
if errorlevel 1 (
    echo Installing React Router...
    call npm install react-router-dom @types/react-router-dom
    if errorlevel 1 (
        echo.
        echo ✗ Failed to install React Router
        echo Please check the error messages above
        echo.
        pause
        exit /b 1
    )
    echo ✓ React Router installed
) else (
    echo ✓ React Router already installed
)

echo.
echo [3/3] Starting development server...
echo.
echo ========================================
echo   Website will open at:
echo   http://localhost:3000
echo.
echo   Press Ctrl+C in this window to stop
echo ========================================
echo.

REM Start the dev server
call npm run dev

echo.
echo Development server stopped.
pause

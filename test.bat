@echo off
REM OSED Website - Test Runner Script

echo.
echo ========================================
echo   OSED Website - Run Tests
echo   One Step Every Day
echo ========================================
echo.

cd /d "c:\Users\domin\OSED Pt 2"

echo Checking if test dependencies are installed...
npm list vitest >nul 2>&1
if errorlevel 1 (
    echo Installing test dependencies...
    call npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
    if errorlevel 1 (
        echo ✗ Failed to install test dependencies
        pause
        exit /b 1
    )
    echo ✓ Test dependencies installed
)

echo.
echo Running tests...
echo.

call npm run test

pause

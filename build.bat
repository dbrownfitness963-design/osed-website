@echo off
REM OSED Website - Build & Production Script

echo.
echo ========================================
echo   OSED Website - Build for Production
echo   One Step Every Day
echo ========================================
echo.

cd /d "c:\Users\domin\OSED Pt 2"

echo [1/2] Building for production...
call npm run build

if errorlevel 1 (
    echo ✗ Build failed
    pause
    exit /b 1
)

echo ✓ Build completed successfully
echo.
echo [2/2] Preview production build...
echo.
echo Website will open at: http://localhost:4173
echo Press Ctrl+C to stop
echo.

call npm run preview

pause

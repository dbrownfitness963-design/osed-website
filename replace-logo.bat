@echo off
REM Replace the OSED logo with the new one from Downloads
copy "c:\Users\domin\Downloads\Gemini_Generated_Image_72pd3672pd3672pd (1).png" "C:\Users\domin\OSED Pt 2\public\osed-logo.png" /Y
if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✓ Logo replaced successfully!
    echo.
) else (
    echo.
    echo ✗ Error: Could not copy logo file
    echo.
)
pause

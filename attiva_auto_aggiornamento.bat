@echo off
set "startup_folder=%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup"
set "script_source=C:\Users\Jarch\DiscordTranslator\autorun.vbs"

echo.
echo ===========================================
echo  Configurazione Auto-Update DSTranslator
echo ===========================================
echo.

if exist "%script_source%" (
    copy /Y "%script_source%" "%startup_folder%\DSTranslatorAutoUpdate.vbs" >nul
    echo [OK] Servizio Guardiano installato con successo!
    echo.
    echo Ora, ad ogni avvio del computer, il traduttore verra
    echo ripristinato automaticamente se Discord si aggiorna.
) else (
    echo [ERRORE] Impossibile trovare il file autorun.vbs in C:\Users\Jarch\DiscordTranslator\
)

echo.
pause

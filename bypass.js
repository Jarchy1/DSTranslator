const electron = require('electron');
const path = require('path');
const fs = require('fs');

console.log('[DiscordTranslator] Bypass connector loaded!');

// 1. Bypass CSP per consentire le chiamate a Google Translate
try {
    const { session } = electron;
    if (session && session.defaultSession) {
        session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
            const responseHeaders = Object.assign({}, details.responseHeaders);
            
            // Rimuoviamo la Content-Security-Policy
            for (const header in responseHeaders) {
                if (header.toLowerCase() === 'content-security-policy') {
                    delete responseHeaders[header];
                }
            }
            callback({ cancel: false, responseHeaders: responseHeaders });
        });
        console.log('[DiscordTranslator] CSP headers bypassed.');
    }

} catch (e) {
    console.error('[DiscordTranslator] Failed to hook webRequest for CSP:', e);
}

// 2. Inietta il codice visuale (engine.js) quando si apre la finestra di Discord
electron.app.on('browser-window-created', (e, win) => {
    
    // Rimuoviamo il CSP direttamente sulla sessione di questa finestra
    win.webContents.session.webRequest.onHeadersReceived((details, callback) => {
        const responseHeaders = Object.assign({}, details.responseHeaders);
        for (const header in responseHeaders) {
            if (header.toLowerCase() === 'content-security-policy') {
                delete responseHeaders[header];
            }
        }
        callback({ cancel: false, responseHeaders: responseHeaders });
    });

    win.webContents.on('dom-ready', () => {
        const url = win.webContents.getURL();
        
        // Assicuriamoci di iniettarlo in qualsiasi contesto principale di Discord (app launch, channels, login)
        // Evitando l'overlay nei giochi per prevenire spam di modali
        if ((url.includes('discord.com') || url.includes('discordapp.com')) && !url.includes('overlay')) {
            console.log('[DiscordTranslator] Target window found (' + url + '). Injecting payload...');
            
            const enginePath = path.join(__dirname, 'engine.js');
            
            try {
                if (fs.existsSync(enginePath)) {
                    const engineCode = fs.readFileSync(enginePath, 'utf8');
                    win.webContents.executeJavaScript(engineCode).then(() => {
                        console.log('[DiscordTranslator] Engine script injected successfully!');
                    }).catch(err => {
                        console.error('[DiscordTranslator] Failed to execute engine script:', err);
                    });
                } else {
                    console.error('[DiscordTranslator] Could not find engine.js at:', enginePath);
                }
            } catch (err) {
                console.error('[DiscordTranslator] Could not read engine.js:', err);
            }
        }
    });
});

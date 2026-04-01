// [DiscordTranslator] Rendering Context Engine V7.0 (Network HTTP Interceptor)
console.log('%c[DiscordTranslator] 🚀 Engine V7 (HTTP Network Engine) Attivo!', 'color: #5865F2; font-size: 16px; font-weight: bold;');

const DT_LANGUAGES = [
    { code: 'auto', name: 'Rilevamento Automatico' },
    { code: 'it', name: 'Italiano' },
    { code: 'en', name: 'Inglese' },
    { code: 'es', name: 'Spagnolo' },
    { code: 'fr', name: 'Francese' },
    { code: 'de', name: 'Tedesco' },
    { code: 'pt', name: 'Portoghese' },
    { code: 'ru', name: 'Russo' },
    { code: 'zh-CN', name: 'Cinese (Semplificato)' },
    { code: 'zh-TW', name: 'Cinese (Tradizionale)' },
    { code: 'ja', name: 'Giapponese' },
    { code: 'ko', name: 'Coreano' },
    { code: 'ar', name: 'Arabo' },
    { code: 'hi', name: 'Hindi' },
    { code: 'nl', name: 'Olandese' },
    { code: 'tr', name: 'Turco' },
    { code: 'pl', name: 'Polacco' },
    { code: 'sv', name: 'Svedese' },
    { code: 'da', name: 'Danese' },
    { code: 'fi', name: 'Finlandese' },
    { code: 'no', name: 'Norvegese' },
    { code: 'cs', name: 'Ceco' },
    { code: 'el', name: 'Greco' },
    { code: 'he', name: 'Ebraico' },
    { code: 'th', name: 'Tailandese' },
    { code: 'vi', name: 'Vietnamita' },
    { code: 'id', name: 'Indonesiano' },
    { code: 'uk', name: 'Ucraino' },
    { code: 'ro', name: 'Rumeno' }
];

const DEFAULT_CONFIG = {
    sourceLang: 'it',
    targetLang: 'en',
    isOutgoingEnabled: false,
    isIncomingEnabled: true
};

function loadConfig() {
    try {
        if (typeof localStorage !== 'undefined') {
            const stored = localStorage.getItem('dt_config');
            if (stored) return { ...DEFAULT_CONFIG, ...JSON.parse(stored) };
        }
    } catch(e) {}
    return DEFAULT_CONFIG;
}

function saveConfig(cfg) {
    globalConfig = cfg;
    try {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('dt_config', JSON.stringify(cfg));
        }
    } catch(e) {}
    updateUIState();
}

let globalConfig = loadConfig();

// --- 1. CSS (DESIGN PREMIUM ANIMATO) ---
const dtStyle = document.createElement('style');
dtStyle.textContent = `
    /* Discord Native-Style Toggles (In-Bar UI) */
    .dt-inner-btn {
        display: flex !important; align-items: center !important; justify-content: center !important;
        background: transparent !important; border: 1px solid transparent !important; box-sizing: border-box !important;
        color: #b5bac1 !important; cursor: pointer !important; border-radius: 8px !important; padding: 0 !important;
        transition: color 0.15s ease-out, background-color 0.15s ease-out, border-color 0.15s ease-out !important;
        margin: 0 4px !important; height: 32px !important; width: 32px !important; outline: none !important;
        position: relative !important; overflow: visible !important;
    }
    
    /* Stato Hover Pulsante (Ripristinato Hover Originale Nativo e Hover Rosso per il Muto) */
    .dt-inner-btn:hover { 
        color: #dbdee1 !important; 
        background-color: rgba(255, 255, 255, 0.05) !important; 
        border-color: transparent !important;
    }
    
    /* Linea obliqua ridisegnata (Strike-through nativa via JS CSS) */
    .dt-inner-btn::after {
        content: ''; position: absolute; top: 50%; left: 50%;
        width: 24px; height: 2.5px; background-color: #f23f43 !important;
        transform: translate(-50%, -50%) rotate(-45deg); /* Da basso a sinistra verso alto a destra */
        border-radius: 4px; pointer-events: none;
        border: 2px solid #313338 !important; box-sizing: content-box;
        opacity: 0;
    }

    /* Animazione Ingresso: Disegna dal basso-sinistra verso l'alto-destra */
    @keyframes dt-slash-in {
        from { clip-path: inset(0 100% 0 0); opacity: 1; }
        to { clip-path: inset(0 0 0 0); opacity: 1; }
    }
    
    /* Animazione Uscita: Cancella ritirandosi dal basso-sinistra verso l'alto-destra */
    @keyframes dt-slash-out {
        from { clip-path: inset(0 0 0 0); opacity: 1; }
        100% { clip-path: inset(0 0 0 100%); opacity: 1; }
    }

    /* Stato DISATTIVATO (Ripristinato Hover Rosso Sbiadito) */
    .dt-inner-btn.dt-disabled { color: #f23f43 !important; }
    .dt-inner-btn.dt-disabled:hover { background-color: rgba(242, 63, 67, 0.1) !important; color: #f23f43 !important; }
    
    .dt-inner-btn.dt-disabled::after {
        opacity: 1;
        animation: dt-slash-in 0.25s cubic-bezier(0.175, 0.885, 0.32, 1) forwards;
    }
    
    /* Stato di RI-ATTIVAZIONE (Riproduce animazione sparizione verso destea) */
    .dt-inner-btn.dt-enabled::after {
        opacity: 1;
        animation: dt-slash-out 0.25s cubic-bezier(0.175, 0.885, 0.32, 1) forwards;
    }
    /* Discord Native Hover Tooltip (Applicati gli HEX originali chiesti dall'utente) */
    .dt-tooltip {
        position: absolute; bottom: calc(100% + 8px); left: 50%;
        transform: translateX(-50%);
        background-color: #393a41; color: #f2f2f3;
        border: 1px solid #44454c;
        padding: 6px 12px; border-radius: 8px;
        font-family: 'gg sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 14px; font-weight: 500; white-space: nowrap;
        pointer-events: none; opacity: 0; visibility: hidden;
        box-shadow: 0 4px 8px rgba(0,0,0,0.3); z-index: 10000;
    }
    
    /* Il triangolino che punta all'icona (aggiornato al nuovo colore di sfondo) */
    .dt-tooltip::after {
        content: ''; position: absolute; top: 100%; left: 50%;
        transform: translateX(-50%);
        border-width: 6px; border-style: solid;
        border-color: #393a41 transparent transparent transparent;
    }
    /* Pseudo-elemento finto per mimare il bordo del triangolino */
    .dt-tooltip::before {
        content: ''; position: absolute; top: 100%; left: 50%;
        transform: translateX(-50%);
        border-width: 7px; border-style: solid;
        border-color: #44454c transparent transparent transparent;
        z-index: -1;
    }

    .dt-inner-btn:hover .dt-tooltip {
        opacity: 1; visibility: visible;
    }
    
    /* UI Debloat: Nascondi i bottoni Regali e Adesivi originali di Discord per fare pulizia */
    div[class*="buttons_"] > button[aria-label*="Regalo" i],
    div[class*="buttons_"] > button[aria-label*="Gift" i],
    div[class*="buttons_"] > button[aria-label*="Adesivi" i],
    div[class*="buttons_"] > button[aria-label*="Sticker" i] {
        display: none !important;
    }

    /* Animazione "Respiro" per la barra chat */
    @keyframes dt-pulse-glow {
        0% { box-shadow: 0 0 0 0 rgba(88, 101, 242, 0.4); }
        70% { box-shadow: 0 0 0 6px rgba(88, 101, 242, 0); }
        100% { box-shadow: 0 0 0 0 rgba(88, 101, 242, 0); }
    }
    .dt-textarea-active {
        background-color: rgba(88, 101, 242, 0.08) !important;
        border: 1px solid rgba(88, 101, 242, 0.6) !important;
        border-radius: 8px !important;
        animation: dt-pulse-glow 2s infinite;
    }
    
    /* Effetto Vetro (Glassmorphism) e Entrata Animata del Menu */
    .dt-modal-overlay {
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(0, 0, 0, 0.6); z-index: 10000;
        display: none; align-items: center; justify-content: center;
        backdrop-filter: blur(4px); /* Effetto sfocatura sfondo */
        animation: dt-fade-in 0.2s ease-out;
    }
    .dt-modal {
        background: #313338; color: #dbdee1; border-radius: 12px; width: 440px; padding: 24px;
        box-shadow: 0 12px 24px rgba(0,0,0,0.5); font-family: 'gg sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        animation: dt-pop-up 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        border: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    @keyframes dt-fade-in { from { opacity: 0; } to { opacity: 1; } }
    @keyframes dt-pop-up { from { transform: scale(0.9) translateY(20px); opacity: 0; } to { transform: scale(1) translateY(0); opacity: 1; } }

    .dt-modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
    .dt-modal-header h2 { margin: 0; color: #f2f3f5; font-size: 20px; font-weight: 800; }
    .dt-close-icon { cursor: pointer; color: #80848e; transition: color 0.2s, transform 0.2s; }
    .dt-close-icon:hover { color: #f2f3f5; transform: rotate(90deg); }
    
    .dt-form-group { margin-bottom: 20px; }
    .dt-form-group label { display: block; font-size: 12px; font-weight: 700; color: #b5bac1; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px; }
    .dt-select {
        background: #1e1f22; color: #dbdee1; border: 1px solid #1e1f22; border-radius: 6px; padding: 12px; width: 100%;
        font-family: inherit; font-size: 14px; outline: none; cursor: pointer; transition: border-color 0.2s;
    }
    .dt-select:focus { border-color: #5865F2; }
    
    .dt-toggle-group { display: flex; justify-content: space-between; align-items: center; background: #2b2d31; border-radius: 8px; padding: 14px; margin-bottom: 12px; border: 1px solid rgba(255,255,255,0.02); }
    .dt-toggle-label { font-size: 15px; font-weight: 600; color: #f2f3f5; }
    
    .dt-switch { position: relative; display: inline-block; width: 44px; height: 26px; }
    .dt-switch input { opacity: 0; width: 0; height: 0; }
    .dt-slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #80848e; transition: .3s; border-radius: 26px; }
    .dt-slider:before { position: absolute; content: ""; height: 20px; width: 20px; left: 3px; bottom: 3px; background-color: white; transition: .3s; border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.2); }
    input:checked + .dt-slider { background-color: #23a559; }
    input:checked + .dt-slider:before { transform: translateX(18px); }

    .dt-message-wrapper.dt-show-translation {
        font-size: 0 !important; line-height: 0 !important; color: transparent !important;
    }
    .dt-message-wrapper.dt-show-translation > *:not(.dt-translated-text):not(.dt-inline-toggle) {
        display: none !important;
    }
    .dt-message-wrapper .dt-translated-text {
        font-size: 1rem !important; line-height: 1.375rem !important; color: #dbdee1 !important; 
        font-style: normal; position: relative;
    }
    /* Sottolineatura delicata per far capire che è un testo tradotto */
    .dt-message-wrapper.dt-show-translation .dt-translated-text {
        border-bottom: 1px dashed rgba(88, 101, 242, 0.4);
    }
    
    .dt-message-wrapper.dt-show-original .dt-translated-text {
        display: none !important;
    }

    .dt-inline-toggle {
        display: inline-flex !important; align-items: center; justify-content: center;
        vertical-align: middle; margin-left: 8px; cursor: pointer;
        background: rgba(88, 101, 242, 0.1); color: #5865F2 !important; border-radius: 6px; padding: 4px 6px;
        user-select: none; transition: background 0.2s, transform 0.2s, color 0.2s;
    }
    .dt-inline-toggle:hover { background: #5865F2; color: #ffffff !important; transform: scale(1.08); }
`;
if (document.head) document.head.appendChild(dtStyle);

// --- 2. GESTIONE TRADUZIONE API ---
async function translateText(text, targetLanguage, sourceLanguage = 'auto') {
    if (!text || text.trim() === '') return '';
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(text)}`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('API Error');
        const json = await response.json();
        let translatedText = '';
        if (json && json[0]) {
            json[0].forEach(part => { if (part && part[0]) translatedText += part[0]; });
        }
        return translatedText;
    } catch (e) {
        return `[Errore Rete - Non tradotto]`;
    }
}

// --- 3. UI DEL MENU DELLE IMPOSTAZIONI E FIRST-RUN TOUR ---
function buildModalUI(isFirstRun = false) {
    const overlay = document.createElement('div');
    overlay.className = 'dt-modal-overlay';
    overlay.id = 'dt-modal-root';
    
    const langOptions = DT_LANGUAGES.map(l => `<option value="${l.code}">${l.name}</option>`).join('');
    
    overlay.innerHTML = `
        <div class="dt-modal">
            <div class="dt-modal-header">
                <h2>${isFirstRun ? '🎉 Benvenuto in NativeTranslator!' : '🌐 Traduttore Integrato Network'}</h2>
                ${!isFirstRun ? `<div class="dt-close-icon" id="dt-close-btn"><svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg></div>` : ''}
            </div>
            
            ${isFirstRun ? `<p style="font-size: 14px; margin-bottom: 24px; color: #b5bac1; line-height: 1.5;">Grazie per aver installato il Traduttore Definitivo. Prima di cominciare, <strong>imposta le tue lingue preferite</strong>. Potrai sempre cambiarle dall'icona del mappamondo vicino alla barra messaggi!</p>` : ''}
            
            <div class="dt-toggle-group">
                <span class="dt-toggle-label">Ricezione Messaggi (Entrata)</span>
                <label class="dt-switch">
                    <input type="checkbox" id="dt-in-enable" ${globalConfig.isIncomingEnabled ? 'checked' : ''}>
                    <span class="dt-slider"></span>
                </label>
            </div>
            <div class="dt-form-group">
                <label>Voglio leggere la chat in:</label>
                <select class="dt-select" id="dt-in-lang">${langOptions}</select>
            </div>

            <hr style="border: 0; height: 1px; background: #1e1f22; margin: 24px 0;">

            <div class="dt-toggle-group">
                <span class="dt-toggle-label">Invio Messaggi (Uscita)</span>
                <label class="dt-switch">
                    <input type="checkbox" id="dt-out-enable" ${globalConfig.isOutgoingEnabled ? 'checked' : ''}>
                    <span class="dt-slider"></span>
                </label>
            </div>
            <div class="dt-form-group">
                <label>Voglio che i miei messaggi vengano tradotti in:</label>
                <select class="dt-select" id="dt-out-lang">${langOptions}</select>
            </div>

            ${isFirstRun ? `<button id="dt-start-btn" style="width: 100%; background: #5865F2; color: #fff; border: none; padding: 14px; border-radius: 6px; font-weight: bold; cursor: pointer; margin-top: 16px; font-size: 14px; transition: background 0.2s;">Comincia ad Usarlo 🚀</button>` : ''}
        </div>
    `;
    
    if (document.body) document.body.appendChild(overlay);
    
    document.getElementById('dt-in-lang').value = globalConfig.sourceLang;
    document.getElementById('dt-out-lang').value = globalConfig.targetLang;
    
    const saveChanges = () => {
        saveConfig({
            isIncomingEnabled: document.getElementById('dt-in-enable').checked,
            sourceLang: document.getElementById('dt-in-lang').value,
            isOutgoingEnabled: document.getElementById('dt-out-enable').checked,
            targetLang: document.getElementById('dt-out-lang').value
        });
    };
    
    if (isFirstRun) {
        // Obbliga l'utente a cliccare Inizia senza chiudere per sbaglio fuori dal box
        document.getElementById('dt-start-btn').onclick = () => {
             saveChanges();
             try { if(typeof localStorage !== 'undefined') localStorage.setItem('dt_tutorial_done', 'true'); } catch(e){}
             overlay.style.display = 'none';
        };
    } else {
        document.getElementById('dt-close-btn').onclick = () => { overlay.style.display = 'none'; };
        overlay.addEventListener('click', (e) => { if(e.target === overlay) overlay.style.display = 'none'; });
    }
    
    document.getElementById('dt-in-enable').onchange = saveChanges;
    document.getElementById('dt-in-lang').onchange = saveChanges;
    document.getElementById('dt-out-enable').onchange = saveChanges;
    document.getElementById('dt-out-lang').onchange = saveChanges;
}

function openSettingsModal(isFirstRun = false) {
    let modal = document.getElementById('dt-modal-root');
    if (modal) { 
        modal.parentElement.removeChild(modal); 
    }
    buildModalUI(isFirstRun); 
    modal = document.getElementById('dt-modal-root');
    
    document.getElementById('dt-in-enable').checked = globalConfig.isIncomingEnabled;
    document.getElementById('dt-out-enable').checked = globalConfig.isOutgoingEnabled;
    document.getElementById('dt-in-lang').value = globalConfig.sourceLang;
    document.getElementById('dt-out-lang').value = globalConfig.targetLang;
    
    modal.style.display = 'flex';
}

// --- 4. INIEZIONE TASTI E COLORE BARRA CHAT ---
// Icona Entrata (Occhio) - Lettura
const iconInSVG = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`;
// Icona Uscita (Mappamondo) - Scrittura
const iconOutSVG = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.18 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.78 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.91-4.33-3.56zm2.95-8H5.08c1.32-2.14 3.49-3.66 6.07-4.18-.7 1.26-1.25 2.61-1.6 4.03l-1.52.15zM12 19.96c-.83-1.18-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.78-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.34.16-2h4.68c.09.66.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>`;

function updateUIState() {
    const innerScrollable = document.querySelector('div[class*="scrollableContainer_"]');
    if (innerScrollable) {
        if (globalConfig.isOutgoingEnabled) innerScrollable.classList.add('dt-textarea-active');
        else innerScrollable.classList.remove('dt-textarea-active');
    }
    
    const btnOut = document.getElementById('dt-btn-out');
    if (btnOut) {
        if (!globalConfig.isOutgoingEnabled) {
            btnOut.classList.remove('dt-enabled');
            btnOut.classList.add('dt-disabled');
        } else if (btnOut.classList.contains('dt-disabled')) {
            btnOut.classList.remove('dt-disabled');
            btnOut.classList.add('dt-enabled');
        }
    }

    const btnIn = document.getElementById('dt-btn-in');
    if (btnIn) {
        if (!globalConfig.isIncomingEnabled) {
            btnIn.classList.remove('dt-enabled');
            btnIn.classList.add('dt-disabled');
        } else if (btnIn.classList.contains('dt-disabled')) {
            btnIn.classList.remove('dt-disabled');
            btnIn.classList.add('dt-enabled');
        }
    }
}

function injectChatButton() {
    // Cerchiamo il contenitore base dei pulsantini a destra (Regali, Gif, Emoji...)
    const nativeButtonsContainer = document.querySelector('div[class*="buttons_"]');
    if (!nativeButtonsContainer) return;

    if (!document.getElementById('dt-btn-out')) {
        
        // Tasto GLOBE (Riservato alla SCRITTURA - Uscita)
        const btnOut = document.createElement('button');
        btnOut.id = 'dt-btn-out';
        btnOut.className = 'dt-inner-btn';
        btnOut.innerHTML = iconOutSVG + '<div class="dt-tooltip">Traduttore</div>';
        
        btnOut.onclick = (e) => {
            saveConfig({ ...globalConfig, isOutgoingEnabled: !globalConfig.isOutgoingEnabled });
        };
        btnOut.oncontextmenu = (e) => {
            e.preventDefault(); openSettingsModal();
        };

        // Tasto EYE (Riservato alla LETTURA - Entrata)
        const btnIn = document.createElement('button');
        btnIn.id = 'dt-btn-in';
        btnIn.className = 'dt-inner-btn';
        btnIn.innerHTML = iconInSVG + '<div class="dt-tooltip">Visione Tradotta</div>';
        
        btnIn.onclick = (e) => {
            saveConfig({ ...globalConfig, isIncomingEnabled: !globalConfig.isIncomingEnabled });
        };
        btnIn.oncontextmenu = (e) => {
            e.preventDefault(); openSettingsModal();
        };

        // Inonda la flexbox anteponendo prima il Mappamondo e poi l'Occhio come primi tasti a sinistra tra gli sticker
        nativeButtonsContainer.insertBefore(btnOut, nativeButtonsContainer.firstChild);
        nativeButtonsContainer.insertBefore(btnIn, nativeButtonsContainer.firstChild);
    }
    
    // In assenza temporanea o ricreazione re-applica stato CSS attivi ai bottoni nativi
    updateUIState();
}
const chatObserver = new MutationObserver(() => injectChatButton());
// Safe interval initialization
if(typeof setInterval !== 'undefined') setInterval(injectChatButton, 2000);

// --- 5. LOGICA IN Entrata (INCOMING) ---
function injectIncomingTranslation(messageElement, translatedText) {
    if (!messageElement || !translatedText) return;
    if (messageElement.hasAttribute('data-dt-translated')) return;
    
    messageElement.setAttribute('data-dt-translated', 'true');
    if (translatedText === "[Errore Rete - Non tradotto]" || translatedText.trim() === '') return;

    messageElement.classList.add('dt-message-wrapper');
    messageElement.classList.add('dt-show-translation');

    const transSpan = document.createElement('span');
    transSpan.className = 'dt-translated-text';
    transSpan.innerText = translatedText;

    const eyeSVG = `<svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`;
    const globeSVG = `<svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.18 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.78 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.91-4.33-3.56zm2.95-8H5.08c1.32-2.14 3.49-3.66 6.07-4.18-.7 1.26-1.25 2.61-1.6 4.03l-1.52.15zM12 19.96c-.83-1.18-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.78-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.34.16-2h4.68c.09.66.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>`;

    const toggleBtn = document.createElement('span');
    toggleBtn.className = 'dt-inline-toggle';
    toggleBtn.innerHTML = eyeSVG; 
    toggleBtn.title = "Mostra originale / Nascondi";
    
    toggleBtn.onclick = (e) => {
        e.stopPropagation(); 
        if (messageElement.classList.contains('dt-show-translation')) {
            messageElement.classList.remove('dt-show-translation');
            messageElement.classList.add('dt-show-original');
            toggleBtn.innerHTML = globeSVG;
            toggleBtn.title = "Ripristina lingua tradotta";
        } else {
            messageElement.classList.remove('dt-show-original');
            messageElement.classList.add('dt-show-translation');
            toggleBtn.innerHTML = eyeSVG;
            toggleBtn.title = "Mostra originale / Nascondi";
        }
    };
    
    // Inietta
    messageElement.appendChild(transSpan);
    messageElement.appendChild(toggleBtn);
}

async function handleMessageNode(node) {
    if (!globalConfig.isIncomingEnabled) return;
    
    if (node.nodeType === 1 && node.id && node.id.startsWith('message-content-')) {
        // FIX BUGOGRAFICO: Evitiamo di tradurre e iniettare i tasti sulle citazioni in miniatura delle risposte.
        if (node.closest('[class*="repliedMessage_"]') || node.closest('[class*="repliedTextPreview"]') || node.closest('[class*="repliedTextContent"]')) {
             return;
        }
        
        const textContent = node.innerText || node.textContent;
        if (textContent.trim().length > 0 && !node.hasAttribute('data-dt-translated')) {
            const translated = await translateText(textContent, globalConfig.sourceLang, 'auto');
            if(translated.toLowerCase().trim() !== textContent.toLowerCase().trim()) {
                 injectIncomingTranslation(node, translated);
            } else {
                 node.setAttribute('data-dt-translated', 'true'); 
            }
        }
    } else if (node.nodeType === 1 && node.querySelector) {
        const messageContents = node.querySelectorAll('[id^="message-content-"]:not([data-dt-translated])');
        messageContents.forEach(msgNode => handleMessageNode(msgNode));
    }
}

const msgObserver = new MutationObserver((mutations) => {
    if (!globalConfig.isIncomingEnabled) return;
    mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
            handleMessageNode(node);
        });
    });
});


// --- 6. LOGICA IN USCITA (NETWORK HTTP PACKET INTERCEPTOR) ---
// La soluzione definitiva a livello Architetturale.
// Niente simulazione di Eventi Tasti, niente React Slate, niente moduli di Webpack obsoleti.
// Riscriviamo silenziosamente i pacchetti JSON a livello della rete del browser prima che vengano sparati al server Discord.

if (typeof XMLHttpRequest !== 'undefined') {
    const originOpen = XMLHttpRequest.prototype.open;
    const originSend = XMLHttpRequest.prototype.send;

    XMLHttpRequest.prototype.open = function(method, url) {
        this._dt_url = url;
        this._dt_method = method;
        return originOpen.apply(this, arguments);
    };

    XMLHttpRequest.prototype.send = function(body) {
        // Se stiamo intercettando messaggi inviati nei canali Discord...
        if (globalConfig.isOutgoingEnabled && 
            this._dt_method === 'POST' && 
            typeof this._dt_url === 'string' && 
            /\/api\/v\d+\/channels\/\d+\/messages/.test(this._dt_url)) {
            
            // Il body è solitamente una stringa JSON
            if (typeof body === 'string') {
                try {
                    let json = JSON.parse(body);
                    if (json.content && !json.content.startsWith('/')) {
                        // Congeliamo istantaneamente questo pacchetto di rete nascondendolo dal server per una frazione di secondo
                        const originalText = json.content;
                        
                        translateText(originalText, globalConfig.targetLang, 'auto').then(trans => {
                             if (trans && !trans.startsWith('[Errore')) {
                                 json.content = trans; // Modifica il pacchetto
                             }
                             // Adesso lascia andare il pacchetto verso Discord
                             originSend.call(this, JSON.stringify(json));
                        }).catch(err => {
                             originSend.call(this, body); // Backup invariato
                        });
                        
                        return; // Fine dell'esecuzione (Discord non saprà mai dell'attesa)
                    }
                } catch(e) { /* Non è un JSON parificabile o altro tipo di body */ }
            }
        }
        
        // Per tutte le altre migliaia di richieste di Discord (immagini, cuori, reazioni, log...) eseguiamo normalmente
        return originSend.apply(this, arguments);
    };
    console.log('%c[DiscordTranslator] 📡 HTTP XHR Network Hooked in ascolto!', 'color: #23a559; font-weight: bold;');
}

// Intercettiamo per sicurezza anche l'API Fetch (qualora Discord smettesse di usare HttpRequest)
if (typeof window.fetch !== 'undefined') {
    const originFetch = window.fetch;
    window.fetch = async function(...args) {
        let url = args[0];
        let options = args[1];
        
        if (globalConfig.isOutgoingEnabled && options && options.method && options.method.toUpperCase() === 'POST' && 
            typeof url === 'string' && /\/api\/v\d+\/channels\/\d+\/messages/.test(url)) {
             if (options.body && typeof options.body === 'string') {
                  try {
                       let json = JSON.parse(options.body);
                       if (json.content && !json.content.startsWith('/')) {
                            let trans = await translateText(json.content, globalConfig.targetLang, 'auto');
                            if (trans && !trans.startsWith('[Errore')) {
                                 json.content = trans;
                                 options.body = JSON.stringify(json);
                            }
                       }
                  } catch(e) {}
             }
        }
        return originFetch.apply(this, args);
    };
}

// App Avvio Generale
setTimeout(() => {
    if (document.getElementById('app-mount') || document.body) {
        const targetObj = document.getElementById('app-mount') || document.body;
        msgObserver.observe(targetObj, { childList: true, subtree: true });
        if(typeof chatObserver !== 'undefined') chatObserver.observe(targetObj, { childList: true, subtree: true });
        
        document.querySelectorAll('[id^="message-content-"]').forEach(handleMessageNode);
        injectChatButton();
        
        // Controllo e Avvio First-Run Tour Guidato se non è mai stato fatto
        setTimeout(() => {
             let isTutorialDone = false;
             try { if(typeof localStorage !== 'undefined') isTutorialDone = !!localStorage.getItem('dt_tutorial_done'); } catch(e){}
             if(!isTutorialDone) {
                  openSettingsModal(true);
             }
        }, 1000);
    }
}, 3000);

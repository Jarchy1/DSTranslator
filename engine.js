// [DiscordTranslator] Rendering Context Engine V7.0 (Network HTTP Interceptor)
console.log('%c[DiscordTranslator] 🚀 Engine V7 (HTTP Network Engine) Attivo!', 'color: #5865F2; font-size: 16px; font-weight: bold;');

const DT_LANGUAGES = [
    { code: 'auto', name: 'Rilevamento Automatico' },
    { code: 'af', name: 'Afrikaans' },
    { code: 'sq', name: 'Albanese' },
    { code: 'am', name: 'Amarico' },
    { code: 'ar', name: 'Arabo' },
    { code: 'hy', name: 'Armeno' },
    { code: 'az', name: 'Azerbaigiano' },
    { code: 'eu', name: 'Basco' },
    { code: 'bn', name: 'Bengalese' },
    { code: 'be', name: 'Bielorusso' },
    { code: 'my', name: 'Birmano' },
    { code: 'bs', name: 'Bosniaco' },
    { code: 'bg', name: 'Bulgaro' },
    { code: 'km', name: 'Cambogiano' },
    { code: 'ca', name: 'Catalano' },
    { code: 'ceb', name: 'Cebuano' },
    { code: 'cs', name: 'Ceco' },
    { code: 'ny', name: 'Chichewa' },
    { code: 'zh-CN', name: 'Cinese (Semplificato)' },
    { code: 'zh-TW', name: 'Cinese (Tradizionale)' },
    { code: 'ko', name: 'Coreano' },
    { code: 'co', name: 'Corso' },
    { code: 'ht', name: 'Creolo Haitiano' },
    { code: 'hr', name: 'Croato' },
    { code: 'ku', name: 'Curdo (Kurmanji)' },
    { code: 'da', name: 'Danese' },
    { code: 'he', name: 'Ebraico' },
    { code: 'eo', name: 'Esperanto' },
    { code: 'et', name: 'Estone' },
    { code: 'fi', name: 'Finlandese' },
    { code: 'fr', name: 'Francese' },
    { code: 'fy', name: 'Frisone' },
    { code: 'gd', name: 'Gaelico Scozzese' },
    { code: 'gl', name: 'Galiziano' },
    { code: 'cy', name: 'Gallese' },
    { code: 'ka', name: 'Georgiano' },
    { code: 'ja', name: 'Giapponese' },
    { code: 'jv', name: 'Giavanese' },
    { code: 'el', name: 'Greco' },
    { code: 'gu', name: 'Gujarati' },
    { code: 'ha', name: 'Hausa' },
    { code: 'haw', name: 'Hawaiano' },
    { code: 'hi', name: 'Hindi' },
    { code: 'hmn', name: 'Hmong' },
    { code: 'ig', name: 'Igbo' },
    { code: 'id', name: 'Indonesiano' },
    { code: 'en', name: 'Inglese' },
    { code: 'ga', name: 'Irlandese' },
    { code: 'is', name: 'Islandese' },
    { code: 'it', name: 'Italiano' },
    { code: 'kn', name: 'Kannada' },
    { code: 'kk', name: 'Kazako' },
    { code: 'ky', name: 'Kirghiso' },
    { code: 'lo', name: 'Lao' },
    { code: 'la', name: 'Latino' },
    { code: 'lv', name: 'Lettone' },
    { code: 'lt', name: 'Lituano' },
    { code: 'lb', name: 'Lussemburghese' },
    { code: 'mk', name: 'Macedone' },
    { code: 'ml', name: 'Malayalam' },
    { code: 'ms', name: 'Malese' },
    { code: 'mg', name: 'Malgascio' },
    { code: 'mt', name: 'Maltese' },
    { code: 'mi', name: 'Maori' },
    { code: 'mr', name: 'Marathi' },
    { code: 'mn', name: 'Mongolo' },
    { code: 'ne', name: 'Nepalese' },
    { code: 'no', name: 'Norvegese' },
    { code: 'nl', name: 'Olandese' },
    { code: 'ps', name: 'Pashto' },
    { code: 'fa', name: 'Persiano' },
    { code: 'pl', name: 'Polacco' },
    { code: 'pt', name: 'Portoghese' },
    { code: 'pa', name: 'Punjabi' },
    { code: 'ro', name: 'Rumeno' },
    { code: 'ru', name: 'Russo' },
    { code: 'sm', name: 'Samoano' },
    { code: 'sr', name: 'Serbo' },
    { code: 'st', name: 'Sesotho' },
    { code: 'sn', name: 'Shona' },
    { code: 'sd', name: 'Sindhi' },
    { code: 'si', name: 'Singalese' },
    { code: 'sk', name: 'Slovacco' },
    { code: 'sl', name: 'Sloveno' },
    { code: 'so', name: 'Somalo' },
    { code: 'es', name: 'Spagnolo' },
    { code: 'su', name: 'Sundanese' },
    { code: 'sv', name: 'Svedese' },
    { code: 'sw', name: 'Swahili' },
    { code: 'tg', name: 'Tagiko' },
    { code: 'tl', name: 'Tagalog' },
    { code: 'th', name: 'Tailandese' },
    { code: 'ta', name: 'Tamil' },
    { code: 'de', name: 'Tedesco' },
    { code: 'te', name: 'Telugu' },
    { code: 'tr', name: 'Turco' },
    { code: 'uk', name: 'Ucraino' },
    { code: 'ug', name: 'Uiguro' },
    { code: 'ur', name: 'Urdu' },
    { code: 'uz', name: 'Uzbeco' },
    { code: 'vi', name: 'Vietnamita' },
    { code: 'xh', name: 'Xhosa' },
    { code: 'yi', name: 'Yiddish' },
    { code: 'yo', name: 'Yoruba' },
    { code: 'zu', name: 'Zulu' }
];

const DEFAULT_CONFIG = {
    sourceLang: 'it',
    targetLang: 'en',
    readMode: 'replace',
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
    const oldReadMode = globalConfig ? globalConfig.readMode : undefined;
    globalConfig = cfg;
    try {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('dt_config', JSON.stringify(cfg));
        }
    } catch(e) {}
    updateUIState();
    
    if (oldReadMode !== undefined && oldReadMode !== cfg.readMode && typeof refreshAllTranslationsStyle === 'function') {
        refreshAllTranslationsStyle();
    }
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
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.4); z-index: 10000;
        display: none; align-items: center; justify-content: center;
        backdrop-filter: blur(8px); /* Blur morbido MacOS */
        animation: dt-fade-in 0.25s ease-out;
    }
    .dt-modal {
        background: rgba(30,31,34, 0.85); /* Trasparenza Acrilica */
        backdrop-filter: blur(32px) saturate(150%);
        color: #dbdee1; border-radius: 16px; width: 440px; padding: 28px;
        box-shadow: 0 24px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05) inset;
        font-family: 'gg sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        animation: dt-pop-up 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.15);
    }
    
    @keyframes dt-fade-in { from { opacity: 0; } to { opacity: 1; } }
    @keyframes dt-pop-up { from { transform: scale(0.95) translateY(10px); opacity: 0; } to { transform: scale(1) translateY(0); opacity: 1; } }

    .dt-modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.05); }
    .dt-modal-header h2 { margin: 0; color: #f2f3f5; font-size: 22px; font-weight: 800; display: flex; align-items: center; gap: 8px; }
    .dt-badge { background: linear-gradient(135deg, #5865F2, #c7a7ff); -webkit-background-clip: text; color: transparent; font-size: 14px; padding: 2px 6px; border-radius: 6px; border: 1px solid rgba(88, 101, 242, 0.3); font-weight: 900; }
    .dt-close-icon { cursor: pointer; color: #80848e; transition: color 0.2s, transform 0.2s; background: rgba(255,255,255,0.03); border-radius: 50%; padding: 6px; display: flex; }
    .dt-close-icon:hover { color: #f2f3f5; transform: rotate(90deg); background: rgba(242, 63, 67, 0.2); color: #f23f43; }
    
    /* Sistema Layout "Cards" stile Apple/Discord Premium */
    .dt-card { background: rgba(43,45,49, 0.5); border: 1px solid rgba(255,255,255,0.02); border-radius: 12px; padding: 18px; margin-bottom: 20px; transition: transform 0.2s ease, background 0.2s ease; }
    .dt-card:hover { transform: translateY(-2px); background: rgba(43,45,49, 0.8); border: 1px solid rgba(255,255,255,0.05); box-shadow: 0 8px 16px rgba(0,0,0,0.2); }
    
    .dt-card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; }
    .dt-card-title { display: flex; gap: 12px; align-items: center; }
    .dt-icon-box { background: rgba(255,255,255,0.03); width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px; box-shadow: inset 0 1px 0 rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.02); }
    
    .dt-card-text h3 { margin: 0 0 4px 0; font-size: 16px; color: #f2f3f5; font-weight: 700; }
    .dt-card-text p { margin: 0; font-size: 12px; color: #949ba4; font-weight: 500; line-height: 1.3; }
    
    .dt-form-group { margin-top: 16px; }
    .dt-form-group label { display: block; font-size: 11px; font-weight: 800; color: #80848e; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.8px; }
    
    .dt-select-wrapper { position: relative; }
    .dt-select { display: none; } /* Nascondiamo la Select Originale di Window/Mac */

    /* Custom Modern Select Dropdowns (Stile Nitro) */
    .dt-custom-select { position: relative; user-select: none; width: 100%; }
    .dt-custom-select-trigger { 
        display: flex; justify-content: space-between; align-items: center;
        background: #1e1f22; color: #dbdee1; border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 12px 14px; 
        font-family: inherit; font-size: 14px; cursor: pointer; transition: all 0.2s ease; 
    }
    .dt-custom-select-trigger:hover { background: #232428; border-color: rgba(255,255,255,0.08); }
    .dt-custom-select.open .dt-custom-select-trigger { border-color: #5865F2; box-shadow: 0 0 0 3px rgba(88, 101, 242, 0.15); }
    .dt-custom-select-trigger svg { transition: transform 0.2s ease; width: 18px; height: 18px; fill: #b5bac1; }
    .dt-custom-select.open .dt-custom-select-trigger svg { transform: rotate(180deg); }
    
    .dt-custom-select-options {
        position: absolute; top: calc(100% + 4px); left: 0; right: 0; z-index: 100;
        background: #2b2d31; border: 1px solid rgba(255,255,255,0.05); border-radius: 8px;
        box-shadow: 0 8px 16px rgba(0,0,0,0.5); padding: 6px; display: none;
        max-height: 220px; overflow-y: auto; pointer-events: none; opacity: 0;
        transition: opacity 0.2s, transform 0.2s; transform: translateY(-10px);
    }
    .dt-custom-select.open .dt-custom-select-options { display: block; pointer-events: auto; opacity: 1; transform: translateY(0); }
    
    .dt-custom-option { padding: 10px 12px; color: #dbdee1; font-size: 14px; cursor: pointer; border-radius: 6px; transition: background 0.15s, color 0.15s; }
    .dt-custom-option:hover { background: #4752C4; color: #fff; }
    .dt-custom-option.selected { background: rgba(88, 101, 242, 0.2); color: #5865F2; font-weight: bold; }
    .dt-custom-select-options::-webkit-scrollbar { width: 6px; }
    .dt-custom-select-options::-webkit-scrollbar-track { background: transparent; }
    .dt-custom-select-options::-webkit-scrollbar-thumb { background: #1e1f22; border-radius: 4px; }
    .dt-custom-select-options::-webkit-scrollbar-thumb:hover { background: #80848e; }
    
    /* Motore di Ricerca Dropdown */
    .dt-custom-search-container {
        padding: 4px 6px; border-bottom: 1px solid rgba(255,255,255,0.05);
        position: sticky; top: -6px; background: #2b2d31; z-index: 2; margin-bottom: 4px;
    }
    .dt-custom-search {
        width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.05);
        color: #dbdee1; border-radius: 6px; padding: 8px 12px 8px 32px; font-family: inherit; font-size: 13px;
        outline: none; transition: border-color 0.2s;
    }
    .dt-custom-search::placeholder { color: #80848e; }
    .dt-custom-search:focus { border-color: #5865F2; }
    .dt-search-icon { position: absolute; left: 14px; top: 12px; width: 14px; height: 14px; color: #80848e; pointer-events: none; }
    
    /* Animazioni Fluorescenti Switch Toggles */
    .dt-switch { position: relative; display: inline-block; width: 46px; height: 26px; }
    .dt-switch input { opacity: 0; width: 0; height: 0; }
    .dt-slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #80848e; transition: .4s cubic-bezier(0.18, 0.89, 0.32, 1.28); border-radius: 26px; border: 1px solid rgba(0,0,0,0.2); }
    .dt-slider:before { position: absolute; content: ""; height: 20px; width: 20px; left: 2px; bottom: 2px; background-color: white; transition: .4s cubic-bezier(0.18, 0.89, 0.32, 1.28); border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.3); }
    input:checked + .dt-slider { background-color: #23a559; border-color: #23a559; box-shadow: 0 0 12px rgba(35, 165, 89, 0.3); }
    input:checked + .dt-slider:before { transform: translateX(20px); }
    
    /* Bottone Primario Start */
    .dt-start-btn { width: 100%; background: linear-gradient(135deg, #5865F2, #4752C4); color: #fff; border: none; padding: 16px; border-radius: 8px; font-weight: bold; cursor: pointer; margin-top: 10px; font-size: 15px; transition: transform 0.2s, box-shadow 0.2s; text-shadow: 0 1px 2px rgba(0,0,0,0.2); }
    .dt-start-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 16px rgba(88, 101, 242, 0.3); }
    .dt-start-btn:active { transform: translateY(0); }

    /* --------- STILE SOSTITUZIONE (Modalità Replace) --------- */
    .dt-message-wrapper.dt-show-translation {
        font-size: 0 !important; line-height: 0 !important; color: transparent !important;
    }
    .dt-message-wrapper.dt-show-translation > *:not(.dt-translated-text):not(.dt-inline-toggle) {
        display: none !important;
    }
    .dt-message-wrapper .dt-translated-text {
        font-size: 1rem !important; line-height: 1.375rem !important; color: #dbdee1 !important; 
        font-style: normal; position: relative; display: inline; /* Garantisce il flusso corretto per la linea tratteggiata */
    }
    .dt-message-wrapper.dt-show-translation .dt-translated-text {
        border-bottom: 2px dashed rgba(88, 101, 242, 0.7) !important;
    }
    .dt-message-wrapper.dt-show-original .dt-translated-text {
        display: none !important;
    }

    /* --------- STILE SOTTOTITOLO GRUPPATO (Modalità Append 2026) --------- */
    .dt-message-wrapper.dt-style-append {
        padding-top: 4px;
        padding-bottom: 4px;
        font-size: 0.9rem !important;
        opacity: 0.8;
    }
    .dt-message-wrapper.dt-style-append::before {
        content: "ORIGINALE";
        display: block;
        font-size: 9px;
        color: #80848e;
        font-weight: 800;
        margin-bottom: 2px;
        text-transform: uppercase;
        pointer-events: none;
    }
    /* Rimuovi targhetta "ORIGINALE" su messaggi consecutivi */
    div[class*="message_"]:not([class*="groupStart_"]) .dt-message-wrapper.dt-style-append::before {
        display: none !important;
    }
    
    /* Box Unificato (Raggruppato in basso) per le Traduzioni di Gruppo */
    .dt-grouped-translation-box {
        margin-top: 8px;
        padding-left: 10px;
        border-left: 3px solid rgba(88, 101, 242, 0.7);
        padding-bottom: 2px;
        font-family: inherit;
    }
    .dt-gp-header {
        font-size: 9px;
        color: rgba(88, 101, 242, 0.8);
        font-weight: 800;
        margin-bottom: 4px;
        text-transform: uppercase;
        pointer-events: none;
    }
    .dt-gp-content {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }
    .dt-group-t-line {
        font-size: 1rem;
        line-height: 1.375rem;
        color: #dbdee1;
    }
    /* Nascondi il toggle occhio quando siamo in modalità Sottotitolo */
    .dt-message-wrapper.dt-style-append .dt-inline-toggle {
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
    
    const langOptionsIn = DT_LANGUAGES.map(l => `<option value="${l.code}">${l.name}</option>`).join('');
    const langOptionsOut = DT_LANGUAGES.filter(l => l.code !== 'auto').map(l => `<option value="${l.code}">${l.name}</option>`).join('');
    
    overlay.innerHTML = `
        <div class="dt-modal">
            <div class="dt-modal-header">
                <h2><svg width="24" height="24" viewBox="0 0 24 24" style="color: #5865F2; margin-right: 2px;"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.18 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.78 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.91-4.33-3.56zm2.95-8H5.08c1.32-2.14 3.49-3.66 6.07-4.18-.7 1.26-1.25 2.61-1.6 4.03l-1.52.15zM12 19.96c-.83-1.18-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.78-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.34.16-2h4.68c.09.66.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>
                ${isFirstRun ? 'Benvenuto' : 'DSTranslator'}</h2>
                ${!isFirstRun ? `<div class="dt-close-icon" id="dt-close-btn"><svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg></div>` : ''}
            </div>
            
            ${isFirstRun ? `<p style="font-size: 14px; margin-bottom: 24px; color: #b5bac1; line-height: 1.5;">Grazie per aver installato il Traduttore Definitivo. Prima di cominciare, <strong>imposta le tue preferenze</strong>. Potrai cambiarle sempre facendo Click-Destro sulle apposite icone inserite in chat!</p>` : ''}
            
            <div class="dt-card">
                <div class="dt-card-header">
                    <div class="dt-card-title">
                        <div class="dt-icon-box" style="color:#b5bac1;"><svg width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg></div>
                        <div class="dt-card-text">
                            <h3>Ricezione (Entrata)</h3>
                            <p>Traduci istantaneamente amici e BOT in chat.</p>
                        </div>
                    </div>
                    <label class="dt-switch">
                        <input type="checkbox" id="dt-in-enable" ${globalConfig.isIncomingEnabled ? 'checked' : ''}>
                        <span class="dt-slider"></span>
                    </label>
                </div>
                
                <div class="dt-form-group">
                    <label>Lingua Destinazione (Lettura):</label>
                    <div class="dt-select-wrapper"><select class="dt-select" id="dt-in-lang">${langOptionsIn}</select></div>
                </div>
                <div class="dt-form-group">
                    <label>Stile Visualizzazione Grafica:</label>
                    <div class="dt-select-wrapper">
                        <select class="dt-select" id="dt-read-mode">
                            <option value="replace">Sostituzione Integrale (Rimpiazza l'originale)</option>
                            <option value="append">Sottotitolo Tradotto (Conserva l'originale in piccolo)</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="dt-card">
                <div class="dt-card-header">
                    <div class="dt-card-title">
                        <div class="dt-icon-box" style="color:#b5bac1;"><svg width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.18 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.78 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.91-4.33-3.56zm2.95-8H5.08c1.32-2.14 3.49-3.66 6.07-4.18-.7 1.26-1.25 2.61-1.6 4.03l-1.52.15zM12 19.96c-.83-1.18-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.78-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.34.16-2h4.68c.09.66.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg></div>
                        <div class="dt-card-text">
                            <h3>Invio Messaggi (Uscita)</h3>
                            <p>Scrivi nella tua lingua e inviali tradotti all'istante.</p>
                        </div>
                    </div>
                    <label class="dt-switch">
                        <input type="checkbox" id="dt-out-enable" ${globalConfig.isOutgoingEnabled ? 'checked' : ''}>
                        <span class="dt-slider"></span>
                    </label>
                </div>
                <div class="dt-form-group">
                    <label>Lingua Destinazione (Scrittura):</label>
                    <div class="dt-select-wrapper"><select class="dt-select" id="dt-out-lang">${langOptionsOut}</select></div>
                </div>
            </div>

            ${isFirstRun ? `<button id="dt-start-btn" class="dt-start-btn">Comincia a Usare il Translator Ora 🚀</button>` : ''}
        </div>
    `;
    
    if (document.body) document.body.appendChild(overlay);
    
    document.getElementById('dt-in-lang').value = globalConfig.sourceLang;
    document.getElementById('dt-read-mode').value = globalConfig.readMode || 'replace';
    document.getElementById('dt-out-lang').value = globalConfig.targetLang;
    
    const saveChanges = () => {
        saveConfig({
            isIncomingEnabled: document.getElementById('dt-in-enable').checked,
            sourceLang: document.getElementById('dt-in-lang').value,
            readMode: document.getElementById('dt-read-mode').value,
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
    document.getElementById('dt-read-mode').onchange = saveChanges;
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
    document.getElementById('dt-read-mode').value = globalConfig.readMode || 'replace';
    document.getElementById('dt-out-lang').value = globalConfig.targetLang;
    
    modal.style.display = 'flex';
    
    // Inizializza i Custom Select Boxes Premium al posto dei Select di sistema HTML base
    document.querySelectorAll('.dt-select').forEach(originalSelect => {
        const wrapper = document.createElement('div');
        wrapper.className = 'dt-custom-select';
        
        const trigger = document.createElement('div');
        trigger.className = 'dt-custom-select-trigger';
        trigger.innerHTML = `<span>${originalSelect.options[originalSelect.selectedIndex].text}</span><svg viewBox="0 0 24 24"><path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>`;
        
        const optsContainer = document.createElement('div');
        optsContainer.className = 'dt-custom-select-options';
        
        const searchContainer = document.createElement('div');
        searchContainer.className = 'dt-custom-search-container';
        
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.className = 'dt-custom-search';
        searchInput.placeholder = 'Cerca lingua...';
        
        const searchIconSVG = `<svg class="dt-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`;
        searchContainer.innerHTML = searchIconSVG;
        searchContainer.appendChild(searchInput);
        
        searchInput.addEventListener('click', (e) => e.stopPropagation());
        searchInput.addEventListener('input', (e) => {
             const filter = e.target.value.toLowerCase();
             optsContainer.querySelectorAll('.dt-custom-option').forEach(opt => {
                 if(opt.innerText.toLowerCase().includes(filter)) {
                     opt.style.display = 'block';
                 } else {
                     opt.style.display = 'none';
                 }
             });
        });
        
        optsContainer.appendChild(searchContainer);
        
        Array.from(originalSelect.options).forEach(opt => {
            const optDiv = document.createElement('div');
            optDiv.className = 'dt-custom-option' + (opt.selected ? ' selected' : '');
            optDiv.innerText = opt.text;
            optDiv.onclick = (e) => {
                e.stopPropagation();
                originalSelect.value = opt.value;
                trigger.querySelector('span').innerText = opt.text;
                optsContainer.querySelectorAll('.dt-custom-option').forEach(n => n.classList.remove('selected'));
                optDiv.classList.add('selected');
                wrapper.classList.remove('open');
                originalSelect.dispatchEvent(new Event('change'));
                
                searchInput.value = '';
                searchInput.dispatchEvent(new Event('input'));
            };
            optsContainer.appendChild(optDiv);
        });
        
        trigger.onclick = (e) => {
            e.stopPropagation();
            document.querySelectorAll('.dt-custom-select').forEach(w => { 
                if(w !== wrapper) {
                    w.classList.remove('open');
                    const cCard = w.closest('.dt-card');
                    if (cCard) { cCard.style.zIndex = '1'; cCard.style.position = 'relative'; }
                }
            });
            const isOpen = wrapper.classList.toggle('open');
            const parentCard = wrapper.closest('.dt-card');
            if (parentCard) {
                parentCard.style.zIndex = isOpen ? '1000' : '1';
                parentCard.style.position = 'relative';
            }
            if (isOpen) {
                searchInput.value = '';
                searchInput.dispatchEvent(new Event('input'));
                setTimeout(() => searchInput.focus(), 50);
            }
        };
        
        wrapper.appendChild(trigger);
        wrapper.appendChild(optsContainer);
        originalSelect.parentNode.insertBefore(wrapper, originalSelect.nextSibling);
    });
    
    // Chiudi tendina cliccando fuori
    document.addEventListener('click', () => {
        document.querySelectorAll('.dt-custom-select').forEach(w => {
             w.classList.remove('open');
             const cCard = w.closest('.dt-card');
             if (cCard) { cCard.style.zIndex = '1'; }
        });
    });
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
function refreshAllTranslationsStyle() {
    // 1. Distruggi tutti i box globali attuali
    document.querySelectorAll('.dt-grouped-translation-box').forEach(box => box.remove());
    
    // 2. Trova tutti i messaggi singolarmente tradotti e ripulisci le loro classi/span interni
    const messages = document.querySelectorAll('div[data-dt-translated="true"]');
    messages.forEach(msg => {
        msg.classList.remove('dt-show-translation', 'dt-show-original', 'dt-style-append', 'dt-hide-subtitle');
        const toggleBtn = msg.querySelector('.dt-inline-toggle');
        if (toggleBtn) toggleBtn.remove();
        
        const transSpanText = msg.querySelector('.dt-translated-text') || msg.querySelector('.dt-translated-large');
        if (transSpanText) transSpanText.remove();
        
        const tText = msg.getAttribute('data-dt-translated-text');
        if (tText) {
            // Rimuoviamo il flag momentaneamente per forzare la re-iniezione senza blocchi
            msg.removeAttribute('data-dt-translated');
            injectIncomingTranslation(msg, tText);
        }
    });
}

function updateGroupTranslation(currentMsgElement) {
    const currentLi = currentMsgElement.closest('li[id^="chat-messages-"]');
    if (!currentLi) return;

    // 1. Trova il vero inizio del gruppo logico (il messaggio con l'avatar)
    let groupStartLi = currentLi;
    while (groupStartLi && !groupStartLi.querySelector('div[class*="groupStart_"]')) {
        let prev = groupStartLi.previousElementSibling;
        if (!prev || !prev.id.startsWith('chat-messages-')) break;
        groupStartLi = prev;
    }
    if (!groupStartLi) groupStartLi = currentLi;

    // 2. Colleziona tutti i messaggi consecutivi da start a fine
    let activeGroupLis = [];
    let walker = groupStartLi;
    while (walker) {
        activeGroupLis.push(walker);
        let next = walker.nextElementSibling;
        if (!next || !next.id.startsWith('chat-messages-') || next.querySelector('div[class*="groupStart_"]')) break;
        walker = next;
    }

    // 3. Raccogli i testi tradotti correntemente
    let combinedHtml = '';
    let lastLiWithTranslation = null;

    activeGroupLis.forEach(li => {
        let msgContents = li.querySelectorAll('div[id^="message-content-"]');
        msgContents.forEach(msg => {
             if (msg.hasAttribute('data-dt-translated-text')) {
                 const tText = msg.getAttribute('data-dt-translated-text');
                 combinedHtml += `<div class="dt-group-t-line">${tText}</div>`;
                 lastLiWithTranslation = li;
             }
        });
        
        let oldBox = li.querySelector('.dt-grouped-translation-box');
        if (oldBox) oldBox.remove();
        let oldSingle = li.querySelector('.dt-translated-large');
        if (oldSingle) oldSingle.remove();
    });

    if (lastLiWithTranslation && combinedHtml !== '') {
        const groupedBox = document.createElement('div');
        groupedBox.className = 'dt-grouped-translation-box';
        groupedBox.innerHTML = `<div class="dt-gp-header">TRADOTTO</div><div class="dt-gp-content">${combinedHtml}</div>`;
        
        const lastMsgs = lastLiWithTranslation.querySelectorAll('div[id^="message-content-"]');
        const lastMsg = lastMsgs[lastMsgs.length - 1];
        if (lastMsg) {
            const contentsDiv = lastMsg.closest('div[class*="contents_"]');
            if (contentsDiv) contentsDiv.appendChild(groupedBox);
            else lastMsg.parentElement.appendChild(groupedBox);
        }
    }
}

function injectIncomingTranslation(messageElement, translatedText) {
    if (!messageElement || !translatedText) return;
    if (messageElement.hasAttribute('data-dt-translated')) return;
    
    messageElement.setAttribute('data-dt-translated', 'true');
    messageElement.setAttribute('data-dt-translated-text', translatedText);
    if (translatedText === "[Errore Rete - Non tradotto]" || translatedText.trim() === '') return;

    messageElement.classList.add('dt-message-wrapper');
    
    const eyeSVG = `<svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`;
    const globeSVG = `<svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.18 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.78 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.91-4.33-3.56zm2.95-8H5.08c1.32-2.14 3.49-3.66 6.07-4.18-.7 1.26-1.25 2.61-1.6 4.03l-1.52.15zM12 19.96c-.83-1.18-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.78-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.34.16-2h4.68c.09.66.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>`;
    const toggleBtn = document.createElement('span');
    toggleBtn.className = 'dt-inline-toggle';
    toggleBtn.innerHTML = eyeSVG; 
    toggleBtn.title = "Mostra originale / Nascondi";

    if (globalConfig.readMode === 'append') {
        messageElement.classList.add('dt-style-append');
        // Raccogli ed elabora tutti i messaggi del gruppo in un unico blocco
        updateGroupTranslation(messageElement);
        
        // Mantieni vecchio toggle listener per consistenza
        toggleBtn.onclick = (e) => {
            e.stopPropagation(); 
            const groupedBox = messageElement.closest('li').querySelector('.dt-grouped-translation-box');
            if (messageElement.classList.contains('dt-hide-subtitle')) {
                messageElement.classList.remove('dt-hide-subtitle');
                if (groupedBox) groupedBox.style.display = 'block';
                toggleBtn.innerHTML = eyeSVG;
            } else {
                messageElement.classList.add('dt-hide-subtitle');
                if (groupedBox) groupedBox.style.display = 'none';
                toggleBtn.innerHTML = globeSVG;
            }
        };
    } else {
        messageElement.classList.add('dt-show-translation');
        const transSpan = document.createElement('span');
        transSpan.className = 'dt-translated-text';
        transSpan.innerText = translatedText;
        messageElement.appendChild(transSpan);
        
        toggleBtn.onclick = (e) => {
            e.stopPropagation(); 
            if (messageElement.classList.contains('dt-show-translation')) {
                messageElement.classList.remove('dt-show-translation');
                messageElement.classList.add('dt-show-original');
                toggleBtn.innerHTML = globeSVG;
            } else {
                messageElement.classList.remove('dt-show-original');
                messageElement.classList.add('dt-show-translation');
                toggleBtn.innerHTML = eyeSVG;
            }
        };
    }

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

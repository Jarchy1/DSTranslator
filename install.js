const fs = require('fs');
const path = require('path');

console.log("\n=================================");
console.log("  DiscordTranslator Installer avviato");
console.log("=================================\n");

// Determiniamo il percorso di base di Discord per Windows
const localAppData = process.env.LOCALAPPDATA;
if (!localAppData) {
    console.error("❌ ERRORE: Variabile d'ambiente LOCALAPPDATA non trovata (L'installer supporta attualmente solo Windows).");
    process.exit(1);
}

const discordPath = path.join(localAppData, 'Discord');

if (!fs.existsSync(discordPath)) {
    console.error(`❌ ERRORE: Cartella Discord non trovata in ${discordPath}. Assicurati di aver installato regolarmente l'app Discord per Desktop.`);
    process.exit(1);
}

// Trova la versione app più recente (es. app-1.0.9230)
const appFolders = fs.readdirSync(discordPath)
    .filter(f => f.startsWith('app-'))
    .sort()
    .reverse();

if (appFolders.length === 0) {
    console.error("❌ ERRORE: Nessuna versione installata di Discord (es. cartella app-X.X.X) trovata.");
    process.exit(1);
}

// Seleziona la build più recente attualmente in uso da Discord
const targetApp = appFolders[0];
const modulesPath = path.join(discordPath, targetApp, 'modules');

if (!fs.existsSync(modulesPath)) {
    console.error(`❌ ERRORE: Cartella modules non trovata in ${modulesPath}. L'installazione di Discord potrebbe essere corrotta.`);
    process.exit(1);
}

// Cerca la sottocartella "discord_desktop_core"
let corePath = null;
const moduleFolders = fs.readdirSync(modulesPath);
for (const folder of moduleFolders) {
    if (folder.startsWith('discord_desktop_core-')) {
        corePath = path.join(modulesPath, folder, 'discord_desktop_core');
        break;
    }
}

if (!corePath || !fs.existsSync(path.join(corePath, 'index.js'))) {
    console.error("❌ ERRORE: Impossibile trovare il nucleo di Bootstrap di Discord (discord_desktop_core/index.js)!");
    process.exit(1);
}

const indexPath = path.join(corePath, 'index.js');
// Ricaviamo il percorso dinamico di QUESTO modulo Traduttore (qualsiasi sia la cartella dove l'utente l'ha scaricato)
const bypassPath = path.join(__dirname, 'bypass.js').replace(/\\/g, '/');

if (!fs.existsSync(path.join(__dirname, 'bypass.js'))) {
     console.error("❌ ERRORE: Il file bypass.js non è presente in questa directory! Scarica l'intero pacchetto da GitHub senza separare i file.");
     process.exit(1);
}

const injectionString = `require('${bypassPath}');\n`;
let indexJsContent = fs.readFileSync(indexPath, 'utf8');

// Puliamo eventuali vecchie installazioni del traduttore prima di inserire la nuova per evitare cloni doppi
if (indexJsContent.includes(`require('`)) {
    indexJsContent = indexJsContent.split('\n').filter(line => !line.includes('bypass.js') && !line.includes('bridge.js')).join('\n');
}

// Iniezione All'inizio del file target (Zero-Trust Injection)
indexJsContent = injectionString + indexJsContent;

try {
    fs.writeFileSync(indexPath, indexJsContent);
    console.log("✅ SUCCESSO! Il Custom Payload traduttore è stato agganciato perfettamente a Discord.");
    console.log(`📁 Modulo Caricato da: ${bypassPath}`);
    console.log(`📡 Obiettivo Infettato: ${indexPath}\n`);
    console.log("🚀 L'installazione è completata.");
    console.log("⚠️ Chiudi completamente Discord (dall'icona in basso a destra di windows o Task Manager) e riaprilo a freddo, oppure clicca nella finestra di Discord e premi CTRL+R.\n");
} catch (writeErr) {
    console.error("❌ ERRORE GRAVE: Permessi insufficienti per scrivere nel file index.js (Discord è aperto come amministratore?).", writeErr);
}

const fs = require('fs');
const path = require('path');

console.log("\n========================================");
console.log("  DiscordTranslator Uninstaller Avviato  ");
console.log("========================================\n");

// Determiniamo il percorso di base di Discord per Windows
const localAppData = process.env.LOCALAPPDATA;
if (!localAppData) {
    console.error("❌ ERRORE: Variabile d'ambiente LOCALAPPDATA non trovata.");
    process.exit(1);
}

const discordPath = path.join(localAppData, 'Discord');

if (!fs.existsSync(discordPath)) {
    console.error(`❌ ERRORE: Cartella Discord non trovata in ${discordPath}.`);
    process.exit(1);
}

// Trova la versione app più recente (es. app-1.0.9230)
const appFolders = fs.readdirSync(discordPath)
    .filter(f => f.startsWith('app-'))
    .sort()
    .reverse();

if (appFolders.length === 0) {
    console.error("❌ ERRORE: Nessuna versione installata di Discord trovata.");
    process.exit(1);
}

// Seleziona la build più recente attualmente in uso da Discord
const targetApp = appFolders[0];
const modulesPath = path.join(discordPath, targetApp, 'modules');

if (!fs.existsSync(modulesPath)) {
    console.error(`❌ ERRORE: Cartella modules non trovata in ${modulesPath}.`);
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
let indexJsContent = fs.readFileSync(indexPath, 'utf8');

// Verifichiamo se l'iniezione è presente nel file core di Discord
if (indexJsContent.includes('bypass.js') || indexJsContent.includes('bridge.js')) {
    // Rimuoviamo SOLO ed ESCLUSIVAMENTE la nostra riga di require, lasciando intatto l'originale
    indexJsContent = indexJsContent.split('\n')
                                   .filter(line => !line.includes('bypass.js') && !line.includes('bridge.js'))
                                   .join('\n');
    
    try {
        fs.writeFileSync(indexPath, indexJsContent);
        console.log("✅ SUCCESSO! NativeTranslator è stato estirpato chirurgicamente dal file di blocco.");
        console.log("🛠️ Discord è stato ripristinato al suo stato ORIGINARIO (Vanilla).");
        console.log("⚠️ Chiudi completamente Discord (anche in basso a destra su Windows) e riaprilo per completare la rimozione.\n");
    } catch (writeErr) {
        console.error("❌ ERRORE GRAVE: Permessi insufficienti per scrivere nel file index.js (Chiudi Discord per non fargli bloccare i file).", writeErr);
    }
} else {
    console.log("🤷‍♂️ NESSUNA AZIONE ESEGUITA: NativeTranslator non risulta attualmente agganciato al modulo principale di questa versione di Discord.\n");
}

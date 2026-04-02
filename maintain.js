const fs = require('fs');
const path = require('path');

// Trova Discord LOCALAPPDATA
const localAppData = process.env.LOCALAPPDATA;
if (!localAppData) process.exit(1);

const discordPath = path.join(localAppData, 'Discord');
if (!fs.existsSync(discordPath)) process.exit(1);

// Trova la versione app più recente
const appFolders = fs.readdirSync(discordPath)
    .filter(f => f.startsWith('app-'))
    .sort()
    .reverse();

if (appFolders.length === 0) process.exit(1);

const targetApp = appFolders[0];
const modulesPath = path.join(discordPath, targetApp, 'modules');

if (!fs.existsSync(modulesPath)) process.exit(1);

let corePath = null;
const moduleFolders = fs.readdirSync(modulesPath);
for (const folder of moduleFolders) {
    if (folder.startsWith('discord_desktop_core-')) {
        corePath = path.join(modulesPath, folder, 'discord_desktop_core');
        break;
    }
}

if (!corePath || !fs.existsSync(path.join(corePath, 'index.js'))) process.exit(1);

const indexPath = path.join(corePath, 'index.js');
const bypassPath = path.join(__dirname, 'bypass.js').replace(/\\/g, '/');

if (!fs.existsSync(path.join(__dirname, 'bypass.js'))) process.exit(1);

const injectionString = `require('${bypassPath}');\n`;
let indexJsContent = fs.readFileSync(indexPath, 'utf8');

// Verifica se è già installato
if (indexJsContent.includes(`require('${bypassPath}');`)) {
    // Già iniettato correttamente nell'ultima versione
    process.exit(0);
}

// Iniezione pulita: rimuoviamo link a file vecchi/rotti se presenti
if (indexJsContent.includes(`require('`)) {
    indexJsContent = indexJsContent.split('\n').filter(line => !line.includes('bypass.js') && !line.includes('bridge.js') && !line.includes('discordlate.js')).join('\n');
}

// Iniezione All'inizio (Zero-Trust Injection)
indexJsContent = injectionString + indexJsContent;

const { execSync } = require('child_process');

try {
    // 1. Uccidiamo Discord per sbloccare i file e forzare il refresh
    try { execSync('taskkill /F /IM Discord.exe', { stdio: 'ignore' }); } catch(e) {}
    
    // 2. Scrittura del file index.js (Iniezione)
    fs.writeFileSync(indexPath, indexJsContent);
    
    // 3. Riapriamo Discord tramite l'Update.exe ufficiale (metodo piu sicuro)
    const updateExe = path.join(discordPath, 'Update.exe');
    if (fs.existsSync(updateExe)) {
        execSync(`"${updateExe}" --processStart Discord.exe`, { stdio: 'ignore' });
    }
    
    // Successo completo
} catch (e) {
    // Errore silenzioso
}

# NativeTranslator per Discord

NativeTranslator è una potentissima mod "Zero-Trust" e Open-Source che si inietta nativamente all'interno di Discord per fornire una traduzione in tempo reale sia in Entrata (lettura) che in Uscita (scrittura), senza bisogno di server intermedi. 

A differenza di altre estensioni che usano metodi instabili con React, questa mod usa un **Network HTTP Interceptor** a basso livello intercettando le vere chiare chiamate Web (XMLHttpRequest e Fetch API) prima che raggiungano i server Discord, garantendo zero crash e velocità istantanea.

## 🚀 Funzionalità Principali

*   **🕵️‍♂️ Zero-Trust:** Nessun eseguibile sospetto, nessun file compresso. Tutto il codice, le richieste di rete e il payload sono qui su Github ispezionabili ed erogati sul tuo PC locale in chiaro. Supportato da Google API pubbliche.
*   **📡 Network Interceptor (Uscita):** I tuoi messaggi vengono tradotti *dopo* che digiti invio ma *prima* che il computer li spedisca ai server di Discord, simulando un'esperienza di dattilografia assolutamente nativa.
*   **👁️ Traduzione In-place (Entrata):** Traduce in tempo reale tutti i messaggi degli altri utenti mostrandoli istantaneamente accanto al testo originale (con possibilità di nasconderli), senza rompere eventuali formattazioni o menzioni originali di Discord.
*   **✨ UI Nativa e Animazioni Discord-Like:** Interfaccia chirurgicamente iniettata all'interno della barra chat (UI Debloat eseguito sui noiosi tasti Regalo). Tasti configurati al millimetro con le stesse transizioni dinamiche dei bottoni standard *Muto* e *Silenzia audio* di Discord, comprensivi di tooltips in grafica nativa.
*   **⚙️ Menu Glassmorphism integrato:** Configurazione rapida con First-Run Tour abilitato per cambiare e gestire fino a 30+ lingue pre-compilate tramite click destro sulle scorciatoie in the bar.

## 📦 Installazione

Attualmente il progetto è strutturato agendo a livello "AppCore" di Electron, quindi supporta teoricamente tutte le release canoniche moderne di Discord.

1.  Assicurati di aver installato [Node.js](https://nodejs.org/it/) sul tuo computer.
2.  Scarica o clona questa repository nel tuo computer in una cartella sicura (es. `C:\Users\NomeUtente\DiscordTranslator`). **Questa cartella non andrà eliminata in futuro** altrimenti Discord smetterà di potersi avviare dopo l'iniezione.
3.  Chiudi Discord completamente (anche dalla barra in basso a destra su Windows).
4.  Apri il prompt dei comandi in questa cartella (puoi scrivere `cmd` sulla barra degli indirizzi della cartella e dare Invio).
5.  Avvia l'installazione automatica digitando il comando:
    ```bash
    node install.js
    ```
6.  L'installer individuerà il tuo percorso `app-*/modules/discord_desktop_core/index.js` di Discord e aggiungerà un hook "Bypass" per far innescare le funzioni.

Avvia Discord. Il gioco è fatto.

## 💡 Utilizzo

All'avvio, la chat presenterà due nuovi fiammanti pulsanti nativi in basso a destra, accanto alle tue Emoji.
Passandoci sopra capirai istantaneamente le loro funzioni:
*   **Mappamondo 🌍:** Attiva la Scrittura Tradotta (Traduci quello che scrivi).
*   **Occhio 👁️:** Attiva la Visione Tradotta (Traduci i messaggi ricevuti dalla stanza).

### Scorciatoie Rapide
*   **Click Sinistro:** Accende e Spegne dinamicamente l'interruttore. (L'icona diventerà silenziata di rosso sbarrandosi quando disattivato).
*   **Click Destro:** Apre la plancia delle impostazioni e delle lingue integrata sotto forma di popup vetrato immersivo.
*   **Alt+Click:** Disattiva Tutto Modalità Master (disponibile abilitando l'easter egg nel codice).

## 🗑️ Disinstallazione e Ripristino
Se desideri eliminare definitivamente la Mod dal tuo computer e riportare il client testuale di Discord al suo stato nativo, puoi lanciare in modo automatizzato la routine di espulsione in Node.

Dalla cartella della repository, apri il prompt ed esegui:
```bash
node uninstall.js
```
Questo comando distruggerà i ponti tra la mod e il bootloader asar di Discord originale senza corromperlo.
A questo punto puoi tranquillamente cestinare del tutto questa cartella DiscordTranslator dal tuo computer!

## ⚠️ Disclaimer e Sicurezza
La modifica non autorizzata del client desktop Discord (anche tramite file protetti erogati solo localmente) viola tecnicamente i **Termini di Servizio (ToS)** di Discord. Questa mod è dichiaratamente "Zero-Trust": nessun dato dell'utente, password o token viene loggato, estratto o inviato a server di terze parti (il codice sorgente è interamente ispezionabile dal vivo per comprovarlo). 

Tuttavia, il progetto è fornito per puri scopi educativi. L'autore non si assume in alcun modo la responsabilità per eventuali restrizioni dell'account, messaggi eliminati o disservizi recati al tuo client locale. Usa a tuo personale ed esclusivo rischio!
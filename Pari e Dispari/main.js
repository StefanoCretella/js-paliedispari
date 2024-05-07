function gioca() {
    // Scelta dell'utente (pari o dispari) e il numero inserito
    const scelta = document.getElementById('scelta').value;
    const numeroUtente = parseInt(document.getElementById('numero').value);
    
    // Genera un numero casuale per il computer da 1 a 5
    const numeroComputer = generaNumeroCasuale(1, 5);
    
    // Visualizza il numero scelto dall'utente e quello del computer
    document.getElementById('utente').textContent = `Numero utente: ${numeroUtente}`;
    document.getElementById('pc').textContent = `Numero computer: ${numeroComputer}`;
    
    // Stampa nella console il numero casuale dell'utente e del computer
    console.log(`Numero utente: ${numeroUtente}`);
    console.log(`Numero computer: ${numeroComputer}`);
    
    // Calcola la somma dei due numeri
    const somma = numeroUtente + numeroComputer;
    
    // Determina se la somma è pari o dispari
    const risultato = isPari(somma) ? 'pari' : 'dispari';
    
    // Controlla se l'utente ha vinto
    // Se l'utente vince
    if ((risultato === 'pari' && scelta === 'pari') || (risultato === 'dispari' && scelta === 'dispari')) {
        document.getElementById('risultato').textContent = `Hai vinto! La somma è ${somma}, ed è ${risultato}.`;
        
        // Se l'utente perde
    } else {
        document.getElementById('risultato').textContent = `Hai perso! La somma è ${somma}, ed è ${risultato}.`;
    }

    // Stampa nella console la somma e se è pari o dispari
    console.log(`La somma è ${somma}, ed è ${risultato}.`);
}

function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isPari(numero) {
    return numero % 2 === 0;
}

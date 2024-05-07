// Funzione per verificare se una parola è palindroma
function verificaPalindroma() {

    // Parola messa dall'utente
    const parola = document.getElementById('parola').value;

    // Ottieni l'elemento del DOM dove mostrare il risultato
    const risultato = document.getElementById('risultato');
    
    // Verifica se la parola è palindroma 
    if (isPalindroma(parola)) {

        // Se è palindroma, mostra il messaggio "La parola ... è palindroma"
        risultato.textContent = `La parola "${parola}" è palindroma.`;

        // Input nella console se è palindroma
        console.log(`${parola} è palindroma.`);
    } else {

        // Se NON è palindroma, mostra il messaggio "La parola ... non è palindroma"
        risultato.textContent = `La parola "${parola}" non è palindroma.`;

        // Input nella console se non è palindroma
        console.log(`${parola} non è palindroma.`);
    }
}

// Funzione che verifica che la parola è palindroma
function isPalindroma(parola) {

    // Inverti la parola e controlla se è uguale alla parola originale
    const parolaInvertita = parola.split('').reverse().join('');
    return parolaInvertita === parola;
}

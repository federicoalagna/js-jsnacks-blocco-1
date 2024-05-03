'use strict'


//--chiedo all'utente di inserire la prima parola tramite un prompt e stampo la parola
let parola1 = prompt("Inserisci la prima parola:");

//--chiedo all'utente di inserire la seconda parola tramite un prompt e stampo la parola
let parola2 = prompt("Inserisci la seconda parola:");

//--confronto la lunghezza delle due parole usando l'istruzione if
if (parola1.length < parola2.length) {
    console.log(parola1);
    console.log(parola2);
} else {
    console.log(parola2);
    console.log(parola1);
}
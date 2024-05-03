'use strict'

//--stabilisco la variabile somma
let somma = 0;

//--utilizzo un ciclo for che si ripete per 10 volte per chiedere all'utente di inserire un numero.
for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Inserisci un numero:"));

   //--aggiungo di volta in volta il numero inserito nella variabile somma
        somma = somma + numero;
}

//--dopo aver inserito tutti i 10 numeri stampo la somma di questi in console

console.log("La somma dei numeri inseriti è: " + somma);
'use strict'

let somma = 0;
for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt("Inserisci il numero " + i + ":"));
    somma += numero;
}
let media = somma / 10;
console.log("Somma dei primi 10 numeri inseriti:", somma);
console.log("Media dei primi 10 numeri inseriti:", media);
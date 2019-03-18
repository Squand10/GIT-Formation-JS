'use strict'

let description = "Je m'appelle Squand";

//concaténation classique avec le symbole +
let concatenation = "Bonjour " + description;
console.log(concatenation);




let littereaux = `<p>Bonjour ${description}</p>`;
console.log(littereaux);


let a, b, rest;
[a, b] = [2, 10,];
console.log(a);
console.log(b);
[a, b, ...rest] = [2, 10, 24, 35, true]
console.log(rest);




//Déclaration d'un tableau
let monTableau = [1, 2, 3];
console.log(monTableau);

console.log(monTableau[2]);


for (let ii = 0; ii < monTableau.length; ii++){
    console.log(monTableau[ii]);
}



//Tableau en 2D

let arrayMultiDimension = [1, 2, 3, ["one", "two", "three"]];
console.log(arrayMultiDimension);
console.log(arrayMultiDimension[3][1])


//Tableau associatif
let arrayAssociatif = {
    1: "Première valeur",
    6545667: "Deuxième valeur",
    "mother fucker": "valeur de la catapulte",
}
console.log(arrayAssociatif["mother fucker"]);







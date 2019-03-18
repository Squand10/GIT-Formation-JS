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



let listePrenom =["François", "Pierre", "Omer", "Cham"];

console.log("Boucle for of");
for(let prenom of listePrenom){
    console.log(prenom);
}


console.log("Boucle for each");
listePrenom.forEach(
    function(element)
    {
    console.log(element);
    }
);


//Call back
//array.forEach(function(){})

listePrenom.forEach(function(prenom){
    if (prenom === "Omer") {
        console.log("bien");
    }
});


console.log("00");console.log("00");console.log("00");console.log("00");console.log("00");console.log("00");console.log("00");console.log("00");
//Définir un tableau
let tableau = ["Morgan", "Paco", "Squand", "Momo","Jimmy","Isaac"];
console.log(tableau);
//Supprimer la première valeur d'un tableau     
tableau.shift();
console.log(tableau);
//Supprimer la dernière valeur d'un tableau
tableau.pop();
console.log(tableau);
//Ajouter à l'index 2 de votre tableau un nouveau tableau
tableau[2] =["Mammy","Micky","Bobby"];
console.log(tableau);
//avec plusieurs valeurs
//(Deux façons de faire)

//Ajouter une valeur à la fin du tableau
tableau.push('Batard');
console.log(tableau);
//Inverser le tableau
tableau.reverse();
console.log(tableau);
//Trier le tableau par ordre alphabétique
tableau.sort();
  console.log(tableau);
//Retrouvé la longueur d'un tableau

console.log(tableau.length);


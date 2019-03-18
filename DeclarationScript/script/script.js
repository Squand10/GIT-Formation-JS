'use strict'

let attribution = 1000;

// Addition
let add=1;
add +=5;
console.log(add);

// Soustraction
let sous = 10;
sous -= 5;
console.log("soustraction : " + sous);

//multiplication
let mult =5;
mult *=2;
console.log("multiplication : " + mult);

// Division
let div = 10;
div /= 2;
console.log("division : " + div);

// Modulo %
//Donne le reste d'une division
let modulo = 10;
modulo = modulo % 3;
console.log(modulo);

// Incrémentation (++ ajoute 1)
let increment = 10;
console.log("incrémentation : " + ++increment);

//décrementation (-- soustrait 1)



// Opérateur de comparaison

// comparaison == (Exemple : c == b); verifira uniquement la valeur
let c = 5;
let b = 5;
console.log(c == b);
// comparaison strict === verifira la valeur et le type
let e = 5;
let f = "5";
console.log(e === f);

// plus grand que ... > superieur à
let g = 10;
let h = 5;
console.log(g > h);

// plus petit que ... < inferieur à
let i = 5;
let j = 20;
console.log( i < j);
// il y a aussi >= <=

// La negation simple (!)
let o = 5;
let p = 2;
console.log(o != p);

// La négation strict (!==)
let q = 5;
let r = "5";
console.log(q !== r);

//Operateur logique

//ET logique
//&&
// OU logique
// || (alt gr +6)
// NON Logique



// Les conditions
let maVariable = 5;

if (maVariable ===10) {
   console.log("La variable est égale à 10");
} else {
   console.log("La variable n'est pas égale à 10");
}

// If else if
if (maVariable ===5) {
   console.log("ma variable vaut : 5");
} else if (maVariable ===15) {
   console.log("ma variable vaut : 15");
} else if (maVariable ===20) {
   console.log("ma variable vaut : 20");
} else if (maVariable ===30) {
   console.log("ma variable vaut : 30");
} else {
   console.log("Je ne connais pas la valeur");
}

// Ternaure
/*
if (condition) {

} else {

}
// Equivalent au if else if
switch (key) {
   case value:

       break;

   default:
       break;
}
*/




console.log("Boucle while");
let resultatWhile = 0;
while(resultatWhile < 10){
    ++resultatWhile;
    console.log(resultatWhile);
}


console.log("Boucle do While")
let doWhile =0;
do{
    doWhile--;
    console.log(doWhile);
} while (doWhile > -10);


console.log("Boucle for");
for(let zz = 20; zz < 30; zz++){
    console.log(zz);
}





console.log("Boucle for of");
let array = ["François","Pierre","Omer"];
for (const iterator of array){
    console.log(iterator);
}
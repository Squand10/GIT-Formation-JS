'use strict'

/*let description = "Je m'appelle Squand";

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
*/
/*let a = 5; 
let b = 10; 
let c = 15; 
let d = 20; 
let e = 25; 
let f = 30; 


let resultatAB = a + b;

let resultatCD = c + d;

let resultatEF = e + f;



function calc(number1, number2){
    return number1 + number2;
}


console.log(calc(10, 20));

function dirBonjour(){
    return "Bonjour !"
}

console.log(dirBonjour());



let multiplication = function (number1, number2){
    return number1 * number2;
}


console.log(multiplication(10, 20));
*/

/*
let array = ["François", "Pierre", "Omer"]

array.forEach((element) => {
    console.log(element);
});



function init(){
    let prenom = "François";

    function affichePrenom(){
        console.log(prenom);
    }
    return affichePrenom();
}

init();


function paramDefault(a, b=5, c=10, d){
return a + b + c +d;
}

console.log(paramDefault());
*/






/*

// Faire une fonction qui retourne Bonjour suive de votre prenom
function bonjour(name){
    console.log("Bonjour " + name)
}
bonjour("Morgan");


// Créer un tableau contenant des strings et des nombres
let array = ["Squand", "Paul", 25, "Martine", 48, 23];
let array2 = ["Srgerzgzrg", "Paezgezgezl", 255, "Mazegezgezg", 448, 233];
//Créer une fonction qui rangera les nombres dans un tableau de 
//nombres et les strings dans un tableau de strings




let arrayTri = function (arrayList){
let arrayString = [];
let arrayNumber = [];
let arrayResult = [];
   
arrayList.forEach(     
         element => {
            if (typeof(element) == "string"){
                arrayString.push(element);
                } else {
                arrayNumber.push(element);
                }
                }
            );
    arrayResult.push(arrayString, arrayNumber);
    return arrayResult
}





console.log(arrayTri(array));
console.log(arrayTri(array2));
*/



/*var booleanValue = true; 
var numericalValue = 354;
var stringValue = "This is a String";
var stringObject = new String( "This is a String Object" );
alert(typeof booleanValue) // displays "boolean"
alert(typeof numericalValue) // displays "number"
alert(typeof stringValue) // displays "string"
alert(typeof stringObject) // displays "object"
*/



/*
function trigo(a, b, c){
    if(a*a +b*b === c*c){
        console.log("Le triangle est rectangle");
    } else {
        console.log("Le triangle n'est pas rectangle");

    }
}

*/
/*
//Fonction qui utilise de 1 à n paramètres
function utilisationRest(...rest){
    let resultat = 0;
    rest.forEach(function(element){
        resultat +=element;
    })
    return console.log(resultat);

}

utilisationRest(10,20,30);
utilisationRest(10,20,30,40,50,60);


let array = [2,2,2,2,2,2,2,2,2,2,2,2,2]
function utilisationSpread(w,y,z){
    return w+y+z;
}



let monObjet = {
    nom: "Gadiou",
    prenom: "Morgan",
    ville: "Nantes"
};

console.log(monObjet);


*/





/*
let personne = new Object();

personne.nom = "Gadiou";
personne.prenom = "Morgan";
personne.ville = "Nantes";


console.log(personne);
*/


/*
let nom = "Gadiou";
let prenom = "Morgan";
let ville = "Nantes";

let mecton = {nom,prenom,ville};
console.log(mecton);
*/

/*

function Person(nom,prenom,ville,loisir,plat,profession){
    this.nom = nom;
    this.prenom = prenom;
    this.ville = ville;
    this.loisir = loisir;
    this.plat = plat;
    this.profession = profession;

    this.showCity = function(){
        console.log("J'habite à " + this.ville);
    }
    this.resume = function(){
     console.log("Je m'appelle "+ this.prenom + " " + this.nom +" j'habite à " + this.ville + " et j'aime beaucoup " + this.loisir);
        
    }
}

let luc = new Person("Fournier","Luc","Nantes","Danser sous les ponts","la marmelade","catapulteur de morts");
let morgan = new Person("Gadiou","Morgan","Nantes","les grands mères","les tripoux à la mode de Caen","Gynécologue pour chiens");

luc.resume();
morgan.resume();



Person.prototype.fullName = function(){
    return console.log("Je m'appelle " + this.nom + " " +this.prenom)
}

luc.fullName();
*/

/*
let newPerson = Object.assign(
    {
    plat:"les tripoux à la mode de Caen",
    profession: "Gynécologue pour chiens",
    },
    Person
);

console.log(newPerson);
*/
/*
Person.prototype.resume2 = function(){
    return console.log("Je m'appelle "+ this.prenom + " " + this.nom +" j'habite à " + this.ville + " et j'aime beaucoup " + this.loisir + ", deguster " + this.plat + " et pratiquer mon métier : " +this.profession);
}

morgan.resume2();
luc.resume2();




let date = new Date();
console.log(date);
console.log(date.toLocaleDateString());
console.log(date.getTimezoneOffset());

let string = new String("string transformé en objet");
console.log(string);

*/


/*


let titreH2 = document.querySelector("h2"); 
console.log(titreH2);
let allTitreH2 = document.querySelectorAll("h2")
console.log(allTitreH2); 

allTitreH2.forEach(element =>{
    console.log(element);
});

let idTitre2 = document.querySelector("#titre");
console.log(idTitre2);

// Pas compatible node (il paraît....)
let classTitre = document.getElementsByClassName("titre-h2");
console.log(classTitre);

idTitre2.textContent = "Nouveau titre";


let ulListe = document.querySelector("#ulListe");
console.log(ulListe.children);

console.log(ulListe.parentElement);



//Création d'élément
let li = document.createElement('li');
li.textContent = "Liste 4";
li.className = "liListe";

ulListe.appendChild(li);
ulListe.insertAdjacentElement("afterbegin", li);


let liListe = document.querySelector("Li:nth-child(0n+2)");
console.log(liListe);


let section = document.querySelector("#content");
console.log(section);
let nomSection = "Section article"
let content = `
<h4>Titre de ${nomSection}</h4>
<p>BABLABLABLABALBALBLALa</p>
`;

section.innerHTML = content;

*/




// Créer une fonction qui génerera le nombre de lien
//définit en paramètre
//les liens devront être placé dans la balise nav
//ils doivent avoir le href de remplit
//une classe
//et le nom du lien


/*

function createLien(u){

    for (let n = 1; n-1 < u; n++) {
        
        let lien = document.createElement("a");
        lien.textContent = "Page" + n;
        lien.className = "lienNav";
        lien.href = "page" + n + ".html" 


        let liste = document.createElement("li");
        liste.id = "liste" + n;


        let listSelector = document.querySelector("nav");

        listSelector.appendChild(liste);
        

        let linkSelector = document.querySelector("#liste" + n);
        linkSelector.appendChild(lien); 
    }
} 
createLien(6);
*/


/*


let inputButton = document.querySelector("input[type=button]");

let inputLien = document.querySelector("#nomLien");
let inputLink = document.querySelector("#nomLink");


let n = 0;
inputButton.addEventListener("click",
 
 

    function createLien(){
        
       
        


        let lien = document.createElement("a");
        lien.textContent = inputLien.value;
        lien.href = inputLink.value;

        

        n = n+1;

        let liste = document.createElement("li");
        liste.id = "Lien" + n;



        let listSelector = document.querySelector("nav");
        listSelector.appendChild(liste); 
        
        
        let linkSelector = document.querySelector("#Lien" + n);
        linkSelector.appendChild(lien); 

        
    
});

*/




/*
var nombreLien = prompt("Entrez un nombre de liens à créer");

if (nombreLien != null){
    createLien(nombreLien);
}

*/




/*function createLien(selectObject) {
    var qtéSélectionnée = 0;
    for (var i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        qtéSélectionnée++;
      }
    }
    return qtéSélectionnée;
  }
*/





/*


let inputButton = document.querySelector("input[type=button]");

let input = document.querySelector("#firstName")


inputButton.addEventListener("click", function(){
    alert("FUCK YOU " + input.value);
});



input.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        alert("FUCK YOU " + input.value);
        
    }

})

*/

/*
let inputFirstName = document.querySelector('#firstName');


let inputButton = document.querySelector('input[type=button]');


function checkInput (input){
   if(!isNam(input.value)){
       unput.style.background = "red";
   } else {
       input.style.background = "green";
   }
   !isNaN(input.value) ? input.style.background = "red" : input.style.background = "green";
};


inputButton.addEventListener("click", function(){
   let input = document.querySelector('#firstName');
   checkInput(input);
   //!inputFirstName(input.value) ? input.style.background = "red" : input.style.background = "green";
});

inputFirstName.addEventListener("keydown", function(event){
   let input = document.querySelector('#firstName');
   if (event.key === "Enter") {
       
         //La fonction PreventDefault permet d'annuler le comportement par defautl du nav
        
        
             event.preventDefault();
       checkInput(input);

   }
});
*/ 


/*   Liste de trucs...

EventTarget.addEventListener(type, listener [, usecapture]);

var phase = event.eventPhase;

return false //DOM Level 0     PAS BIEN
event.preventDefault() //DOM level 2    BIEN

event.stopPropagation()


*/
/*

import { PI } from"script.js";

//import * as importation from "./script.js";

console.log(importation.PI);

importation.mafonction();
*/
/*

const exemple1 = function () {
    console.log("exemple1");
};


//appel en tant que fonction
exemple1();





    
const kitty = {
    name: "Felix",
    meow: function(){
        console.log(this.name);
    }
};


//appel en tant que méthode
kitty.meow();


const LittleCat = function(name) {
    this.name = name;        //BIEN
};
function LittleCat2() {
    console.log(toto);
    const toto = 123;
};




LittleCat.prototype.meow = function() {
    console.log("exemple1");  
};



//appel en tant que constructeur
const bill = new LittleCat("Bill");
console.log(bill);

//appel avec call ou apply
exemple1.apply(bill);

*/

import {Galery} from "./script.js"

document.addEventListener("DOMContentLoaded", function(){
    const galleryElt = document.querySelector(".gallery");  
    const gallery = new Galery(galleryElt);
    gallery.init();

});


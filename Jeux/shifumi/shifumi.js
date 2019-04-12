let statsCount = 0;
let compteur = 0;


let buttons = document.querySelectorAll(".launch")
for (let domELT of buttons) {
    let choix = undefined;

    function initchoix() {

        if (this.classList.contains("Pierre")) {
            choix = "Pierre"
        } else if (this.classList.contains("Ciseaux")) {
            choix = "Ciseaux"
        } else {
            choix = "Feuille"
        }

        function myFunction(choix) {
            //Choix du joueur
            var choixJoueur = choix;
            //Choix de l'ordinateur
            let random = Math.floor(Math.random() * 3 + 1);
            let choixOrdi;

            var imgPierre = new Image();
            imgPierre.src = 'img/Pierre.png';
            var imgFeuille = new Image();
            imgFeuille.src = 'img/Feuille.png';
            var imgCiseaux = new Image();
            imgCiseaux.src = 'img/Ciseaux.png';

            var imgSpawn = document.getElementById("imgDiv");

            if (random === 1) {
                choixOrdi = 'Pierre';
                imgSpawn.replaceChild(imgPierre, imgSpawn.childNodes[0]);
            } else if (random === 2) {
                choixOrdi = 'Feuille';
                imgSpawn.replaceChild(imgFeuille, imgSpawn.childNodes[0]);
            } else {
                choixOrdi = 'Ciseaux';
                imgSpawn.replaceChild(imgCiseaux, imgSpawn.childNodes[0]);
            }


            // JEU
            let resultat;
            if (choixJoueur === choixOrdi) {
                resultat = "Egalité";
                statsCount += 0.5;

            } else if (choixJoueur === 'Pierre') {
                if (choixOrdi === 'Ciseaux') {
                    resultat = "Vous avez gagné";
                    statsCount += 1;
                } else {
                    resultat = "Vous avez perdu";

                }
            } else if (choixJoueur === 'Ciseaux') {
                if (choixOrdi === 'Feuille') {
                    resultat = "Vous avez gagné";
                    statsCount += 1;

                } else {
                    resultat = "Vous avez perdu";

                }
            } else if (choixJoueur === 'Feuille') {
                if (choixOrdi === 'Pierre') {
                    resultat = "Vous avez gagné";
                    statsCount += 1;

                } else {
                    resultat = "Vous avez perdu";

                }
            }


            compteur +=1;

           let resultatStats = "Vous avez gagné : " + Math.floor((100*statsCount)/compteur) +"% de vos parties";





            //RESULTAT
            document.getElementById("result").innerHTML = resultat;
            document.getElementById("stats").innerHTML = resultatStats;

        }
        myFunction(choix)
    }
    domELT.addEventListener("click", initchoix)
}






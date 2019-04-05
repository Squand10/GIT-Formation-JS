
//console.log(process.env);                       //Affiche les informations du fichier (Utile pour trouver le nom de l'utilisateur executant)

const argv = process.argv.slice(2);

console.log(argv);


if( argv.includes('--version')){
    console.log( "process.js Version 1.0.0")
}

if( !argv[0] ){
    console.error("\x1b[31mLemessage est obligatoire\x1b[0m");
    process.exit();
}

const chaine = argv[0];

if(argv.includes('-uc')) {
    console.log(chaine.toUpperCase());
} else {
    console.log(chaine);
}


/*
if( argv[0]){
    console.log(argv[0]);
}
*/



//node introduction/process coucou -uc
/*
if( argv.includes('-uc')){
    console.log( "coucou");
}
else{
    console.log("COUCOU");
}
*/

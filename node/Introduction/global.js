console.log('-- __filename --');

console.log('__filename = %s', __filename);          //Affiche le fichier dans lequel on se trouve  (absolu)

console.log('-- __dirname --');

console.log ('__dirname = %s', __dirname);          // Affiche le repertoire dans lequel on se trouve  (absolu)


let timer = 1000;
setTimeout( () => {                             //execute la commande après le timer specifie
   console.log('Je suis executé après %d ms', timer)
}, timer);


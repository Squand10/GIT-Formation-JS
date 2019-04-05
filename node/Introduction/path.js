const path = require ('path');

let path_file ="./assets/content/hello.txt";

console.log('dirname(): %s', path.dirname(path_file));    //nom du folder
console.log('basename(): %s', path.basename(path_file));       //nom du fichier
console.log('extname(): %s', path.extname(path_file));      //extension du fichier

console.log('Separateur système : %s', path.sep);

console.log('Construction d\'un chemin : %s', path.join('assets', 'images', 'image.png'));

const content_path = path.join('assets', 'content', path.sep);
const images_path = path.join('assets', 'images', path.sep);

console.log('Pour passer du dossier \x1b[32m%s\x1b[0m au dossier ' + '\x1b[32m%s\x1b[0m je dois faire \x1b[32m%s\x1b[0m', content_path, images_path, path.relative(content_path, images_path));

console.log(path.resolve(__dirname,content_path, path.relative(content_path, images_path)));
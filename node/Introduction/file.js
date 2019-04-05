const fs = require('fs');
const path = require ('path');

const filename = path.join(__dirname, 'assets', 'content', 'hello.txt');

const convert = (from, to) => str => Buffer.from(str, from).toString(to)
const utf8ToHex = convert('utf8', 'hex')
const hexToUtf8 = convert('hex', 'utf8')


fs.readFile(filename, (err, content) => {
    if (err){
        throw new Error(err.message);
    }
    console.log(hexToUtf8(content));
    console.log(utf8ToHex('ERHHHEEHHHER'));
});

const copy = path.join(path.dirname(filename), 'copy.txt');
fs.copyFile(filename, copy, (err) => {
    console.log('Copie terminée');
});


//Créer un fichier et écrire dedans


const newFile = path.join(__dirname, 'assets', 'content', 'deleteme.txt');
const contentOfFile = 'Apprendre node c\'est cool';

fs.writeFile(newFile, contentOfFile, function(err){
   console.log('Création terminée');
});


fs.unlink(newFile, (err) => {
    if(err){
        throw new Error(err.message);
    }
    console.log('Suppression terminée');
});

const images = path.join(__dirname, 'assets', 'images');


fs.mkdir(images, (err) => {
    if(err){ }
    console.log("Dossier %s crée", path.basename(images))
});

fs.rmdir(images, (err) => {
    console.log('Dossier %s supprimé', path.basename(images))
});

const nodeUrl = require('url');
const {format} = require ('url');      //récupère iniquement la fonction format
let url = new URL ('https://user:password@www.dawan.fr:8080/node?page=1#plan');   //Plusieurs paramètres présents dans une URL



console.log(url);

console.log("Protocol: %s; Hostname: %s", url.protocol, url.hostname);

console.log(nodeUrl.parse(url.toString()));

let options = {
    auth: false,
    fragment: false,
    search: false
};

console.log(format(url, options));

let newUrl = format (url, options);

console.log(newUrl);

let newUrlObject = new URL(newUrl);

url.searchParams.set('page', 2);
url.searchParams.append('limit', 5);

console.log(newUrlObject.toString());           // ??
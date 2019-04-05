
const http = require('http');
const url = require ('url');
const port = 3000;

const server = http.createServer();

server.on('request', (request, response) => {


    console.log('New request catch: %s', request.url);
    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    let page = url.parse(request.url).pathname;

    if(page === "/"){
        response.write('<h1>Bravo, la première étape vers le succès a été atteinte</h1>');
        response.write('<p><a href="/contact">Contact</a></p>');
    } else if (page === "/contact"){
        response.write('<h1>Contact</h1>');
        response.write('<p>Pour nous contacter ... BLABLABLA ... *Insert ur joke here*</p>');
        response.write('<p><a href="/">Revenir à l\'accueil</a></p>');
    } else {
        response.statusCode = 404;
        response.write('<h1>Page introuvable</h1>');
    }

    response.end();
});


server.listen(port, (err) => {

    if (err) {

        return console.log('Erreur: ', err)
    }

    console.log(`Serveur: localhost:${port}`);
    console.log(`** Open your browser on http://localhost:${port}/ **`);
    console.log('** Shutdown Personal Node Server with CTRL+C **');
});
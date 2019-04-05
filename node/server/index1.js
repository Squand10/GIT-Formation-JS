const http = require('http');
const url = require ('url');
const fs = require('fs');
const path = require('path');
const mimeType = {
    '.css': 'text/css'
};

const port = 3001;
const server = http.createServer();


const router = require('find-my-way')({
    defaultRoute: (request, response) => {

        let page = url.parse(request.url).pathname;

        if (!fs.existsSync(path.join(__dirname, page) )) {

            let html = `<h1>Page introuvable</h1>
                    <p>Revenir à la page d\'<a href="/">Accueil</a></p>`;

            response.statusCode = 404;
            response.end(html);
        } else {
            fs.readFile(path.join(__dirname, page), (err, data) => {
                if(err){
                    response.statusCode = 500;
                    response.end('Internal Error');
                } else {
                    const ext = path.parse(page).ext;

                    response.setHeader('Content-Type', mimeType[ext] || 'text/plain');
                    response.end(data);
                }
            });
        }
    }
});

router.get('/', (request, response) => {
    let html =`
        <html>
            <head>
                <title>Accueil</title>
                <meta charset="utf-8"/>
                <link rel="stylesheet" type="text/css" href="css/style.css">
            </head>
            <body>
                <h1>Bienvenue sur le serveur</h1>
                <p><a href="/contact">Contact</a></p>
            </body>
        </html>`;
    response.end(html);
});

router.get('/contact', (request, response) => {
    let html =`
        <html>
            <head>
                <title>Accueil</title>
                <meta charset="utf-8"/>
                <link rel="stylesheet" type="text/css" href="css/style.css">
            </head>
            <body>
                <h1>Contact</h1>
                <p>Pour nous contactez...BlaBlaBla...*Instert ur joke here*</p>
                <p><a href="/contact">Contact</a></p>
            </body>
        </html>`;
    response.end(html);
});




server.on('request', (request, response) => {
    response.setHeader('content-Type', 'text/html; charset=utf_8');

    router.lookup(request,response);
});

server.listen(port)

    console.log(`Serveur: localhost:${port}`);
    console.log(`** Open your browser on http://localhost:${port}/ **`);
    console.log('** Shutdown Personal Node Server with CTRL+C **');
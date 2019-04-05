const express = require('express');
const port = 1234;
const app = express();
const path = require('path');

const njk = require('nunjucks').configure(`${__dirname}/template`, {
    autoescape: true,
    express: app
});


app.use(express.static(__dirname));  //fichiers statics

app.get('/', (request, response) => {

    let userSource = "<script>alert('xss')</script>";

    response.render('accueil.njk.html', {html: userSource});

});

app.get('/hello/:name', (request, response) => {
    let name = request.params.name;

    response.render('hello.njk.html', { name: name });
});

app.get('/old', (request, response) => {
    let html =`
        <html>
            <head>
                <title>Accueil</title>
                <meta charset="utf-8"/>
                <link rel="stylesheet" href="css/style.css"/>
            </head>
            <body>
                <h1>Bienvenue sur Express</h1> 
            </body>
        </html>
        `;

    response.end(html);

});



app.listen(port, () => {

    console.log('Web Server Listening at http://localhost:%s', port);
});
const express = require('express');
const port = 3200;
const app = express();
const Product = require('./model/product');
const bodyParser = require ('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nodeJS', {useNewUrlParser: true})
    .then(() => {
    console.log("Connexion établie avec succès")
});
const db = mongoose.connection;

// middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.get('/product', (request, response) => {

    Product.find({}).then((products) => {
        response.send(products);
    });

});

app.get('/product/:id', (request, response) => {


    Product.findById(request.params.id).then((product) => {
        response.send(product);
    });
});

app.post('/product', (request, response) => {

    let product = new Product({
        name: request.body.name,
        price: request.body.price
    });

    product.save().then(() => {
        response.statusCode = 201;
        response.send({"message": "Ok"});
    });
});



    app.put('/product/:id', (request, response) => {
        Product.findByIdAndUpdate(request.params.id, request.body).then(() => {
            response.statusCode = 204;
            response.send({"message":"No content"});
        });
    });

    app.delete('/product/:id', (request, response) => {
        Product.findByIdAndRemove(request.params.id, request.body).then(() => {
            response.statusCode = 204;
            response.send({"message":"No content"});
        });
    });


app.listen(port, () => {

    console.log('Web Server Listening at http://localhost:%s', port);
});
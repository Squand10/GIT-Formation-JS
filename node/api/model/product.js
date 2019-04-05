const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema({
    name: String,
    price: Number
});

module.exports = mongoose.model('Product', productSchema);
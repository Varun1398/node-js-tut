const mongoose = require('mongoose');
const productScheme = mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});

module.exports = mongoose.model('products', productScheme);

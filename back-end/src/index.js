const express = require('express');

const productController = require('./controllers/product.controller');
const cartController = require('./controllers/cart.controller');

const app = express();
app.use(express.json());

app.use('/products', productController);
app.use('/cart', cartController);

module.exports = app;
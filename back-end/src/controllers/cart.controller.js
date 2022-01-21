const { Router } = require('express');
const router = Router();

const Cart = require('../models/cart.model');

router.post('/', async (req, res) => {
    try {
        const product = await Cart.create(req.body);
        return res.status(201).json(product);
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
});



/*
router.get('/', async (req, res) => {
    try {
        const products = await Product.find(req.query).lean().exec();
        return res.status(200).send(products);
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
});
*/
module.exports = router; 
// routes/products.js

// POST /products
// GET /products
// GET /products/:id
// PUT /products/:id
// DELETE /products/:id

const express = require('express');
const router = express.Router();
const { createProduct, getProducts, updateProduct, deleteProduct, getById } = require('../controllers/productController');

router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:id', getById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
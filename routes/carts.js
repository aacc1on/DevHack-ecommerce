// POST /carts/:userId/add
// GET /carts/:userId
// PUT /carts/:userId/remove
// DELETE /carts/:userId

const express = require('express');
const router = express.Router();
const { createCart, getCart, updateCart, deleteCart } = require('../controllers/cartController');

router.post('/:userId/add', createCart);
router.get('/:userId', getCart);
router.put('/:userId/remove', updateCart);
router.delete('/:userId', deleteCart);

module.exports = router;
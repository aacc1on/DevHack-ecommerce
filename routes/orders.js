// POST /orders/:userId
// GET /orders/:userId
// GET /orders/:orderId

const express = require('express');
const router = express.Router();
const { createOrderUID, getOrderUID, getOrderOID } = require('../controllers/orderController');


router.post('/:userId', createOrderUID);
router.get('/:userId', getOrderUID);
router.get('/:orderId', getOrderOID);

module.exports = router;
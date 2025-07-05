// POST /orders/:userId
// GET /orders/:userId
// GET /orders/:orderId

const express = require('express');
const router = express.Router();
const { createOrderUID, getOrdersUID, getOrderOID } = require('../controllers/orderController');

router.post('/:userId', createOrderUID);
router.get('/:userId', getOrdersUID);
router.get('/:orderId', getOrderOID);

module.exports = router;
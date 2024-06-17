const express = require('express');
const { createOrder, viewOrderStatus } = require('../controllers/orderController');
const authenticateJWT = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/create', authenticateJWT, createOrder);
router.get('/status', authenticateJWT, viewOrderStatus);

module.exports = router;

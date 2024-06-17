const express = require('express');
const { registerDriver, loginDriver, viewAvailableOrders, acceptOrder } = require('../controllers/driverController');
const authenticateJWT = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', registerDriver);
router.post('/login', loginDriver);
router.get('/orders', authenticateJWT, viewAvailableOrders);
router.post('/accept-order', authenticateJWT, acceptOrder);

module.exports = router;

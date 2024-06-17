const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const { createOrder, viewOrderStatus } = require('../controllers/orderController');
const authenticateJWT = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/create', authenticateJWT, createOrder);
router.get('/status', authenticateJWT, viewOrderStatus);



module.exports = router;

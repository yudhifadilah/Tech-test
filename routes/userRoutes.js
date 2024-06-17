const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const { createOrder } = require('../controllers/orderController');
const authenticateJWT = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/create', authenticateJWT, createOrder);


module.exports = router;

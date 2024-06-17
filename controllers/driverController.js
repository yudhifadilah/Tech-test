const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Driver, Order } = require('../models');

// Mendaftar sebagai driver
const registerDriver = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newDriver = await Driver.create({
      name,
      email,
      password: hashedPassword
    });
    res.status(201).json({ message: 'Driver registered successfully!', driverId: newDriver.id });
  } catch (error) {
    res.status(500).json({ message: 'Error registering driver', error });
  }
};

// Login sebagai driver dan mendapatkan token JWT
const loginDriver = async (req, res) => {
  const { email, password } = req.body;
  try {
    const driver = await Driver.findOne({ where: { email } });
    if (!driver) {
      return res.status(401).json({ message: 'Authentication failed. Driver not found.' });
    }

    const match = await bcrypt.compare(password, driver.password);
    if (!match) {
      return res.status(401).json({ message: 'Authentication failed. Wrong password.' });
    }

    const token = jwt.sign({ id: driver.id, email: driver.email, role: 'driver' }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).json({ message: 'Authentication successful!', token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};

// Melihat semua pesanan perjalanan yang tersedia (Hanya bisa diakses oleh role driver)
const viewAvailableOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({ where: { status: 'pending' } });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error });
  }
};

// Menerima pesanan perjalanan (Hanya bisa diakses oleh role driver)
const acceptOrder = async (req, res) => {
  const { id: driver_id } = req.user;
  const { orderId } = req.body;
  try {
    const order = await Order.findByPk(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found.' });
    }
    if (order.status !== 'pending') {
      return res.status(400).json({ message: 'Order has already been accepted.' });
    }

    order.driver_id = driver_id;
    order.status = 'accepted';
    await order.save();

    res.status(200).json({ message: 'Order accepted successfully!', order });
  } catch (error) {
    res.status(500).json({ message: 'Error accepting order', error });
  }
};

module.exports = { registerDriver, loginDriver, viewAvailableOrders, acceptOrder };

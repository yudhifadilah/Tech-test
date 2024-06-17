const { Order } = require('../models');

// Membuat pesanan perjalanan
const createOrder = async (req, res) => {
  const { id: user_id } = req.user; // Ambil user_id dari token JWT
  const { pickup_location, destination } = req.body;

  try {
    const newOrder = await Order.create({ 
      user_id, 
      pickup_location, 
      destination, 
      status: 'pending' 
    });

    res.status(201).json({
      message: 'Order created successfully!',
      order: newOrder
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating order', error });
  }
};

// Melihat status pesanan perjalanan saat ini
const viewOrderStatus = async (req, res) => {
  const { id: user_id } = req.user; // Ambil user_id dari token JWT

  try {
    const orders = await Order.findAll({ where: { user_id } });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching order status', error });
  }
};

module.exports = { createOrder, viewOrderStatus };

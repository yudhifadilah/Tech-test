const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');
const driverRoutes = require('./routes/driverRoutes');
const orderRoutes = require('./routes/orderRoutes');
const { specs, swaggerUi } = require('./swagger');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk parsing body dari request
app.use(bodyParser.json());

// Gunakan rute yang sudah didefinisikan
app.use('/api/users', userRoutes);
app.use('/api/drivers', driverRoutes);
app.use('/api/orders', orderRoutes);

// Setup endpoint untuk menampilkan dokumentasi Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Jalankan server
app.listen(PORT, async () => {
  try {
    // Koneksi ke database
    await sequelize.authenticate();
    console.log(`Server running on http://localhost:${PORT}`);
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
});

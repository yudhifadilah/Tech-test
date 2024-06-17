const sequelize = require('../config/dbConfig');
const User = require('./userModel');
const Driver = require('./driverModel');
const Order = require('./orderModel');

// Definisikan relasi antara model
User.hasMany(Order, { foreignKey: 'user_id' });
Order.belongsTo(User, { foreignKey: 'user_id' });

Driver.hasMany(Order, { foreignKey: 'driver_id' });
Order.belongsTo(Driver, { foreignKey: 'driver_id' });

// Sinkronisasi model dengan database
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables synced!');
  })
  .catch(err => {
    console.error('Sync error:', err);
  });

module.exports = {
  User,
  Driver,
  Order,
  sequelize
};

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Driver = sequelize.define('Driver', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  name: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(250),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
}, {
  tableName: 'drivers',
});

module.exports = Driver;

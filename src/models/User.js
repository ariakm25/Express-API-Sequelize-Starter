const bcrypt = require('bcryptjs');
const { DataTypes } = require('sequelize');
const db = require('../config/database/instance');

const User = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING(80),
  email: {
    type: DataTypes.STRING(255),
    unique: true,
  },
  password: {
    type: DataTypes.STRING(255),
  },
});

User.prototype.validatePassword = function (candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.password);
};

module.exports = User;

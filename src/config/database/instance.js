const { Sequelize } = require('sequelize');
const dbConfig = require('../index').database;

const db = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);

module.exports = db;

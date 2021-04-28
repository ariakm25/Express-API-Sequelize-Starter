const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('../routes');
const db = require('../config/database/instance');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

db.authenticate()
  .then(() => console.log('[DB] Connection has been established successfully.'))
  .catch((error) => console.error('[DB] Unable to connect to the database:', error));

app.use(routes);

module.exports = app;

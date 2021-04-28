require('dotenv').config();

module.exports = {
  database: {
    ...require('./database/dbConfig'),
  },
  jwt: {
   secret: process.env.JWT_SECRET || 'supersecret',
   algorithm: process.env.JWT_ALGO || 'HS256',
  }
};

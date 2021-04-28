module.exports = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || null,
  database: process.env.DB_NAME || 'express-api',
  host: process.env.DB_HOST || '127.0.0.1',
  dialect: 'mysql',
};

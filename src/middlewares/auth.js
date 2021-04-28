const JWT = require('jsonwebtoken');
const config = require('../config');
const httpCodes = require('../utils/httpCodes');
const response = require('../utils/response');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (token && token.indexOf('Bearer ') !== -1) {
    try {
      const user = JWT.verify(token.split('Bearer ')[1], config.jwt.secret);
      req.user = user;
      return next();
    } catch (error) {
      return response(res, httpCodes.UNAUTHORIZED, 'Unauthorized', null);
    }
  }

  return response(res, httpCodes.UNAUTHORIZED, 'Unauthorized', null);
};

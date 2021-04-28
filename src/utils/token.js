const JWT = require('jsonwebtoken');
const config = require('../config');

module.exports = {
  /**
   * @param {any} user user data 
   */
  generateToken: (user) => {
    return JWT.sign(user, config.jwt.secret, {
      algorithm: config.jwt.algorithm,
    });
  },
};

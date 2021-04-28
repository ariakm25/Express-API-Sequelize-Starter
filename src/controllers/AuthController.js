const User = require('../models/User');
const response = require('../utils/response');
const httpCodes = require('../utils/httpCodes');
const { generateToken } = require('../utils/token');

module.exports = {
  async login(req, res) {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (!user) return response(res, httpCodes.UNPROCESSABLE_ENTITY, 'User not found', null);

      const passwordIsValid = user.validatePassword(req.body.password);

      if (!passwordIsValid) return response(res, httpCodes.UNPROCESSABLE_ENTITY, 'Invalid Username or Password', null);

      const token = generateToken({
        id: user.id,
        name: user.name,
      });

      return response(res, httpCodes.OK, 'Login success', {
        name: user.name,
        email: user.email,
        token: token,
      });
    } catch (error) {
      return response(res, httpCodes.INTERNAL_SERVER_ERROR, error.message, null);
    }
  },
};

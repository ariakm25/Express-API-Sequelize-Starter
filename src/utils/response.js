/**
 * @param {express.Response} res
 * @param {number} statusCode
 * @param {string} message
 * @param {any} data
 */
module.exports = response = (res, statusCode, message, data) => {
  return res
    .status(statusCode)
    .json({
      code: statusCode,
      status: statusCode < 400 ? 'success' : 'failed',
      message,
      data,
    })
    .end();
};

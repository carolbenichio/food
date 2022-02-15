const ApiError = require('./ApiError');

const newError = (error, _req, res) => {
  if (error instanceof ApiError) {
    const { status, message } = error;
    if (status) return res.status(status).json({ message });
  }
  return res.status(500).json('Internal server error');
};

module.exports = newError;

const jwt = require('jsonwebtoken');

// Function to generate a JWT token
const generateToken = (userId) => {
  const secret = process.env.JWT_SECRET || 'defaultSecret';
  const expiresIn = process.env.JWT_EXPIRES_IN || '1h';

  return jwt.sign({ id: userId }, secret, { expiresIn });
};

module.exports = { generateToken };
const xss = require('xss');

// Middleware to sanitize input to prevent XSS attacks
const sanitizeInput = (req, res, next) => {
  // Sanitize query parameters, request body, and headers
  if (req.body) {
    req.body = sanitizeObject(req.body);
  }
  if (req.query) {
    req.query = sanitizeObject(req.query);
  }
  if (req.headers) {
    req.headers = sanitizeObject(req.headers);
  }
  next();
};

// Helper function to sanitize each key-value pair of an object
const sanitizeObject = (obj) => {
  if (typeof obj === 'object') {
    Object.keys(obj).forEach((key) => {
      obj[key] = xss(obj[key]);  // Apply XSS sanitization
    });
  }
  return obj;
};

module.exports = { sanitizeInput };
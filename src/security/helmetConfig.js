const helmet = require('helmet');

// Configuring various HTTP headers with helmet
const secureHeaders = (app) => {
  app.use(helmet());  // Set multiple security-related HTTP headers

  // Additional headers to increase security
  app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
    },
  }));

  app.use(helmet.referrerPolicy({ policy: 'no-referrer' }));
  app.use(helmet.xssFilter());  // Prevent reflected XSS attacks
  app.use(helmet.frameguard({ action: 'deny' }));  // Prevent clickjacking
};

module.exports = { secureHeaders };
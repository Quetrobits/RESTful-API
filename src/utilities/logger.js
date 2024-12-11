const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../logs/app.log');

// Function to log messages to a file
const logToFile = (message) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;

  fs.appendFileSync(logFilePath, logMessage, (err) => {
    if (err) {
      console.error('Failed to write to log file:', err);
    }
  });
};

// Exported logger
const logger = {
  info: (msg) => logToFile(`INFO: ${msg}`),
  error: (msg) => logToFile(`ERROR: ${msg}`),
};

module.exports = logger;
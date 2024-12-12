const errorHandler = (err, req, res, next) => {

  // Define a more descriptive error response
  const statusCode = err.statusCode || 500;
  const errorResponse = {
    success: false,
    message: err.message || 'Internal Server Error',
    details: err.details || null, // Include additional error details if available
  };

  // Handle specific error types for better UX
  if (err.name === 'ValidationError') {
    errorResponse.message = 'Validation failed';
    errorResponse.details = err.errors;
    return res.status(400).json(errorResponse);
  }

  if (err.name === 'CastError') {
    errorResponse.message = `Invalid ${err.path}: ${err.value}`;
    return res.status(400).json(errorResponse);
  }

  res.status(statusCode).json(errorResponse);
};

module.exports = { errorHandler };
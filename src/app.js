const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const { errorHandler } = require('./middleware/errorHandler');
const { protect } = require('./middleware/authMiddleware');
const db = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to the database
db.connect();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(morgan('dev')); // Logging for development

// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Example protected route
app.use('/api/secure-data', protect, (req, res) => {
  res.json({ success: true, message: 'This is secured data.', user: req.user });
});

// Error handling middleware
app.use(errorHandler);

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// Import required modules
const express = require('express');
const { 
    getAllUsers, 
    getUserById, 
    createUser, 
    updateUser, 
    deleteUser, 
    getUserByEmail 
} = require('../controllers/userController');

const router = express.Router();

/**
 * Middleware to log request details for debugging and analytics
 */
router.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

/**
 * Middleware to validate user input for specific routes
 */
const validateUserInput = (req, res, next) => {
    const { name, email } = req.body;
    if (req.method === 'POST' || req.method === 'PUT') {
        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required.' });
        }
    }
    next();
};

// Route to fetch all users
// GET /api/users
router.get('/', async (req, res, next) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
});

// Route to fetch a user by ID
// GET /api/users/:id
router.get('/:id', async (req, res, next) => {
    try {
        const user = await getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
});

// Route to fetch a user by email
// GET /api/users/email/:email
router.get('/email/:email', async (req, res, next) => {
    try {
        const user = await getUserByEmail(req.params.email);
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
});

// Route to create a new user
// POST /api/users
router.post('/', validateUserInput, async (req, res, next) => {
    try {
        const newUser = await createUser(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        next(err);
    }
});

// Route to update an existing user
// PUT /api/users/:id
router.put('/:id', validateUserInput, async (req, res, next) => {
    try {
        const updatedUser = await updateUser(req.params.id, req.body);
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found.' });
        }
        res.status(200).json(updatedUser);
    } catch (err) {
        next(err);
    }
});

// Route to delete a user
// DELETE /api/users/:id
router.delete('/:id', async (req, res, next) => {
    try {
        const deletedUser = await deleteUser(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found.' });
        }
        res.status(200).json({ message: 'User deleted successfully.' });
    } catch (err) {
        next(err);
    }
});

/**
 * Middleware to handle errors specific to user routes
 */
router.use((err, req, res, next) => {
    console.error(`User Route Error: ${err.message}`);
    res.status(err.status || 500).json({ error: err.message });
});

module.exports = router;
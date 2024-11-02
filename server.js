const express = require('express');
const sequelize = require('./config/database');
const cors = require('cors');
const reportRoutes = require('./routes/reportRoutes'); // Ensure this path is correct
const AppError = require('./utils/AppError');
require('dotenv').config();

const app = express();

// Middleware setup

// Configure CORS to allow requests from specific origins or all origins for development
app.use(cors({
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000', // Set this to your frontend URL in production
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Specify headers if necessary
}));

app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Use the API routes
app.use('/api/reports', reportRoutes); // Connect report routes

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    const statusCode = err.statusCode || 500;
    const message = err.isOperational ? err.message : 'Internal Server Error';
    
    res.status(statusCode).json({
        error: {
            message: message,
        },
    });
});

// Database connection and server start
const startServer = async () => {
    try {
        // Authenticate database connection
        await sequelize.authenticate();
        console.log('Database connection established successfully.');
        
        // Sync database models
        await sequelize.sync();
        console.log('Database synchronized.');

        // Start the server
        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1); // Exit process if connection fails
    }
};

// Start the server
startServer();

module.exports = app; // Export app for testing or other purposes
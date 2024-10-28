const express = require('express');
const sequelize = require('./config/database');
const cors = require('cors');
const routes = require('./routes/Routes'); // Ensure this path is correct
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());  // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Use the API routes
app.use('/api', routes); // Use the defined routes

// Error handling middleware should be added after all routes
// app.use(errorHandler); // Uncomment this when you have an error handler

// Authenticate and sync the database
const startServer = async () => {
    try {
        await sequelize.authenticate(); // Authenticate the database connection
        console.log('Connection has been established successfully.');
        
        await sequelize.sync(); // Synchronize the database
        console.log('Database synchronized.');

        // Start the server
        const PORT = process.env.PORT || 8000; // Default to port 3000 if not specified
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1); // Exit the process with failure
    }
};

// Start the server
startServer();

module.exports = app; // Export the app for testing or other purposes
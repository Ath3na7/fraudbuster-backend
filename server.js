// server.js

const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db'); // Corrected import path for sequelize
const reportRoutes = require('./routes/reportRoutes'); // Import report routes
const checkRoutes = require('./routes/checkRoutes'); // Import check routes

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Use the report routes
app.use('/api/reports', reportRoutes);
app.use('api/scamCheck', checkRoutes);

// Start the server
app.listen(8000, async () => {
  console.log(`Server is running on port 8000`);

  try {
    // Connect to MySQL using Sequelize
    await sequelize.authenticate();
    console.log('Connected to MySQL database');

    // Sync all models with the database
    await sequelize.sync(); // This ensures that your models are in sync with the database
    console.log('Database & tables created!');

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
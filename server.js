const express = require('express');
const sequelize = require('./config/database');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());  // Handle cross-origin requests if needed
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the upload routes
app.use('/api', uploadRoutes);

// Error handling middleware
app.use(errorHandler);

// Authenticate and sync the database
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    return sequelize.sync();
  })
  .then(() => {
    console.log('Database synchronized.');
    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = app;
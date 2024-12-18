// src/server.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bankingReportRoutes = require('./src/routes/bankingReportRoutes');
const esewaReportRoutes = require('./src/routes/EsewaReportRoutes');
const khaltiReportRoutes = require('./src/routes/khaltiReportRoutes');
const phoneNumberReportRoutes = require('./src/routes/phoneNumberReportRoutes');
const imepayReportRoutes = require('./src/routes/imepayReportRoutes');
const sequelize = require('./src/config/database');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());


// Routes
app.use('/api', bankingReportRoutes);
app.use('/api', esewaReportRoutes);
app.use('/api', khaltiReportRoutes);
app.use('/api', phoneNumberReportRoutes);
app.use('/api', imepayReportRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Internal server error'
    });
});

// Database connection and server start
const PORT = process.env.PORT || 2000;

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = app;
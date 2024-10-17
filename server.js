const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const reportRoutes = require('./routes/reportRoutes');
const checkRoutes = require('./routes/checkRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use('/api/report', reportRoutes);
app.use('/api/check', checkRoutes);

// Sync database and start server
sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

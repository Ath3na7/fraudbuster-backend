const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const ScamReportmodel =  require('./models/scamReport');
const Routes = require('./routes/Routes')
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use('/api', Routes);


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

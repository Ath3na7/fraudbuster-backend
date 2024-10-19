const express = require('express');
const uploadRoutes = require('./routes/uploadRoutes'); // Import the upload routes
const { ScamReport } = require('./models'); // Adjust the path as needed
const Report = require('./models/report/report');
const EsewaReport = require('./models/report/esewaReport');
const PhoneReport = require('./models/report/phoneReport');
const BankingReport = require('./models/report/bankingReport');
const TelegramReport = require('./models/report/telegramReport');
const WhatsAppReport = require('./models/report/whatsappReport');
const SocialMediaReport = require('./models/report/socialMediaReport');
const Search = require('./models/search/search');
const EsewaSearch = require('./models/search/esewaSearch');
const PhoneSearch = require('./models/search/phoneSearch');
const BankingSearch = require('./models/search/bankingSearch');
const TelegramSearch = require('./models/search/telegramSearch');
const WhatsAppSearch = require('./models/search/whatsappSearch');
const SocialMediaSearch = require('./models/search/socialMediaSearch');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the upload routes
app.use('/api', uploadRoutes);


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
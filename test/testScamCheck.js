const mongoose = require('mongoose');
const { MONGO_URL } = require('../config/db.js'); // Adjust the path to your config file
const ScamCheck = require('../models/scamcheck.js'); // Adjust the path to your model file

// Connect to MongoDB
mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('MongoDB connected');

    // Define the search criteria
    const searchCriteria = {
      checkType: "esewa",
      accountName: "John Doe",
      accountNumber: "1234567890",
      bankName: "Sample Bank",
      facebookName: "JohnD",
      facebookUrl: "https://www.facebook.com/JohnD",
      esewaDetail: "9876543210",
      telegramUsername: "@johndoe",
      whatsappNumber: "1234567890"
    };

    // Check if the document exists in the database
    return ScamCheck.findOne(searchCriteria);
  })
  .then((result) => {
    if (result) {
      console.log('Found:', result); // Log the found document
    } else {
      console.log('Not found'); // Log if the document was not found
    }
  })
  .catch(err => {
    console.error('Error:', err);
  })
  .finally(() => {
    mongoose.disconnect(); // Disconnect from MongoDB
  });

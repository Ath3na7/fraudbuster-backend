const express = require('express');
const router = express.Router();
const { checkEsewaID } = require('../controllers/checkControllers'); // Ensure the path is correct

// Define the check route
router.get('/check', checkEsewaID); // Ensure this matches your controller's method

module.exports = router;

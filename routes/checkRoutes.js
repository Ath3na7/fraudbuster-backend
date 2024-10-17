const express = require('express');
const router = express.Router();
const { checkEsewaID } = require('../controllers/checkController'); // Ensure the path is correct

// Define the check route
router.get('/', checkEsewaID); // Ensure this matches your controller's method

module.exports = router;

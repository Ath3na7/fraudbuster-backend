const express = require('express');
const router = express.Router();
const checkController = require('../controllers/checkControllers');

// Route to check scam reports
router.get('/check', checkController.checkScamReports);

module.exports = router;
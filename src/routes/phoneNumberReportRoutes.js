// src/routes/khaltiReportRoutes.js
const express = require('express');
const router = express.Router();
const phoneNumberReportController = require('../controllers/PhoneNumberReportController');
const { validateReport } = require('../middleware/validation/phoneNumberReport');

// Route to create a new Khalti report
router.post('/reports/phone', validateReport, phoneNumberReportController.createReport);

// Route to validate if a Khalti report exists
router.post('/reports/phone/validate', validateReport, phoneNumberReportController.validateReport);

module.exports = router;
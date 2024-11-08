// src/routes/khaltiReportRoutes.js
const express = require('express');
const router = express.Router();
const khaltiReportController = require('../controllers/KhaltiReportController');
const { validateReport } = require('../middleware/validation/khaltiReport');

// Route to create a new Khalti report
router.post('/reports/khalti', validateReport, khaltiReportController.createReport);

// Route to validate if a Khalti report exists
router.post('/reports/khalti/validate', validateReport, khaltiReportController.validateReport);

module.exports = router;
// src/routes/imepayReportRoutes.js
const express = require('express');
const router = express.Router();
const imepayReportController = require('../controllers/IMEPayReportController'); // Importing the IMEPay report controller
const { validateReport } = require('../middleware/validation/imepayReport'); // Importing the IMEPay validation middleware

// Route to create a new IMEPay report
router.post('/reports/imepay', validateReport, imepayReportController.createReport);

// Route to validate if an IMEPay report exists
router.post('/reports/imepay/validate', validateReport, imepayReportController.validateReport);

module.exports = router;
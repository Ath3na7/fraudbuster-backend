// src/routes/bankingReportRoutes.js
const express = require('express');
const router = express.Router();
const bankingReportController = require('../controllers/BankingReportController');
const { validateReport } = require('../middleware/validation/bankingReport');

router.post('/reports/bank', validateReport, bankingReportController.createReport);

router.post('/reports/bank/validate', validateReport, bankingReportController.validateReport);

module.exports = router;
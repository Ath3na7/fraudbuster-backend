// src/routes/bankingReportRoutes.js
const express = require('express');
const router = express.Router();
const bankingReportController = require('../controllers/BankingReportController');
const { validateReport } = require('../middleware/validations');

router.post('/reports', validateReport, bankingReportController.createReport);

router.get('/reports', bankingReportController.getAllReports);

router.post('/reports/validate', validateReport, bankingReportController.validateReport);

module.exports = router;
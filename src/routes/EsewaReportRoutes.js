// src/routes/esewaReportRoutes.js
const express = require('express');
const router = express.Router();
const esewaReportController = require('../controllers/EsewaReportController');
const { validateReport } = require('../middleware/validation/esewaReport');

// Route to create a new Esewa report
router.post('/reports/esewa', validateReport, esewaReportController.createReport);

// Route to validate if an Esewa report exists
router.post('/reports/esewa/validate', validateReport, esewaReportController.validateReport);

module.exports = router;

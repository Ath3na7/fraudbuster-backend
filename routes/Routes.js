const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');


// Create a new report
router.post('/reports', reportController.createReport);

// Get all reports by type
router.get('/reports/:type', reportController.getAllReports);

// Get a report by ID
router.get('/reports/:type/:id', reportController.getReportById);

// Update a report by ID
router.put('/reports/:type/:id', reportController.updateReportById);

// Delete a report by ID
router.delete('/reports/:type/:id', reportController.deleteReportById);

module.exports = router;
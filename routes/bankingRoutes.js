const express = require('express');
const router = express.Router();
const { createReport, getAllReports, getReportById, updateReportById, deleteReportById } = require('../controllers/reportController');

// Routes for Banking Reports
router.post('/', createReport);
router.get('/', getAllReports);
router.get('/:id', getReportById);
router.put('/:id', updateReportById);
router.delete('/:id', deleteReportById);

module.exports = router;
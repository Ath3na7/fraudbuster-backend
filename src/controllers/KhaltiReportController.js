// src/controllers/khaltiReportController.js
const KhaltiReport = require('../models/KhaltiReport');
const apiService = require('../services/apiService');

const khaltiReportController = {
    createReport: async (req, res) => {
        try {
            const { khalti_number, description } = req.body;
            
            // Creating a new Khalti report
            const report = await KhaltiReport.create({
                khalti_number,
                description
            });

            res.status(201).json({
                success: true,
                message: 'Khalti report submitted successfully',
                data: report
            });
        } catch (error) {
            console.error('Error creating Khalti report:', error);
            res.status(500).json({
                success: false,
                message: 'Error submitting Khalti report',
                error: error.message
            });
        }
    },

    validateReport: async (req, res) => {
        try {
            const { khalti_number } = req.body;
    
            // Finding an existing report with the given Khalti number
            const report = await KhaltiReport.findOne({
                where: {
                    khalti_number
                }
            });
    
            if (report) {
                return res.json({
                    success: true,
                    status: 'valid',
                    message: 'Khalti report found',
                    data: report
                });
            } else {
                return res.status(404).json({
                    success: false,
                    status: 'not_found',
                    message: 'Khalti report not found'
                });
            }
        } catch (error) {
            console.error('Error validating Khalti report:', error);
            res.status(500).json({
                success: false,
                status: 'error',
                message: 'Error validating Khalti report',
                error: error.message
            });
        }
    }
};

module.exports = khaltiReportController;
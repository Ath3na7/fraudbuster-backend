// src/controllers/esewaReportController.js
const EsewaReport = require('../models/EsewaReport');
const apiService = require('../services/apiService');

const esewaReportController = {
    createReport: async (req, res) => {
        try {
            const { esewa_number, description } = req.body;
            
            // Creating a new Esewa report
            const report = await EsewaReport.create({
                esewa_number,
                description
            });

            res.status(201).json({
                success: true,
                message: 'Esewa report submitted successfully',
                data: report
            });
        } catch (error) {
            console.error('Error creating Esewa report:', error);
            res.status(500).json({
                success: false,
                message: 'Error submitting Esewa report',
                error: error.message
            });
        }
    },

    validateReport: async (req, res) => {
        try {
            const { esewa_number } = req.body;
    
            // Finding an existing report with the given Esewa number
            const report = await EsewaReport.findOne({
                where: {
                    esewa_number
                }
            });
    
            if (report) {
                return res.json({
                    success: true,
                    status: 'valid',
                    message: 'Esewa report found',
                    data: report
                });
            } else {
                return res.status(404).json({
                    success: false,
                    status: 'not_found',
                    message: 'Esewa report not found'
                });
            }
        } catch (error) {
            console.error('Error validating Esewa report:', error);
            res.status(500).json({
                success: false,
                status: 'error',
                message: 'Error validating Esewa report',
                error: error.message
            });
        }
    }
};

module.exports = esewaReportController;

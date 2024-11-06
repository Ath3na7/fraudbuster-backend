// src/controllers/bankingReportController.js
const BankingReport = require('../models/BankingReport');
const apiService = require('../services/apiService');

const bankingReportController = {
    // Create new report
    createReport: async (req, res) => {
        try {
            const { account_name, account_number, bank_name, description } = req.body;
            
            
            const report = await BankingReport.create({
                account_name,
                account_number,
                bank_name,
                description
            });

            res.status(201).json({
                success: true,
                message: 'Report submitted successfully',
                data: report
            });
        } catch (error) {
            console.error('Error creating report:', error);
            res.status(500).json({
                success: false,
                message: 'Error submitting report',
                error: error.message
            });
        }
    },

    // Get all reports
    getAllReports: async (req, res) => {
        try {
            const reports = await BankingReport.findAll({
                order: [['bank_id', 'DESC']]
            });

            res.json({
                success: true,
                data: reports
            });
        } catch (error) {
            console.error('Error fetching reports:', error);
            res.status(500).json({
                success: false,
                message: 'Error fetching reports',
                error: error.message
            });
        }
    },

    // Validate if report exists
    validateReport: async (req, res) => {
        try {
            const { account_name, account_number, bank_name } = req.body;

            const report = await BankingReport.findOne({
                where: {
                    account_name,
                    account_number,
                    bank_name
                }
            });

            if (report) {
                return res.json({
                    success: true,
                    message: 'Report found',
                    data: report
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: 'Report not found'
                });
            }
        } catch (error) {
            console.error('Error validating report:', error);
            res.status(500).json({
                success: false,
                message: 'Error validating report',
                error: error.message
            });
        }
    }

    // // Get single report
    // getReportById: async (req, res) => {
    //     try {
    //         const report = await BankingReport.findByPk(req.params.id);
            
    //         if (!report) {
    //             return res.status(404).json({
    //                 success: false,
    //                 message: 'Report not found'
    //             });
    //         }

    //         res.json({
    //             success: true,
    //             data: report
    //         });
    //     } catch (error) {
    //         console.error('Error fetching report:', error);
    //         res.status(500).json({
    //             success: false,
    //             message: 'Error fetching report',
    //             error: error.message
    //         });
    //     }
    // }
};

module.exports = bankingReportController;
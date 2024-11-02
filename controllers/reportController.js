const models = require('../models');
const AppError = require('../utils/AppError');

// Centralized error handler
const handleError = (res, error) => {
    const statusCode = error.statusCode || 400;
    res.status(statusCode).json({ error: error.message });
};

// Function to get the model based on scam type
const getModel = (type) => {
    return models[type] || null;
};

// Create a new report
const createReport = async (req, res, next) => {
    try {
        const model = getModel(req.body.scam_type);
        if (!model) {
            return next(new AppError('Invalid scam type', 400));
        }
        const report = await model.create(req.body);
        res.status(201).json(report);
    } catch (error) {
        next(error);
    }
};

// Get all reports by type
const getAllReports = async (req, res) => {
    try {
        const model = getModel(req.params.type); // Type passed as a parameter
        const reports = await model.findAll(); // Fetch all reports
        res.status(200).json(reports);
    } catch (error) {
        handleError(res, error);
    }
};

// Get a report by ID
const getReportById = async (req, res) => {
    try {
        const model = getModel(req.params.type);
        const report = await model.findByPk(req.params.id); // Fetch report by ID
        if (report) {
            res.status(200).json(report);
        } else {
            res.status(404).json({ error: 'Report not found' });
        }
    } catch (error) {
        handleError(res, error);
    }
};

// Update a report by ID
const updateReportById = async (req, res) => {
    try {
        const model = getModel(req.params.type);
        const [updated] = await model.update(req.body, {
            where: { scam_id: req.params.id }
        });
        if (updated) {
            const updatedReport = await model.findByPk(req.params.id); // Fetch updated report
            res.status(200).json(updatedReport);
        } else {
            res.status(404).json({ error: 'Report not found' });
        }
    } catch (error) {
        handleError(res, error);
    }
};

// Delete a report by ID
const deleteReportById = async (req, res) => {
    try {
        const model = getModel(req.params.type);
        const deleted = await model.destroy({
            where: { scam_id: req.params.id }
        });
        if (deleted) {
            res.status(204).send(); // No content to send back
        } else {
            res.status(404).json({ error: 'Report not found' });
        }
    } catch (error) {
        handleError(res, error);
    }
};

module.exports = {
    createReport,
    getAllReports,
    getReportById,
    updateReportById,
    deleteReportById
};
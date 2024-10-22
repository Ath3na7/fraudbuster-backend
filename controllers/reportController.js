const models = require('../models/report/report'); // Adjust the path as necessary

// Function to get the model based on scam type
const getModel = (type) => {
    return models[type] || null;
};

// Create a new report
const createReport = async (req, res) => {
    try {
        const model = getModel(req.body.scam_type); // Get model based on scam_type
        if (!model) {
            return res.status(400).json({ error: 'Invalid scam type' });
        }
        const report = await model.create(req.body);  // Create a new report
        res.status(201).json(report);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all reports by type
const getAllReports = async (req, res) => {
    try {
        const model = getModel(req.params.type); // Type passed as a parameter
        if (!model) {
            return res.status(400).json({ error: 'Invalid scam type' });
        }
        const reports = await model.findAll(); // Fetch all reports
        res.status(200).json(reports);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a report by ID
const getReportById = async (req, res) => {
    try {
        const model = getModel(req.params.type); // Get model based on scam type
        if (!model) {
            return res.status(400).json({ error: 'Invalid scam type' });
        }
        const report = await model.findByPk(req.params.id); // Fetch report by ID
        if (report) {
            res.status(200).json(report);
        } else {
            res.status(404).json({ error: 'Report not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a report by ID
const updateReportById = async (req, res) => {
    try {
        const model = getModel(req.params.type); // Get model based on scam type
        if (!model) {
            return res.status(400).json({ error: 'Invalid scam type' });
        }
        const [updated] = await model.update(req.body, {
            where: { scam_id: req.params.id } // Update by scam_id
        });
        if (updated) {
            const updatedReport = await model.findByPk(req.params.id); // Fetch updated report
            res.status(200).json(updatedReport);
        } else {
            res.status(404).json({ error: 'Report not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a report by ID
const deleteReportById = async (req, res) => {
    try {
        const model = getModel(req.params.type); // Get model based on scam type
        if (!model) {
            return res.status(400).json({ error: 'Invalid scam type' });
        }
        const deleted = await model.destroy({
            where: { scam_id: req.params.id } // Delete by scam_id
        });
        if (deleted) {
            res.status(204).json(); // No content to send back
        } else {
            res.status(404).json({ error: 'Report not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createReport,
    getAllReports,
    getReportById,
    updateReportById,
    deleteReportById
};
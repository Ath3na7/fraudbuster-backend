const models = require('../models/report/report'); // Adjust the path as necessary

const getModel = (type) => {
    return models[type] || null;
};

const createReport = async (req, res) => {
    try {
        const model = getModel(req.body.scam_type); // Get model based on scam_type
        if (!model) {
            return res.status(400).json({ error: 'Invalid scam type' });
        }
        const report = await model.create(req.body);  // Access model from req
        res.status(201).json(report);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllReports = async (req, res) => {
    try {
        const model = getModel(req.params.type); // Type will be passed as a parameter
        if (!model) {
            return res.status(400).json({ error: 'Invalid scam type' });
        }
        const reports = await model.findAll();
        res.status(200).json(reports);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getReportById = async (req, res) => {
    try {
        const model = getModel(req.params.type);
        if (!model) {
            return res.status(400).json({ error: 'Invalid scam type' });
        }
        const report = await model.findByPk(req.params.id);
        if (report) {
            res.status(200).json(report);
        } else {
            res.status(404).json({ error: 'Report not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateReportById = async (req, res) => {
    try {
        const model = getModel(req.params.type);
        if (!model) {
            return res.status(400).json({ error: 'Invalid scam type' });
        }
        const [updated] = await model.update(req.body, {
            where: { scam_id: req.params.id } // Update by scam_id
        });
        if (updated) {
            const updatedReport = await model.findByPk(req.params.id);
            res.status(200).json(updatedReport);
        } else {
            res.status(404).json({ error: 'Report not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteReportById = async (req, res) => {
    try {
        const model = getModel(req.params.type);
        if (!model) {
            return res.status(400).json({ error: 'Invalid scam type' });
        }
        const deleted = await model.destroy({
            where: { scam_id: req.params.id } // Delete by scam_id
        });
        if (deleted) {
            res.status(204).json();
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
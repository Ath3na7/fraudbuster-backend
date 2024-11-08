// src/middleware/validation.js
const validateReport = (req, res, next) => {
    const { khalti_number } = req.body;
    
    if (!khalti_number) {
        return res.status(400).json({
            success: false,
            message: 'Missing required fields',
            requiredFields: ['esewa_number'],
        });
    }
    
    next();
};

module.exports = { validateReport };
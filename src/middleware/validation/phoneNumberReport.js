// src/middleware/validation.js
const validateReport = (req, res, next) => {
    const { phone_number } = req.body;
    
    if (!phone_number) {
        return res.status(400).json({
            success: false,
            message: 'Missing required fields',
            requiredFields: ['phone_number'],
        });
    }
    
    next();
};

module.exports = { validateReport };
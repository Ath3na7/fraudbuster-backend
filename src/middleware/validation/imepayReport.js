// src/middleware/validation.js
const validateReport = (req, res, next) => {
    const { imepay_number } = req.body;
    
    if (!imepay_number) {
        return res.status(400).json({
            success: false,
            message: 'Missing required fields',
            requiredFields: ['imepay_number'],
        });
    }
    
    next();
};

module.exports = { validateReport };
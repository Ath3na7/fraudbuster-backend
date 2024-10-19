const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController'); // Import the upload controller

// Endpoint to handle file upload
router.post('/', uploadController.uploadFile, (req, res) => {
    res.status(200).json({ message: 'File uploaded successfully' });
});

module.exports = router;
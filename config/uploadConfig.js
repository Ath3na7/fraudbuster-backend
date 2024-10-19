const multer = require('multer');
const path = require('path');
const clamav = require('clamav.js');

// Set storage engine
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Initialize upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }, // 1MB limit
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    }
}).single('scamImage'); // 'scamImage' is the name of the input field

// Check file type
function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png/;
    const extname = path.extname(file.originalname).toLowerCase();
    const mimetype = filetypes.test(file.mimetype);

    // Check for valid file extension
    const isValidExt = filetypes.test(extname);

    // Check for double extension
    const hasDoubleExtension = extname.split('.').length > 2;

    if (mimetype && isValidExt && !hasDoubleExtension) {
        return cb(null, true);
    } else {
        cb('Error: Invalid file type or double extension detected!');
    }
}

// Scan file for malware
function scanFile(filePath, cb) {
    clamav.ping(3310, 'localhost', 1000, (err) => {
        if (err) {
            return cb('ClamAV service is not available');
        }

        clamav.createScanner(3310, 'localhost').scanFile(filePath, (err, object, malicious) => {
            if (err) {
                return cb('Error scanning file');
            }

            if (malicious) {
                return cb('Malware detected');
            }

            cb(null, true);
        });
    });
}

module.exports = (req, res, next) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: err });
        }

        if (req.file) {
            scanFile(req.file.path, (err) => {
                if (err) {
                    return res.status(400).json({ message: err });
                }

                next();
            });
        } else {
            next();
        }
    });
};
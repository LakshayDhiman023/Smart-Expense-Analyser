const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { uploadReceipt } = require('../controllers/receiptController');

router.post('/upload', upload.single('file'), uploadReceipt);

module.exports = router; 
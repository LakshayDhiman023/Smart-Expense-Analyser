const Receipt = require('../models/Receipt');

const uploadReceipt = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const receipt = new Receipt({
      filename: req.file.originalname,
      path: req.file.path,
      mimetype: req.file.mimetype,
      size: req.file.size
    });

    await receipt.save();
    res.status(200).json({
      message: 'File uploaded successfully',
      receipt: {
        id: receipt._id,
        filename: receipt.filename,
        uploadDate: receipt.uploadDate
      }
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Error uploading file' });
  }
};

module.exports = {
  uploadReceipt
}; 
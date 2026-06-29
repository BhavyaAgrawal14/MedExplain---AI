const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { analyzeReport } = require('../controllers/analyzeController');

router.post('/analyze', upload.single('report'), analyzeReport);

module.exports = router;

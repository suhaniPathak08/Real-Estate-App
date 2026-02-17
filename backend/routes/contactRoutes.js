const express = require('express');
const router = express.Router();
const { createContact } = require('../controllers/contactController');

// POST /api/contact - Save contact form data
router.post('/', createContact);

module.exports = router;

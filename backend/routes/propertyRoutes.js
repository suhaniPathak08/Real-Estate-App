const express = require('express');
const router = express.Router();
const { getProperties, createProperty } = require('../controllers/propertyController');

// GET /api/properties - Get all properties
router.get('/', getProperties);

// POST /api/properties - Create a new property
router.post('/', createProperty);

module.exports = router;
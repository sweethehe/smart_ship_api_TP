const express = require('express');
const pricingController = require('../controllers/pricingController');

const router = express.Router();

router.post('/', pricingController.getEstimatePrice);

module.exports = router;
// src/controllers/pricingController.js
const pricingService = require('../services/pricingService');

const getEstimatePrice = (req, res) => {
    const { weight, distance, type } = req.body;

    try {
        const price = pricingService.calculateQuote(weight, distance, type || 'standard');

        res.status(200).json({
            status: 'success',
            data: {
                weight,
                distance,
                type: type || 'standard',
                estimatedPrice: price
            }
        });
    } catch (error) {

        res.status(400).json({
            status: 'error',
            message: error.message
        });
    }
};

module.exports = {
    getEstimatePrice
};

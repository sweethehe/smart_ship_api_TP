const standardPricingStrategy = require('./strategies/pricing/standardPricingStrategy');
const expressPricingStrategy = require('./strategies/pricing/expressPricingStrategy');

class PricingService {
    /**
     * Calcule le prix d'une expédition en fonction du type de livraison.
     * @param {number} weight - Le poids du colis
     * @param {number} distance - La distance de livraison
     * @param {string} type - Le type de livraison ('standard' ou 'express')
     * @returns {number} Le prix calculé
     */
    calculateQuote(weight, distance, type) {
        if (!weight || !distance) {
            throw new Error('Le poids et la distance sont obligatoires pour calculer un devis.');
        }

        let strategy;

        switch (type.toLowerCase()) {
            case 'express':
                strategy = expressPricingStrategy;
                break;
            case 'standard':
            default:
                strategy = standardPricingStrategy;
                break;
        }

        return strategy.calculate(weight, distance);
    }
}

module.exports = new PricingService();

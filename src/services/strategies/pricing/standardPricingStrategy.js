const PricingStrategy = require('./PricingStrategy');

class StandardPricingStrategy extends PricingStrategy {
    /**
     * Calcule le prix d'une livraison standard.
     * Règle : 1€ par kg + 0.10€ par km.
     */
    calculate(weight, distance) {
        return (weight * 1) + (distance * 0.10);
    }
}

module.exports = new StandardPricingStrategy();

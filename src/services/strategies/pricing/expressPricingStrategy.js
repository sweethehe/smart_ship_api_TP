const PricingStrategy = require('./PricingStrategy');

class ExpressPricingStrategy extends PricingStrategy {
    /**
     * Calcule le prix d'une livraison express.
     * Règle : Prix standard * 1.5 + frais fixes de 5€.
     */
    calculate(weight, distance) {
        const basePrice = (weight * 1) + (distance * 0.10);
        return (basePrice * 1.5) + 5;
    }
}

module.exports = new ExpressPricingStrategy();

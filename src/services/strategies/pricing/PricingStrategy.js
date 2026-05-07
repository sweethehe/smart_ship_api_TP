class PricingStrategy {
    /**
     * Méthode que toutes les stratégies de tarification doivent implémenter.
     * @param {number} weight - Le poids du colis en kg
     * @param {number} distance - La distance en km
     * @returns {number} Le prix calculé
     */
    calculate(weight, distance) {
        throw new Error("La méthode calculate() doit être implémentée par la classe enfant");
    }
}

module.exports = PricingStrategy;

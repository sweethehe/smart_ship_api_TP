const request = require('supertest');
const app = require('../../src/app');

describe('Pricing Endpoint (POST /pricing)', () => {
    
    // Test 1 : Le calcul standard
    it('should return the standard price', async () => {
        const response = await request(app)
            .post('/pricing')
            .send({ weight: 10, distance: 50, type: 'standard' });
        
        expect(response.statusCode).toBe(200);
        expect(response.body.data.estimatedPrice).toBe(15);
    });

    // Test 2 : Le calcul express
    it('should return the express price', async () => {
        const response = await request(app)
            .post('/pricing')
            .send({ weight: 10, distance: 50, type: 'express' });
        
        expect(response.statusCode).toBe(200);
        expect(response.body.data.estimatedPrice).toBe(27.5);
    });

    // Test 3 : La gestion des erreurs (Cas limite / Edge case)
    it('should return the 404 status code for absence of distance', async () => {
        const response = await request(app)
            .post('/pricing')
            .send({ weight: 10 }); // distance manquante
        
        expect(response.statusCode).toBe(400);
        expect(response.body.status).toBe('error');
    });

});

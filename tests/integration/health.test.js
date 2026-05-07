const request = require('supertest');
const app = require('../../src/app');

describe('Health Check Endpoint', () => {
    
    it('should return 200 status and a success message', async () => {
        const response = await request(app).get('/health');
        
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('success');
        expect(response.body.message).toBe('Smart Ship API is running smoothly');
        
        expect(response.body).toHaveProperty('timestamp');
    });

});

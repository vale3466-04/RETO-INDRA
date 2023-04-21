const request = require('supertest');

describe('Testing API-Planet', () => {
    describe('GET /planet/:id', () => {
        test('Should respond with a 200 status code', async () => {
            const response = await request('https://oq64s6nbmb.execute-api.us-west-2.amazonaws.com').get('/planet/c140fd11-aa81-423a-86df-00c3437e565a');
            expect(response.statusCode).toBe(200);
        });
        test('Should respond with a 500 status code when not found a planet', async () => {
            const response = await request('https://oq64s6nbmb.execute-api.us-west-2.amazonaws.com').get('/planet/c140fd11-aa81-423a-86df-00c3437e5651');
            expect(response.statusCode).toBe(500);
        });
        test('Should body is a object', async () => {
            const response = await request('https://oq64s6nbmb.execute-api.us-west-2.amazonaws.com').get('/planet/c140fd11-aa81-423a-86df-00c3437e565a');
            expect(typeof response.body).toBe('object');
        });
    });
});
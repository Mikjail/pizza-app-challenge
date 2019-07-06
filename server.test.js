const app = require('./index');
const request = require('supertest');


describe('Test api calls', () => {
    test('checking a success response with < 10 totalResult', async () => {
        // you can set your own keyword
        const keyword = 'aven'; 
        
        const response = await request(app).get(`/api/search?keyword=${keyword}`);
        
        expect(response.statusCode).toBe(200);
        
        const {body} = response;
        
        expect(body.length).toBe(2);

        // Check result if totalResults < 11
        expect(body[0].totalResults < 11 ).toBeTruthy();

        expect(body[0].Search.length < 11 ).toBeTruthy();

        expect(body[1].Search).toBeFalsy();

    });
});
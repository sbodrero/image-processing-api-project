import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test endpoint response', () => {
  describe('Test /api endpoint', () => {
    it('It should return a staus 200', async (done) => {
      const response = await request.get('/api');
      expect(response.status).toBe(200);
      done();
    });
  });

  describe('gets the / endpoint', () => {
    it('Should return a 404', async (done) => {
      const response = await request.get('/');
      expect(response.status).toBe(404);
      done();
    });
  });
});

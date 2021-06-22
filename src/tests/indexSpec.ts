import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test endpoint response', () => {
  describe('gets the / endpoint', () => {
    it('Should return a status 404', async (done) => {
      const response = await request.get('/');
      expect(response.status).toBe(404);
      done();
    });
  });

  describe('Test /api endpoint', () => {
    it('It should return a status 200', async (done) => {
      const response = await request.get('/api');
      expect(response.status).toBe(200);
      done();
    });
  });

  describe('Test /api/images endpoint', () => {
    it('It should return a status 400', async (done) => {
      const response = await request.get('/api/images');
      expect(response.status).toBe(400);
      done();
    });
  });
});

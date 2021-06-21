import imageProcessing from '../../utilities/imagePocessing';
import express from 'express';

describe('Test ImageProcessing middleware', () => {
  const req = express.request;
  const res = express.response;

  req.query = { filename: 'fyord' };
  res.type('text');
  // @ts-ignore
  let next = express.NextFunction;
  it('should return a function()', async function () {
    // @ts-ignore
    const result = await imageProcessing(req, res, next);
    // @ts-ignore
    expect(result.status).toEqual('200');
  });
});

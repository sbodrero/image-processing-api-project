import express from 'express';
import imageProcessing from '../../utilities/imagePocessing';

const Images = express.Router();

Images.get(
  '/',
  imageProcessing,
  (req: express.Request, res: express.Response) => {
    return;
  }
);

export default Images;

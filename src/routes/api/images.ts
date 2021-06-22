import express from 'express';
import imageProcessing from '../../utilities/imagePocessing';

const Images = express.Router();

Images.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    let {
      query: { filename, width, height }
    } = req;

    filename = filename as unknown as string;
    width = width as unknown as string;
    height = height as unknown as string;

    if (!filename || !width || !height) {
      res.status(400).render('index', {
        errorMessage:
          'You must provide a file name, a width and a ' +
          'height to process image resizing'
      });
    } else {
      const images = await imageProcessing(
        filename,
        parseInt(width),
        parseInt(height)
      );
      res.render('index', images);
    }
  }
);

export default Images;

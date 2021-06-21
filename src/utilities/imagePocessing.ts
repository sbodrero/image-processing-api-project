import { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

const imageProcessing = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    query: { filename }
  } = req;
  let {
    query: { width, height }
  } = req;

  width = width as unknown as string;
  height = height as unknown as string;
  let resizedImagePath = '';
  let ErrorMessage = '';

  if (!filename || !width || !height) {
    ErrorMessage =
      'You must provide a file name, a width and a height to process image resizing';
  } else {
    // @ts-ignore
    const imagesPath = path.dirname(require.main.filename);
    const thumbsPath = `${imagesPath}/thumbs`;
    const fullImage = `${imagesPath}/full/${filename}.jpg`;
    const thumbImage = `${thumbsPath}/thumb_${filename}_${width}_${height}.jpg`;

    if (fs.existsSync(thumbImage)) {
      resizedImagePath = `/thumbs/thumb_${filename}_${width}_${height}.jpg`;
    } else {
      if (fs.existsSync(fullImage)) {
        try {
          await sharp(fullImage)
            .resize(parseInt(width), parseInt(height))
            .toFile(thumbImage)
            .then(() => {
              resizedImagePath = `/thumbs/thumb_${filename}_${width}_${height}.jpg`;
            })
            .catch((error: string) => (ErrorMessage = error));
        } catch (err) {
          ErrorMessage = err.toString();
        }
      } else {
        ErrorMessage = "File doesn't exists";
      }
    }
  }
  res.render('index', {
    resizedImagePath,
    ErrorMessage
  });
  next();
};

export default imageProcessing;

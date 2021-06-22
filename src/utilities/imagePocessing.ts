import fs from 'fs';
import sharp from 'sharp';
import { ROOT_PATH, THUMBS_PATH } from './constants';

interface ImageResponse {
  resizedImagePath?: string;
  errorMessage?: string;
}

const imageProcessing = async (
  filename: string,
  width: number,
  height: number
): Promise<ImageResponse> => {
  let resizedImagePath;
  let errorMessage;

  const fullImage = `${ROOT_PATH}/full/${filename}.jpg`;
  const thumbImage = `${THUMBS_PATH}/thumb_${filename}_${width}_${height}.jpg`;

  if (fs.existsSync(thumbImage)) {
    resizedImagePath = `/thumbs/thumb_${filename}_${width}_${height}.jpg`;
  } else {
    if (fs.existsSync(fullImage)) {
      try {
        console.log('Processing image');
        await sharp(fullImage)
          .resize(width, height)
          .toFile(thumbImage)
          .then(() => {
            resizedImagePath = `/thumbs/thumb_${filename}_${width}_${height}.jpg`;
          })
          .catch((error: string) => (errorMessage = error));
      } catch (err) {
        errorMessage = err.toString();
      }
    } else {
      errorMessage = "File doesn't exists";
    }
  }
  return {
    resizedImagePath,
    errorMessage
  };
};

export default imageProcessing;

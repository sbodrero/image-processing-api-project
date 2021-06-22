import fs from 'fs';
import imageProcessing from '../../utilities/imagePocessing';
import { ROOT_PATH } from '../../utilities/constants';

describe('Test ImageProcessing utility', () => {
  let file: string;
  let filename: string;
  beforeAll(() => {
    filename = 'palmtunnel';
    file = `${ROOT_PATH}/full/${filename}.jpg`;
  });
  it('should return true if image exists', function () {
    expect(fs.existsSync(file)).toBeTruthy();
  });
  it('Should return a processed image', async () => {
    const width = 200;
    const height = 300;
    const processedImage = await imageProcessing(filename, width, height);
    expect(processedImage.resizedImagePath).toEqual(
      `/thumbs/thumb_${filename}_${width}_${height}.jpg`
    );
    expect(processedImage.resizedImagePath).toBeDefined();
  });
  it('should return a non exiting file message', async () => {
    filename = 'palmtunel';
    const width = 200;
    const height = 300;
    const processedImage = await imageProcessing(filename, width, height);
    expect(processedImage.resizedImagePath).toBeUndefined();
    expect(processedImage.errorMessage).toEqual("File doesn't exists");
  });
});

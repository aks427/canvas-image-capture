import 'regenerator-runtime/runtime';
import { loadFileAsDataUrl } from './FileUtility';

export const loadImage = file => new Promise(async (callback) => {
  const image = new Image();
  image.onload = () => {
    callback(image);
  };
  let imageData;
  if (typeof file === 'string') {
    imageData = file;
  } else {
    imageData = await loadFileAsDataUrl(file);
  }
  image.src = imageData;
});

const test = async (file) => {
  const dataUrl = await loadFileAsDataUrl(file);
  console.log(dataUrl);
};

const main = {
  loadImage,
  loadFileAsDataUrl,
  test
};

export default main;

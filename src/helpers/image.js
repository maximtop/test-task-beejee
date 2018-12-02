/* eslint-disable import/prefer-default-export */
import Pica from 'pica';
import path from 'path-browserify';

const MAX_WIDTH = 320;
const MAX_HEIGHT = 240;

const pica = new Pica();

const blobToFile = (blob, name, ext) => new File([blob], `${name}.${ext}`);

export const resizeImage = file => new Promise((resolve, reject) => {
  const targetCanvas = document.createElement('canvas');
  targetCanvas.width = MAX_WIDTH;
  targetCanvas.height = MAX_HEIGHT;

  const { name } = path.parse(file.name);

  const img = new Image();
  img.onload = () => {
    pica.resize(img, targetCanvas)
      .then(result => pica.toBlob(result, 'image/jpeg', 0.90))
      .then(blob => resolve(blobToFile(blob, name, 'jpg')))
      .catch(error => reject(error));
  };
  img.src = URL.createObjectURL(file);
});

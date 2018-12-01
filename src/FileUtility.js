/* eslint-disable import/prefer-default-export */
export const loadFileAsDataUrl = file => new Promise((callback) => {
  const fileReader = new FileReader();
  fileReader.onload = () => {
    callback(fileReader.result);
  };
  fileReader.readAsDataURL(file);
});

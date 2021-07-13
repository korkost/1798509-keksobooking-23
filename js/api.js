import { adFormReset } from './form.js';

const MAIN_DIRECTORY = 'https://23.javascript.pages.academy/keksobooking';
const api = {
  send: '',
  get: '/data',
};

const getData = (renderPopups, showErrorMessage) => {
  fetch(MAIN_DIRECTORY + api.get)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Похожие объявления не загружены');
      } else {
        return response;
      }
    })
    .then((response) => response.json())
    .then(renderPopups)
    .catch(showErrorMessage);
};

const sendData = (formData, success, error) => {
  fetch(
    MAIN_DIRECTORY + api.send,
    {
      method: 'POST',
      credentials: 'same-origin',
      body: formData,
    },
  ).then((response) => {
    if (response.ok) {
      adFormReset();
      success();
    } else {
      error();
    }
  }).catch(error);
};

export { getData, sendData };

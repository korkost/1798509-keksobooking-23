const MAIN_DIRECTORY = 'https://23.javascript.pages.academy/keksobooking';
const api = {
  send: '',
  get: '/data',
};

const postData = (onSuccess, onFailure, body) => {
  fetch(
    MAIN_DIRECTORY + api.send,
    {
      method: 'POST',
      'Content-Type': 'multipart/form-data',
      body,
    },
  )
    .then((res) => {
      if (res.ok) {
        onSuccess();
      } else {
        onFailure();
      }
    })
    .catch(onFailure);
};

const fetchDataOffers = async (onSuccess, onFailure) => {
  fetch(
    MAIN_DIRECTORY + api.get,
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        onFailure();
      }
    })
    .then(onSuccess)
    .catch(onFailure);
};

export { fetchDataOffers, postData };

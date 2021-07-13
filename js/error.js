import { isEscPressed } from './convert.js';

const CAPTURE = {
  'once': true,
};

const destroyElement = (element) => (evt) => {
  if (element.parentNode && (isEscPressed(evt.key) || evt.type === 'click')) {
    element.parentNode.removeChild(element);
  }
};

const showSuccessMessage = () => {
  const success = document.querySelector('#success')
    .content
    .querySelector('.success')
    .cloneNode(true);

  document.body.appendChild(success);

  success.addEventListener('click', destroyElement(success), CAPTURE);
  document.addEventListener('keydown', destroyElement(success), CAPTURE);
};

const showErrorMessage = () => {
  const error = document.querySelector('#error')
    .content
    .querySelector('.error')
    .cloneNode(true);

  const errorButton = error.querySelector('.error__button');
  document.body.appendChild(error);

  error.addEventListener('click', destroyElement(error), CAPTURE);
  document.addEventListener('keydown', destroyElement(error), CAPTURE);
  errorButton.addEventListener('click', destroyElement(error), CAPTURE);
};

export {
  showSuccessMessage,
  showErrorMessage
};



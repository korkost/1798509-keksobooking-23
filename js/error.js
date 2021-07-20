import { isEscEvent, isOutsideEvent } from './convert.js';

const openAlert = (type, message) => {
  const alertTemplate = document.querySelector(`#${type}`).content.querySelector(`.${type}`);
  const alert = alertTemplate.cloneNode(true);

  if (type === 'error') {
    alert.querySelector('.error__message').textContent = message;
  }

  document.body.append(alert);

  const onAlertErorrCloce = (evt) => {
    if (isEscEvent(evt)) {
      alert.remove();
    }

    if (isOutsideEvent(evt)) {
      alert.remove();
    }

    window.removeEventListener('click', onAlertErorrCloce);
    window.removeEventListener('keydown', onAlertErorrCloce);
  };

  window.addEventListener('click', onAlertErorrCloce);
  window.addEventListener('keydown', onAlertErorrCloce);
};

export { openAlert };

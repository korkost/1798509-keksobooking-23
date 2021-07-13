const ERROR_MESSAGE_SHOW_TIME = 3000;

function getRandomIntegerRange(min, max) {
  if (max > min && max >= 0 && min >= 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

const getRandomCoordinates = (min, max, decimal) => {
  if (min < 0) {
    return undefined;
  }
  if (min >= max) {
    const newMax = min;
    min = max;
    max = newMax;
  }
  const resultCords = (Math.random() * (max - min) + min).toFixed(decimal);
  return parseFloat(resultCords);
};

const getRandomArrayElement = (elements) => (elements[getRandomIntegerRange(0, elements.length - 1)]);

const getRandomArray = (array) => array.filter(() => getRandomIntegerRange(0, 1));

const maxLengthCheck = (input) => {
  if (input.value.length > input.maxLength) {
    input.value = input.value(0, input.maxLength);
  }
};
const showServerErrorMessage = (error) => {
  const errorElement = document.body.querySelector('.server-error');
  const errorMessage = errorElement.querySelector('.server-error__message');
  errorMessage.textContent = `Ошибка: ${error.message}`;
  errorElement.classList.remove('hidden');
  setTimeout(() => errorElement.classList.add('hidden'), ERROR_MESSAGE_SHOW_TIME);
};

const isEscPressed = (evt) => evt.key === 'Escape';

const removeElementItself = (element) => element.parentNode.removeChild(element);


export {
  isEscPressed,
  removeElementItself,
  showServerErrorMessage,
  maxLengthCheck,
  getRandomArray,
  getRandomArrayElement,
  getRandomCoordinates,
  getRandomIntegerRange
};

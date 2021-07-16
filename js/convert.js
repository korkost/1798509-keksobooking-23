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


function debounce(callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}

const setFilePreview = (fileInput, imgElement, typeOptions) => {
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    const fileName = file.name.toLowerCase();

    const isFormatValid = typeOptions.some((item) => fileName.endsWith(item));

    if (isFormatValid) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        imgElement.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
};

export {
  isEscPressed,
  removeElementItself,
  showServerErrorMessage,
  maxLengthCheck,
  getRandomArray,
  getRandomArrayElement,
  getRandomCoordinates,
  getRandomIntegerRange,
  debounce,
  setFilePreview
};

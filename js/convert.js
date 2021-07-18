const getRandomNumber = (min, max) => {
  const result = Math.floor(min + Math.random() * (max + 1 - min));
  return Math.abs(result);
};

const getRandomPositiveFloat = (min, max, float = 1) => {
  const result = Math.abs(Math.random() * (max - min) + min);
  return result.toFixed(float);
};

const getRandomArrayElement = (arr) => arr[getRandomNumber(0, arr.length - 1)];

const shuffleArray = (arr) => {
  const copyArray = arr.slice();
  for (let min = copyArray.length - 1; min > 0; min--) {
    const max = Math.floor(Math.random() * (min + 1));
    [copyArray[min], copyArray[max]] = [copyArray[max], copyArray[min]];
  }
  return copyArray;
};

const getRandomArray = (arr) => {
  const newArray = shuffleArray(arr);
  return newArray.slice(0, getRandomNumber(1, newArray.length));
};

const hideBlock = (block) => block.classList.add('hidden');

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const isOutsideEvent = (evt) => !evt.target.matches('html');

const debounce = (cb, delay) => {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb.apply(this, args);
    }, delay);
  };
};


const maxLengthCheck = (input) => {
  if (input.value.length > input.maxLength) {
    input.value = input.value(0, input.maxLength);
  }
};

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
  getRandomPositiveFloat,
  getRandomArrayElement,
  shuffleArray,
  getRandomArray,
  hideBlock,
  isEscEvent,
  isOutsideEvent,
  debounce,
  setFilePreview,
  maxLengthCheck
};

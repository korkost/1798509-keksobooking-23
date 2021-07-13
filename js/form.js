import { maxLengthCheck } from './convert.js';
import { showErrorMessage, showSuccessMessage } from './error.js';
import { sendData } from './api.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const TypeCategoryPriceValue = {
  BUNGALOW: 0,
  FLAT: 1000,
  HOTEL: 3000,
  HOUSE: 5000,
  PALACE: 10000,
};
const ROOM_CAPACITY_VALUES = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};
const adForm = document.querySelector('.ad-form');
const filterForm = document.querySelector('.map__filters');
const adFormElements = [...adForm.children];
const filterFormElements = Array.from(filterForm.children);

const titleInput = adForm.querySelector('#title');
const houseTypeSelect = adForm.querySelector('#type');
const priceInput = adForm.querySelector('#price');
const addressInput = adForm.querySelector('#address');
const timeInSelect = adForm.querySelector('#timein');
const timeOutSelect = adForm.querySelector('#timeout');
const roomNumberSelect = adForm.querySelector('#room_number');
const capacitySelect = adForm.querySelector('#capacity');

// Заголовок объявления

const checkTitleValid = () => {
  const valueLength = titleInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Осталось еще ${MIN_TITLE_LENGTH - valueLength} символов`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Превышен лимит символов на ${valueLength - MAX_TITLE_LENGTH}`);
  } else {
    titleInput.setCustomValidity('');
  }
};

// Цена за ночь

const validatePriceInput = () => {
  maxLengthCheck(priceInput);
};

const syncPriceWithType = (evt) => {
  const target = evt.target;

  priceInput.min = TypeCategoryPriceValue[target.value.toUpperCase()];
  priceInput.placeholder = TypeCategoryPriceValue[target.value.toUpperCase()];
};

// Адрес

const сompleteAddressInput = (coords) => {
  if (coords) {
    addressInput.value = coords;
  }
};

// Время заезда и Время выезда

const changeTimeInInput = (evt) => {
  const target = evt.target;

  timeOutSelect.value = target.value;
};

const changeTimeOutInput = (evt) => {
  const target = evt.target;

  timeInSelect.value = target.value;
};

// Количество мест/комнат

const changeCapacityRooms = (evt) => {
  const target = evt.target;
  const capacitySelectItems = capacitySelect.querySelectorAll('option');

  capacitySelectItems.forEach((item) => item.disabled = true);
  ROOM_CAPACITY_VALUES[target.value].forEach((item) => {
    capacitySelect.querySelector(`option[value="${item}"]`).disabled = false;
    capacitySelect.value = item;
  });
};
adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  sendData(
    () => showSuccessMessage(),
    () => showErrorMessage('Не удалось отправить форму. Попробуйте ещё раз'),
    new FormData(adForm),
  );
});

// Управление состоянием формы

const addFormEventListeners = () => {
  titleInput.addEventListener('input', checkTitleValid);
  priceInput.addEventListener('input', validatePriceInput);
  houseTypeSelect.addEventListener('change', syncPriceWithType);
  timeInSelect.addEventListener('change', changeTimeInInput);
  timeOutSelect.addEventListener('change', changeTimeOutInput);
  roomNumberSelect.addEventListener('change', changeCapacityRooms);
};

const removeFormEventListeners = () => {
  titleInput.removeEventListener('input', checkTitleValid);
  priceInput.removeEventListener('input', validatePriceInput);
  houseTypeSelect.removeEventListener('change', syncPriceWithType);
  timeInSelect.removeEventListener('change', changeTimeInInput);
  timeOutSelect.removeEventListener('change', changeTimeOutInput);
  roomNumberSelect.removeEventListener('change', changeCapacityRooms);
};

const adFormReset = () => {
  adForm.reset();
};

const disableForm = () => {
  adForm.classList.add('ad-form--disable');
  adFormElements.forEach((element) => element.disabled = true);

  filterForm.classList.add('map__filters--disable');
  filterFormElements.forEach((element) => element.disabled = true);

  removeFormEventListeners();
  сompleteAddressInput();
};

const activateForm = () => {
  filterForm.classList.remove('ad-form--disable');
  filterFormElements.forEach((element) => element.disabled = false);

  filterForm.classList.remove('ad-form--disable');
  filterFormElements.forEach((element) => element.disabled = false);

  addFormEventListeners();
  сompleteAddressInput();
};

export {
  adFormReset,
  activateForm,
  disableForm,
  validatePriceInput,
  addressInput
};

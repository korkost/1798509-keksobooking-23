import { debounce, maxLengthCheck } from './convert.js';
import { showErrorMessage, showSuccessMessage } from './error.js';
import { sendData } from './api.js';
import { clearFilter } from '../map/filter.js';
import { resetMap } from '../map/map.js';
import { resetFileInputs } from './preview';

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
const adFormElements = [...adForm.children];

const titleInput = adForm.querySelector('#title');
const houseTypeSelect = adForm.querySelector('#type');
const priceInput = adForm.querySelector('#price');
const addressInput = adForm.querySelector('#address');
const timeInSelect = adForm.querySelector('#timein');
const timeOutSelect = adForm.querySelector('#timeout');
const roomNumberSelect = adForm.querySelector('#room_number');
const capacitySelect = adForm.querySelector('#capacity');

const formSubmitButton = adForm.querySelector('.ad-form__submit');
const formResetButton = adForm.querySelector('.ad-form__reset');
const validationMessages = document.querySelectorAll('.validation-message');

const resetValidationMessages = () => {
  validationMessages.forEach((message) => {
    message.textContent = '';
  });
};

// Заголовок объявления

const onTitleInputValid = () => {
  const valueLength = titleInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Осталось еще ${MIN_TITLE_LENGTH - valueLength} символов`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Превышен лимит символов на ${valueLength - MAX_TITLE_LENGTH}`);
  } else {
    titleInput.setCustomValidity('');
  }
};

const onPriceInputValid = () => {
  maxLengthCheck(priceInput);
};

const onHouseTypeSelectSetPrice = (evt) => {
  const target = evt.target;

  priceInput.min = TypeCategoryPriceValue[target.value.toUpperCase()];
  priceInput.placeholder = TypeCategoryPriceValue[target.value.toUpperCase()];
};

const сompleteAddressInput = (coords) => {
  if (coords) {
    addressInput.value = coords;
  }
};

const onTimeInSelectChange = (evt) => {
  const target = evt.target;

  timeOutSelect.value = target.value;
};

const onTimeOutSelectChange = (evt) => {
  const target = evt.target;

  timeInSelect.value = target.value;
};

const onNumberRoomsSelectChange = (evt) => {
  const target = evt.target;
  const capacitySelectItems = capacitySelect.querySelectorAll('option');

  capacitySelectItems.forEach((item) => {
    item.disabled = true;
  });

  ROOM_CAPACITY_VALUES[target.value].forEach((item) => {
    capacitySelect.querySelector(`option[value="${item}"]`).disabled = false;
    capacitySelect.value = item;
  });
};

const onResetButtonClick = () => {
  adForm.reset();
  resetMap();
  onHouseTypeSelectSetPrice();
  resetValidationMessages();
  clearFilter();
  resetFileInputs();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();

  const isTitleValid = onTitleInputValid();
  const isPriceValid = onPriceInputValid();
  const isRoomAndCapacityValid = onNumberRoomsSelectChange();
  const isAddressValid = сompleteAddressInput();

  if (
    isTitleValid &&
    isPriceValid &&
    isRoomAndCapacityValid &&
    isAddressValid
  ) {
    sendData(new FormData(adForm), showSuccessMessage, showErrorMessage);
  }
};

const addFormEventListeners = () => {
  titleInput.addEventListener('input', debounce(onTitleInputValid));
  priceInput.addEventListener('input', debounce(onPriceInputValid));
  houseTypeSelect.addEventListener('change', onHouseTypeSelectSetPrice);
  timeInSelect.addEventListener('change', onTimeInSelectChange);
  timeOutSelect.addEventListener('change', onTimeOutSelectChange);
  roomNumberSelect.addEventListener('change', onNumberRoomsSelectChange);
  formResetButton.addEventListener('click', onResetButtonClick);
  formSubmitButton.addEventListener('click', onFormSubmit);
};

const removeFormEventListeners = () => {
  titleInput.removeEventListener('input', onTitleInputValid);
  priceInput.removeEventListener('input', onPriceInputValid);
  houseTypeSelect.removeEventListener('change', onHouseTypeSelectSetPrice);
  timeInSelect.removeEventListener('change', onTimeInSelectChange);
  timeOutSelect.removeEventListener('change', onTimeOutSelectChange);
  roomNumberSelect.removeEventListener('change', onNumberRoomsSelectChange);
  formResetButton.removeEventListener('click', onResetButtonClick);
  formSubmitButton.removeEventListener('click', onFormSubmit);
};

const disableForm = () => {
  adForm.classList.add('ad-form--disable');

  adFormElements.forEach((element) => {
    element.disabled = true;
  });

  removeFormEventListeners();
  сompleteAddressInput();
};

const activateForm = () => {
  adForm.classList.remove('ad-form--disable');

  adFormElements.forEach((element) => {
    element.disabled = false;
  });

  addFormEventListeners();
  сompleteAddressInput();
};

export {
  onFormSubmit,
  activateForm,
  disableForm,
  onPriceInputValid,
  addressInput
};

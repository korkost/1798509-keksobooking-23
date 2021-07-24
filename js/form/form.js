import { openAlert } from '../error.js';
import { postData } from '../api.js';
//import { clearFileInputs } from './preview.js';
import { resetFilterForm } from '../map/filter.js';
import { loadMarkersOnMap, returnMarkerOnDefault } from '../map/map.js';
import { titleInput, onTitleInputValid } from './validate-title.js';
import { roomNumberSelect, onNumberRoomsSelectChange } from './room-capacity.js';
import { priceInput, onPriceInputValid, houseTypeSelect, onHouseTypeSelectSetPrice } from './validate-price-type.js';
import { сompleteAddressInput } from './validate-address.js';
import { timeInSelect, timeOutSelect, onTimeInSelectChange, onTimeOutSelectChange } from './timein-timeout.js';

const adForm = document.querySelector('.ad-form');
const adFormElements = [...adForm.children];

const formResetButton = adForm.querySelector('.ad-form__reset');

const onResetForms = (evt) => {
  evt.preventDefault();

  adForm.reset();
  resetFilterForm();
  //clearFileInputs();

  returnMarkerOnDefault();
  loadMarkersOnMap();
};

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  postData(
    () => {
      onResetForms();
      openAlert('error', 'Ошибка размещения объявления');
    },
    () => openAlert('success'),
    new FormData(adForm),
  );
});

const addFormEventListeners = () => {
  titleInput.addEventListener('input', onTitleInputValid);
  priceInput.addEventListener('input', onPriceInputValid);
  houseTypeSelect.addEventListener('input', onHouseTypeSelectSetPrice);
  timeInSelect.addEventListener('change', onTimeInSelectChange);
  timeOutSelect.addEventListener('change', onTimeOutSelectChange);
  roomNumberSelect.addEventListener('change', onNumberRoomsSelectChange);
  formResetButton.addEventListener('click', onResetForms);
};

const removeFormEventListeners = () => {
  titleInput.removeEventListener('input', onTitleInputValid);
  priceInput.removeEventListener('input', onPriceInputValid);
  houseTypeSelect.removeEventListener('input', onHouseTypeSelectSetPrice);
  timeInSelect.removeEventListener('change', onTimeInSelectChange);
  timeOutSelect.removeEventListener('change', onTimeOutSelectChange);
  roomNumberSelect.removeEventListener('change', onNumberRoomsSelectChange);
  formResetButton.removeEventListener('click', onResetForms);
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

export { adForm, activateForm, disableForm, onResetForms };

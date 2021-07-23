import { checkMaxLength } from '../convert.js';

const houseTypeSelect = document.querySelector('#type');
const priceInput = document.querySelector('#price');

const typeCategoryPriceValue = {
  BUNGALOW: 0,
  FLAT: 1000,
  HOTEL: 3000,
  HOUSE: 5000,
  PALACE: 10000,
};

const onPriceInputValid = () => {
  checkMaxLength(priceInput);
};

const onHouseTypeSelectSetPrice = (evt) => {
  const target = evt.target;

  priceInput.min = typeCategoryPriceValue[target.value.toUpperCase()];
  priceInput.placeholder = typeCategoryPriceValue[target.value.toUpperCase()];
};

export {
  priceInput,
  houseTypeSelect,
  onPriceInputValid,
  onHouseTypeSelectSetPrice
};


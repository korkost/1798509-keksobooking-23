import { maxLengthCheck } from '../convert.js';

const houseTypeSelect = document.querySelector('#type');
const priceInput = document.querySelector('#price');

const TypeCategoryPriceValue = {
  BUNGALOW: 0,
  FLAT: 1000,
  HOTEL: 3000,
  HOUSE: 5000,
  PALACE: 10000,
};

const onPriceInputValid = () => {
  maxLengthCheck(priceInput);
};

const onHouseTypeSelectSetPrice = (evt) => {
  const target = evt.target;

  priceInput.min = TypeCategoryPriceValue[target.value.toUpperCase()];
  priceInput.placeholder = TypeCategoryPriceValue[target.value.toUpperCase()];
};

export {
  priceInput,
  houseTypeSelect,
  onPriceInputValid,
  onHouseTypeSelectSetPrice
};


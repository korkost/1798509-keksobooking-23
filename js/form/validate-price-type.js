const houseTypeSelect = document.querySelector('#type');
const priceInput = document.querySelector('#price');
const MAX_PRICE = 1000000;
const HOUSES_TYPES = [
  {
    type: 'bungalow',
    price: 0,
  },
  {
    type: 'flat',
    price: 1000,
  },
  {
    type: 'hotel',
    price: 3000,
  },
  {
    type: 'house',
    price: 5000,
  },
  {
    type: 'palace',
    price: 10000,
  },
];

const onPriceInputValid = function () {
  if (priceInput.value > MAX_PRICE) {
    priceInput.setCustomValidity(`Цена за ночь не должна превышать ${MAX_PRICE}`);
  } else {
    priceInput.setCustomValidity('');
  }

  priceInput.reportValidity();
};

const roomValueValidate = function (targetElement) {
  for (let index = 0; index < HOUSES_TYPES.length; index++) {
    if (HOUSES_TYPES[index].type === targetElement.value) {
      priceInput.min = HOUSES_TYPES[index].price;
      priceInput.placeholder = HOUSES_TYPES[index].price;
    }
  }
};

roomValueValidate(priceInput);

const clearFileInputs = () => {
  priceInput.placeholder = HOUSES_TYPES[0].price;
};

const onHouseTypeSelectSetPrice = function (evt) {
  roomValueValidate(evt.target);
};

export {
  clearFileInputs,
  priceInput,
  houseTypeSelect,
  onPriceInputValid,
  onHouseTypeSelectSetPrice
};


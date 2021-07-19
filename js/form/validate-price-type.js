const houseTypeSelect = document.querySelector('#type');
const priceInput = document.querySelector('#price');

const typesDictionary = {
  bungalow: {
    typeName: 'Бунгало',
    price: 0,
  },
  flat: {
    typeName: 'Квартира',
    price: 1000,
  },
  hotel: {
    typeName: 'Отель',
    price: 3000,
  },
  house: {
    typeName: 'Дом',
    price: 5000,
  },
  palace: {
    typeName: 'Дворец',
    price: 10000,
  },
};

const setMinPrice = () => {
  const minPriceValue = typesDictionary[houseTypeSelect.value].price;
  priceInput.setAttribute('placeholder', minPriceValue);
  priceInput.setAttribute('min', minPriceValue);
};

const onTypeElementChange = () => {
  setMinPrice();
};

export {
  priceInput,
  houseTypeSelect,
  onTypeElementChange
};


import { setCoordsOnInput } from './map.js';

const filterForm = document.querySelector('.map__filters');
const filterFormElements = [...filterForm.children];

const inputHousingType = filterForm.querySelector('#housing-type');
const inputPrice = filterForm.querySelector('#housing-price');
const inputRooms = filterForm.querySelector('#housing-rooms');
const inputGuests = filterForm.querySelector('#housing-guests');
const inputFeatures = [...filterForm.querySelectorAll('[type="checkbox"]')];

const PRICE_LOW = 10000;
const PRICE_MIDDLE = 10000;
const PRICE_HIGH = 50000;

const HOUSING_TYPE_VALUES = {
  'any': (value) => value,
  'bungalow': (value) => value === 'bungalow',
  'hotel': (value) => value === 'hotel',
  'house': (value) => value === 'house',
  'flat': (value) => value === 'flat',
  'palace': (value) => value === 'palace',
};

const PRICE_VALUES = {
  'any': () => true,
  'middle': (value) => value >= PRICE_MIDDLE && value < PRICE_HIGH,
  'low': (value) => value < PRICE_LOW && value >= 0,
  'high': (value) => value >= PRICE_HIGH,
};

const ROOMS_VALUES = {
  'any': (value) => value,
  '1': (value) => value === 1,
  '2': (value) => value === 2,
  '3': (value) => value === 3,
};

const GUESTS_VALUES = {
  'any': (value) => value,
  '0': (value) => value === 0,
  '1': (value) => value === 1,
  '2': (value) => value === 2,
};

const filterByHousingType = (sortItem) => {
  const type = sortItem.offer.type;

  return HOUSING_TYPE_VALUES[inputHousingType.value](type);
};

const filterByPrice = (sortItem) => {
  const price = sortItem.offer.price;

  return PRICE_VALUES[inputPrice.value](price);
};

const filterByRooms = (sortItem) => {
  const rooms = sortItem.offer.rooms;

  return ROOMS_VALUES[inputRooms.value](rooms);
};

const filterByGuests = (sortItem) => {
  const guests = sortItem.offer.guests;

  return GUESTS_VALUES[inputGuests.value](guests);
};

const filterByFeatures = (sortItem) => {
  const features = sortItem.offer.features;
  const selectedFeatures = inputFeatures.filter((input) => input.checked);

  return selectedFeatures.every((feature) => features && features.includes(feature.value));
};

const getFilterData = (offers) => offers.filter((item) =>
  filterByHousingType(item) &&
  filterByPrice(item) &&
  filterByRooms(item) &&
  filterByGuests(item) &&
  filterByFeatures(item),
);

const resetFilterForm = () => {
  filterForm.reset();
  setCoordsOnInput();
};

const disableFilterForm = () => {
  filterForm.classList.add('map__filters--disable');

  filterFormElements.forEach((element) => {
    element.disabled = true;
  });
};

const activateFilterForm = () => {
  filterForm.classList.remove('map__filters--disable');

  filterFormElements.forEach((element) => {
    element.disabled = false;
  });
};

export {
  activateFilterForm,
  disableFilterForm,
  resetFilterForm,
  getFilterData
};

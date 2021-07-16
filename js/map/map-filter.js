import { drawPopups } from './map.js';
import { adverts } from '../api.js';

const PRICE_LOW = 10000;
const PRICE_MIDDLE = 10000;
const PRICE_HIGH = 50000;

const filterForm = document.querySelector('.map__filters');
const inputHousingType = filterForm.querySelector('#housing-type');
const inputPrice = filterForm.querySelector('#housing-price');
const inputRooms = filterForm.querySelector('#housing-rooms');
const inputGuests = filterForm.querySelector('#housing-guests');
const inputFeatures = [...filterForm.querySelectorAll('[type="checkbox"]')];
const filterFormElements = [...filterForm.children];

const filterSelectedFeatures = (inputs) => inputs.filter((input) => input.checked);

const disableFilterForm = () => {
  filterForm.classList.add('map__filters--disable');
  filterFormElements.forEach((element) => element.disabled = true);
};

const activateFilterForm = () => {
  filterForm.classList.remove('map__filters--disable');
  filterFormElements.forEach((element) => element.disabled = false);
};

const PRICE_VALUES = {
  'any': (value) => value,
  'middle': (value) => value >= PRICE_MIDDLE && value <= PRICE_HIGH,
  'low': (value) => value <= PRICE_LOW,
  'high': (value) => value >= PRICE_HIGH,
};


const HOUSING_TYPE_VALUES = {
  'any': (value) => value,
  'bungalow': (value) => value === 'bungalow',
  'hotel': (value) => value === 'hotel',
  'house': (value) => value === 'house',
  'flat': (value) => value === 'flat',
  'palace': (value) => value === 'palace',
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

const filterHousingType = (sortItem) => {
  const type = sortItem.offer.type;

  return HOUSING_TYPE_VALUES[inputHousingType.value](type);
};

const filterPrice = (sortItem) => {
  const price = sortItem.offer.price;

  return PRICE_VALUES[inputPrice.value](price);
};

const filterRooms = (sortItem) => {
  const rooms = sortItem.offer.rooms;

  return ROOMS_VALUES[inputRooms.value](rooms);
};

const filterGuests = (sortItem) => {
  const guests = sortItem.offer.guests;

  return GUESTS_VALUES[inputGuests.value](guests);
};

const filterFeatures = (sortItem) => {
  const features = sortItem.offer.features;
  const selectedFeatures = inputFeatures.filter((input) => input.checked);

  return selectedFeatures.every((feature) => features && features.includes(feature.value));
};

const doFilter = (data) => {
  const selectedFeatures = filterSelectedFeatures();
  const selectedType = inputHousingType.value;
  const selectedPrice = inputPrice.value;
  const selectedRooms = inputRooms.value;
  const selectedGuests = inputGuests.value;

  return data
    .filter((advert) => {
      const offer = advert.offer;
      try {
        filterHousingType(offer, selectedType);
        filterPrice(offer, selectedPrice);
        filterRooms(offer, selectedRooms);
        filterGuests(offer, selectedGuests);
        filterFeatures(offer, selectedFeatures);
      } catch (err) {
        return false;
      }

      return true;
    });
};

const clearFilter = () => {
  filterForm.reset();
  drawPopups(adverts);
};

export {
  disableFilterForm,
  activateFilterForm,
  doFilter,
  clearFilter
};

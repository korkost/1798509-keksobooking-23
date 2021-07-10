import { getRandomIntegerRange, getRandomArrayElement, getRandomCoordinates, getRandomArray } from './convert.js';

const NUMBERS_OF_OFFERS = 10;
const OFFER_TITLE = [
  'Большая квартира',
  'Теплое шале',
  'Уютная студия',
  'С высоты птичего полета',
];
const AvatarNumbers = {
  MIN: 1,
  MAX: 10,
};

const OFFER_TYPE = ['palace', 'flat', 'house', 'bungalo', 'hotel'];
const TIME_INTERVAL = ['12:00', '13:00', '14:00'];
const OFFER_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const OFFER_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const DESCRIPTION = [
  'Шале',
  'Аппартаменты',
  'Студия',
  'Пентхаус',
];
const PriceRange = {
  MIN: 1000,
  MAX: 100000,
};
const CountRooms = {
  MIN: 1,
  MAX: 10,
};

const CountGuest = {
  MIN: 1,
  MAX: 20,
};
const LocationLat = {
  MIN: 35.65000,
  MAX: 35.70000,
};
const LocationLng = {
  MIN: 139.70000,
  MAX: 139.80000,
};
const DECIMAL = 5;

const getAuthorData = () => ({
  avatar: `img/avatars/user0${getRandomIntegerRange(AvatarNumbers.MIN, AvatarNumbers.MAX)}.png`,
});

const createAd = () => ({
  title: getRandomArrayElement(OFFER_TITLE),
  address: `${getRandomCoordinates(LocationLat.MIN, LocationLat.MAX, DECIMAL)}, ${getRandomCoordinates(LocationLng.MIN, LocationLng.MAX, DECIMAL)}`,
  price: getRandomIntegerRange(PriceRange.MIN, PriceRange.MAX),
  type: getRandomArrayElement(OFFER_TYPE),
  rooms: getRandomIntegerRange(CountRooms.MIN, CountRooms.MAX),
  guests: getRandomIntegerRange(CountGuest.MIN, CountGuest.MAX),
  checkin: getRandomArrayElement(TIME_INTERVAL),
  checkout: getRandomArrayElement(TIME_INTERVAL),
  features: getRandomArray(OFFER_FEATURES),
  description: getRandomArrayElement(DESCRIPTION),
  photos: getRandomArray(OFFER_PHOTOS),
});

const getLocationData = () => ({
  lat: getRandomCoordinates(LocationLat.MIN, LocationLat.MAX, DECIMAL),
  lng: getRandomCoordinates(LocationLng.MIN, LocationLng.MAX, DECIMAL),
});


const getOfferObj = () => ({
  author: getAuthorData(),
  offer: createAd(),
  location: getLocationData(),
});

const generateOffersArray = () => new Array(NUMBERS_OF_OFFERS).fill(null).map(getOfferObj);

export { NUMBERS_OF_OFFERS, DECIMAL, generateOffersArray, getLocationData, createAd };

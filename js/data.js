import { getRandomIntegerRange, getRandomArrayElement } from './convert';
// Данные для объекта
const OFFER_TITLE = [
  'Большая квартира',
];
const avatarNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const OFFER_TYPE = ['palace', 'flat', 'house', 'bungalo', 'hotel'];
const TIME_INTERVAL = ['12:00', '13:00', '14:00'];
const OFFER_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const OFFER_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const LOCATION_LAT = (35.65000, 35.70000);
const LOCATION_LNG = (139.70000, 139.80000);
const avatars = avatarNumbers.map((value) => `img/avatars/user${value}.png`);

const lat = getRandomIntegerRange(LOCATION_LAT, 5);
const lng = getRandomIntegerRange(LOCATION_LNG, 5);

const NUMBERS_OF_OFFERS = 10;

const createAd = () => ({
  author: {
    avatar: getRandomArrayElement(avatars),
  },
  offer: {
    title: OFFER_TITLE,
    address: `${lat}, ${lng}`,
    price: getRandomIntegerRange(1000, 1000000),
    type: OFFER_TYPE[getRandomIntegerRange(0, OFFER_TYPE.length - 1)],
    rooms: getRandomIntegerRange(1, 100),
    guests: getRandomIntegerRange(1, 200),
    checkin: TIME_INTERVAL[getRandomIntegerRange(0, TIME_INTERVAL.length - 1)],
    checkout: TIME_INTERVAL[getRandomIntegerRange(0, TIME_INTERVAL.length - 1)],
    features: Array.from(new Set(Array(getRandomIntegerRange(1, 6)).fill(null).map(() => getRandomArrayElement(OFFER_FEATURES)))),
    description: '',
    photos: Array(getRandomIntegerRange(1, 10)).fill(null).map(() => getRandomArrayElement(OFFER_PHOTOS)),
  },

  location: {
    lat,
    lng,
  },
});

export { createAd, NUMBERS_OF_OFFERS };

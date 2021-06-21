import { getRandomIntegerRange, getRandomArrayElement } from './convert';
// Данные для объекта
const OFFER_TITLE = [
  'Большая квартира',
];
const avatarNumbers = {
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

const priceRange = {
  MIN: 1000,
  MAX: 100000,
};
const countRooms = {
  MIN: 1,
  MAX: 10,
};

const countGuest = {
  MIN: 1,
  MAX: 20,
};
const locationLat = {
  MIN: 35.65000,
  MAX: 35.70000,
};
const locationLng = {
  MIN: 139.70000,
  MAX: 139.80000,
};
const avatars = avatarNumbers.map((value) => `img/avatars/user${value}.png`);

const NUMBERS_OF_OFFERS = 10;

const createAd = () => {
  const lat = getRandomIntegerRange(locationLat, 5);
  const lng = getRandomIntegerRange(locationLng, 5);

  return {
    author: {
      avatar: getRandomArrayElement(avatars),
    },
    offer: {
      title: OFFER_TITLE,
      address: `${lat}, ${lng}`,
      price: getRandomIntegerRange(priceRange.MIN, priceRange.MAX),
      type: OFFER_TYPE[getRandomIntegerRange(0, OFFER_TYPE.length - 1)],
      rooms: getRandomIntegerRange(countRooms.MIN, countRooms.MAX),
      guests: getRandomIntegerRange(countGuest.MIN, countGuest.MAX),
      checkin: TIME_INTERVAL[getRandomIntegerRange(0, TIME_INTERVAL.length - 1)],
      checkout: TIME_INTERVAL[getRandomIntegerRange(0, TIME_INTERVAL.length - 1)],
      features: getRandomIntegerRange(OFFER_FEATURES),
      description: '',
      photos: getRandomIntegerRange(OFFER_PHOTOS),
    },

    location: {
      lat: lat,
      lng: lng,
    },
  };
};

export { createAd, NUMBERS_OF_OFFERS };

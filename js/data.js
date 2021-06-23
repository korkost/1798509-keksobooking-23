import { getRandomIntegerRange, getRandomArrayElement } from './convert.js';
// Данные для объекта
const OFFER_TITLE = [
  'Большая квартира',
  'Теплое шале',
  'Уютная студия',
  'С высоты птичего полета',
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
const DESCRIPTION = [
  'Шале',
  'Аппартаменты',
  'Студия',
  'Пентхаус',
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

const createAd = () => {
  const lat = getRandomIntegerRange(locationLat, 5);
  const lng = getRandomIntegerRange(locationLng, 5);

  return {
    author: {
      avatar: `img/avatars/user0${getRandomIntegerRange(avatarNumbers.MIN, avatarNumbers.MAX)}.png`,
    },
    offer: {
      title: OFFER_TITLE,
      address: `${lat}, ${lng}`,
      price: getRandomIntegerRange(priceRange.MIN, priceRange.MAX),
      type: getRandomArrayElement(OFFER_TYPE),
      rooms: getRandomIntegerRange(countRooms.MIN, countRooms.MAX),
      guests: getRandomIntegerRange(countGuest.MIN, countGuest.MAX),
      checkin: getRandomArrayElement(TIME_INTERVAL),
      checkout: getRandomArrayElement(TIME_INTERVAL),
      features: getRandomArrayElement(OFFER_FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getRandomArrayElement(OFFER_PHOTOS),
    },

    location: {
      lat: lat,
      lng: lng,
    },
  };
};


const generateOffers = (quantityOffers) => new Array(quantityOffers).fill(null).map(createAd);

export { generateOffers };

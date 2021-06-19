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
const avatars = avatarNumbers.map((value) => `img/avatars/user${value}.png`);
// Функция случайного числа из диапазона
function getRandomIntegerRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//возвращаем новый массив, без повторения
function getRandomArrayElement(arr) {
  const lengthArray = Math.floor(Math.random() * arr.length);
  const newArray = [];

  for (let min = 0; min < lengthArray; min++) {
    newArray.push(arr[min]);
  }

  return newArray;
}

const NUMBERS_OF_OFFERS = 10;

const createAdvent = () => {
  const locationLat = getRandomIntegerRange(35.65000, 35.70000, 5);
  const locationLng = getRandomIntegerRange(139.70000, 139.80000, 5);
  function getAddress() {
    return `${locationLat}, ${locationLng}`;
  }
  return {
    avatar: getRandomArrayElement(avatars),
    author: {
      avatar: getRandomArrayElement(avatars),
    },
    offer: {
      title: OFFER_TITLE,
      address: getAddress,
      price: getRandomIntegerRange(1000, 1000000),
      type: OFFER_TYPE[getRandomIntegerRange(0, OFFER_TYPE.length - 1)],
      rooms: getRandomIntegerRange(1, 100),
      guests: getRandomIntegerRange(1, 200),
      checkin: TIME_INTERVAL[getRandomIntegerRange(0, TIME_INTERVAL.length - 1)],
      checkout: TIME_INTERVAL[getRandomIntegerRange(0, TIME_INTERVAL.length - 1)],
      features: getRandomArrayElement(OFFER_FEATURES),
      description: '',
      photos: getRandomArrayElement(OFFER_PHOTOS),
    },

    location: {
      lat: locationLat,
      lng: locationLng,
    },
  };
};

const generateOffers = new Array(NUMBERS_OF_OFFERS).fill(null).map(createAdvent);
generateOffers();

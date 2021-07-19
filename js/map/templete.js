import { hideBlock } from '../convert.js';

const HEIGHT_PHOTO = 40;
const WIDHT_PHOTO = 45;

const typeCategory = {
  PALACE: 'Дворец',
  FLAT: 'Квартира',
  HOUSE: 'Дом',
  BUNGALOW: 'Бунгало',
  HOTEL: 'Отель',
};

const createCard = (author, offer) => {
  const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

  const makeFeatureItems = (featureList) => featureList.map((feature) => `<li class="popup__feature popup__feature--${feature}"></li>`).join('');
  const makePhotoItems = (photoList) => photoList.map((photo) => `<img src="${photo}" class="popup__photo" width= "${WIDHT_PHOTO}" height="${HEIGHT_PHOTO}" alt="Фотография жилья">`).join('');

  const card = cardTemplate.cloneNode(true);

  const avatar = card.querySelector('.popup__avatar');
  const title = card.querySelector('.popup__title');
  const address = card.querySelector('.popup__text--address');
  const price = card.querySelector('.popup__text--price');
  const type = card.querySelector('.popup__type');
  const capacity = card.querySelector('.popup__text--capacity');
  const time = card.querySelector('.popup__text--time');
  const features = card.querySelector('.popup__features');
  const description = card.querySelector('.popup__description');
  const photos = card.querySelector('.popup__photos');

  author.avatar ? avatar.src = author.avatar : hideBlock(avatar);
  offer.title ? title.textContent = offer.title : hideBlock(title);
  offer.address ? address.textContent = offer.address : hideBlock(address);
  offer.price ? price.textContent = `${offer.price} ₽/ночь` : hideBlock(price);
  offer.type ? type.textContent = typeCategory[offer.type.toUpperCase()] : hideBlock(type);
  offer.rooms ? capacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей` : hideBlock(capacity);
  offer.checkin ? time.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}` : hideBlock(time);
  offer.features ? features.innerHTML = `${makeFeatureItems(offer.features)}` : hideBlock(features);
  offer.description ? description.textContent = offer.description : hideBlock(description);
  offer.photos ? photos.innerHTML = `${makePhotoItems(offer.photos)}` : hideBlock(photos);

  return card;
};

export { createCard };

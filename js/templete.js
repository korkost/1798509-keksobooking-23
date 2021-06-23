import { createAd, NUMBERS_OF_OFFERS } from './data';

//Генерация разметки похожих шаблонов
const adTemplete = document.guerySelector('#card').content.querySelector('.popup');

const ads = new Array(NUMBERS_OF_OFFERS).fill(null).map((value, index) => createAd(index + 1));
const mapCanvas = document.querySelector('#map-canvas');

function featureListElement(array, itemList) {
  const modifiers = array.map((feature) => `popup__feature--${feature}`);
  itemList.querySelectorAll('.popup__feature').forEach((element) => {
    const modifier = element.classList[1];
    if (!modifiers.includes(modifier)) {
      element.remove();
    }
  });
  return modifiers;
}

const getHousingTypeName = (type) => {
  let housingType = '';
  switch (type) {
    case 'flat':
      housingType = 'Квартира';
      break;
    default:
      housingType = '';
  }
  return housingType;
};

const renderOffer = ({ offer, author }) => {
  const adElement = adTemplete.cloneNode(true);
  adElement.querySelector('.popup__title').textContent = offer.title;
  adElement.querySelector('.popup__text--address').textContent = offer.address;
  adElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  adElement.querySelector('.popup__type').textContent = getHousingTypeName(offer.type);
  adElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  adElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  featureListElement(offer.features, adElement.querySelector('.popup__features'));
  adElement.querySelector('.popup__description').textContent = offer.description;
  adElement.querySelector('.popup__photo').remove();
  const photosListElement = adElement.querySelector('.popup__photos');
  for (const element of offer.photos) {
    const photo = document.createElement('img');
    photo.src = element;
    photo.classList.add('popup__photo');
    photosListElement.appendChild(photo);
  }
  adElement.querySelector('.popup__avatar').src = author.avatar;
  return adElement;
};

const renderOffers = (offers) => offers.map(renderOffer);
mapCanvas.appendChild(renderOffers(ads)[0]);



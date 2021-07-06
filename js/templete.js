const mapCanvas = document.querySelector('#map-canvas');
const adTemplete = document.querySelector('#card').content.querySelector('.popup');
const adElement = adTemplete.cloneNode(true);

const HEIGHT_PHOTO = 40;
const WIDHT_PHOTO = 45;

const PricePerNight = document.createElement('span');
PricePerNight.textContent = 'Р.ночь';

const getHousingTypeName = (type) => {
  let housingType = '';
  switch (type) {
    case 'flat':
      housingType = 'Квартира';
      break;
    case 'palace':
      housingType = 'Дворец';
      break;
    case 'house':
      housingType = 'Дом';
      break;
    case 'bungalow':
      housingType = 'Бунгало';
      break;
    case 'hotel':
      housingType = 'Отель';
      break;
    default:
      housingType = '';
  }
  return housingType;
};

const description = adElement.querySelector('.popup__description');

const getTextContent = (content, element) => {
  if (content) {
    element.textContent = content;
    return;
  }

  element.style.display = 'none';
  element.textContent = '';
};

const createFeatures = (contents) => {
  const featuresList = document.createDocumentFragment();
  contents.forEach((content) => {
    const featureItem = document.createElement('li');
    featureItem.classList.add('popup__feature');
    featureItem.classList.add(`popup__feature--${content}`);
    featuresList.appendChild(featureItem);
  });
  return featuresList;
};

const createImage = (content) => {
  const photosList = document.createDocumentFragment();
  content.forEach((photo) => {
    const photoItem = document.createElement('img');
    photoItem.classList.add('popup__photo');
    photoItem.src = photo;
    photoItem.alt = 'Фотография жилья';
    photoItem.width = WIDHT_PHOTO;
    photoItem.height = HEIGHT_PHOTO;
    photosList.appendChild(photoItem);
  });
  return photosList;
};

const renderTemplate = (image, content) => {
  adElement.querySelector('.popup__avatar').src = image.avatar;
  adElement.querySelector('.popup__title').textContent = content.title;
  adElement.querySelector('.popup__text--address').textContent = content.address;
  adElement.querySelector('.popup__text--price').textContent = `${content.price} ${PricePerNight.textContent}`;
  adElement.querySelector('.popup__type').textContent = getHousingTypeName(content.type);
  adElement.querySelector('.popup__text--capacity').textContent = `${content.rooms} комнаты для ${content.guests} гостей`;
  adElement.querySelector('.popup__text--time').textContent = `Заезд после ${content.checkin}, выезд до ${content.checkout}`;
  adElement.querySelector('.popup__features').innerHTML = '';
  adElement.querySelector('.popup__features').appendChild(createFeatures(content.features));
  adElement.querySelector('.popup__photos').innerHTML = '';
  adElement.querySelector('.popup__photos').appendChild(createImage(content.photos));

  getTextContent(content.description, description);

};

const renderOffers = (element, image, content) => {
  element.appendChild(adElement);
  renderTemplate(image, content);
};

export { renderOffers, mapCanvas };


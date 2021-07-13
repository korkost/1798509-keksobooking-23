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


const renderTemplate = ({ author, offer }) => {
  const adTemplete = document.querySelector('#card')
    .content
    .querySelector('.popup');

  const adElement = adTemplete.cloneNode(true);

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

  adElement.querySelector('.popup__avatar').src = author.avatar;
  adElement.querySelector('.popup__title').textContent = offer.title;
  adElement.querySelector('.popup__text--address').textContent = offer.address;
  adElement.querySelector('.popup__text--price').textContent = `${offer.price} ${PricePerNight.textContent}`;
  adElement.querySelector('.popup__type').textContent = getHousingTypeName(offer.type);
  adElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  adElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  adElement.querySelector('.popup__features').innerHTML = '';
  adElement.querySelector('.popup__features').appendChild(createFeatures(offer.features));
  adElement.querySelector('.popup__photos').innerHTML = '';
  adElement.querySelector('.popup__photos').appendChild(createImage(offer.photos));

  getTextContent(offer.description, description);

  return adElement;
};

export { renderTemplate };

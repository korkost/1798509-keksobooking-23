const adTemplete = document.querySelector('#card').content.querySelector('.popup');
const adElement = adTemplete.cloneNode(true);

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

const clearContent = (element) => element.innerHTML = '';

const popupFeatures = adElement.querySelector('.popup__features');
const popupPhotos = adElement.querySelector('.popup__photos');
const description = adElement.querySelector('.popup__description');

const getTextContent = (content, element) => {
  if (content) {
    element.textContent = content;
  }
	return;
};

const createListItem = (content) => {
  const listItem = document.createElement('li');
  listItem.classList.add('popup__feature');
  listItem.classList.add(`popup__feature--${content}`);

  return listItem;
};

const createImage = (content) => {
  const image = document.createElement('img');
  image.src = content;
  image.classList.add('popup__photo');
  image.width = '45';
  image.height = '40';
  image.alt = 'Фотография жилья';

  return image;
};

const renderTemplate = (image, content) => {
  adElement.querySelector('.popup__avatar').src = image.avatar;
  adElement.querySelector('.popup__title').textContent = content.title;
  adElement.querySelector('.popup__text--address').textContent = content.address;
  adElement.querySelector('.popup__text--price').textContent = `${content.price} ${PricePerNight.textContent}`;
  adElement.querySelector('.popup__type').textContent = getHousingTypeName(content.type);
  adElement.querySelector('.popup__text--capacity').textContent = `${content.rooms} комнаты для ${content.guests} гостей`;
  adElement.querySelector('.popup__text--time').textContent = `Заезд после ${content.checkin}, выезд до ${content.checkout}`;

  clearContent(popupFeatures);
  popupFeatures.append(createListItem(content.features));

  getTextContent(content.description, description);

  clearContent(popupPhotos);
  popupPhotos.append(createImage(content.photo));
};

const renderOffers = (element, image, content) => {
  element.appendChild(adElement);
  renderTemplate(image, content);
};

export { renderOffers } ;

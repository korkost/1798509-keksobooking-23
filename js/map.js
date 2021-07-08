import { disableForm, activateForm, сompleteAddressInput } from './form.js';
import { generateOffersArray, DECIMAL } from './offer.js';
import { renderTemplate } from './templete.js';

const mainPickIconSize = [52, 52];
const mainPickIconAnchor = [26, 52];
const markerIconSize = [40, 40];
const markerIconAnchor = [20, 40];
const MAP_SCALE = 10;


const offersArray = generateOffersArray();
const DefaultCoords = {
  LAT: 35.65160,
  LNG: 139.74908,
};

disableForm();

export const map = L.map('map-canvas')
  .on('load', () => activateForm())
  .setView({
    lat: DefaultCoords.LAT,
    lng: DefaultCoords.LNG,
  }, MAP_SCALE);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
})
  .addTo(map);

//Рисуем пины
const defaultMarkerIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: mainPickIconSize,
  iconAnchor: mainPickIconAnchor,
});

const defaultMarker = L.marker(
  {
    lat: DefaultCoords.LAT,
    lng: DefaultCoords.LNG,
  },
  {
    draggable: true,
    icon: defaultMarkerIcon,
  },
);

defaultMarker.addTo(map);

const getMarkerCoords = () => {
  сompleteAddressInput(`${DefaultCoords.LAT}, ${DefaultCoords.LNG}`);

  defaultMarker.on('drag', (event) => {
    const coords = event.target.getLatLng();
    const lat = coords.LAT.toFixed(DECIMAL);
    const lng = coords.LNG.toFixed(DECIMAL);

    сompleteAddressInput(`${lat}, ${lng}`);
  });
};

getMarkerCoords();

const createMarkerGroup = L.layerGroup().addTo(map);
const createMarker = (offerData) => {
  const { location } = offerData;
};

const markerIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: markerIconSize,
  iconAnchor: markerIconAnchor,
});

const marker = L.marker(
  {
    lat: location.lat,
    lng: location.lng,
  },
  {
    icon: markerIcon,
    riseOnHover: true,
  },
);

marker
  .addTo(createMarkerGroup)
  .bindPopup(
    renderTemplate(offerData),
    {
      keepInView: true,
    },
  );

offersArray.forEach((offer) => {
  createMarker(offer);
});

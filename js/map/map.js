import { addressInput } from '../form.js';
import { renderTemplate } from './templete.js';
import { getData, adverts } from '../api.js';
import { disableFilterForm, doFilter } from './map-filter.js';

const LIMIT_ADVERTS = 10;
const MAP_PROVIDER_LINK = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const OPEN_STREET_MAP_ATTR = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const MAIN_ICON_LINK = './img/main-pin.svg';
const POPUP_ICON_LINK = './img/pin.svg';
const MAIN_ICON_HEIGHT = 52;
const MAIN_ICON_WIDTH = 52;
const POPUP_ICON_HEIGHT = 40;
const POPUP_ICON_WIDTH = 40;
const ANCHOR_X = 26;
const ANCHOR_Y = 52;
const POPUP_ANCHOR_X = 20;
const POPUP_ANCHOR_Y = 40;
const TOKYO_CENTER = {
  lat: 35.658581,
  lng: 139.745438,
};
const DECIMAL = 5;
const OFFERS = 10;
const mapContainer = document.querySelector('#map-canvas');

const map = L.map(
  mapContainer,
  {
    scrollWheelZoom: false,
  },
);

const layer = L.layerGroup().addTo(map);

const mainPinIcon = L.icon({
  iconUrl: MAIN_ICON_LINK,
  iconSize: [MAIN_ICON_HEIGHT, MAIN_ICON_WIDTH],
  iconAnchor: [ANCHOR_X, ANCHOR_Y],
});

const mainPinMarker = L.marker(
  TOKYO_CENTER,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const popupIcon = L.icon({
  iconUrl: POPUP_ICON_LINK,
  iconSize: [POPUP_ICON_HEIGHT, POPUP_ICON_WIDTH],
  iconAnchor: [POPUP_ANCHOR_X, POPUP_ANCHOR_Y],
});

const drawPopups = () => {
  layer.clearLayers();
  doFilter(adverts).slice(0, LIMIT_ADVERTS).forEach((advert) => {
    const marker = L.marker(
      advert.location,
      {
        icon: popupIcon,
      },
    );
    marker.addTo(layer).bindPopup(renderTemplate(advert));
  });
};

const onMainPinDrag = ({ target }) => {
  const latlng = target.getLatLng();
  addressInput.value = `${latlng.lat.toFixed(DECIMAL)} ${latlng.lng.toFixed(DECIMAL)}`;
  //onAddressChange();
};

const resetMap = () => {
  mainPinMarker.setLatLng(TOKYO_CENTER);
  map.setView(TOKYO_CENTER, OFFERS);
};

const onMapLoad = () => {
  disableFilterForm();
  getData(drawPopups);
};

L.tileLayer(MAP_PROVIDER_LINK, {
  attribution: OPEN_STREET_MAP_ATTR,
}).addTo(map);

map.on('load', onMapLoad).setView(TOKYO_CENTER, OFFERS);

mainPinMarker.on('drag', onMainPinDrag);
mainPinMarker.addTo(map);

export { resetMap, drawPopups };

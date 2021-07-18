import { createCard } from './templete.js';
import { activateForm, disableForm } from '../form/form.js';
import { сompleteAddressInput } from '../form/validate-address.js';
import { activateFilterForm, disableFilterForm, getFilterData } from './filter.js';
import { shuffleArray } from '../convert.js';
import { debounce } from '../convert.js';
import { openAlert } from '../error.js';
import { fetchDataOffers } from '../api.js';

const RERENDER_DELAY = 500;
const DEFAULT_COUNT_OF_MARKER = 10;
const MARKER_ICON_WIDTH = 40;
const MARKER_ICON_HEIGHT = 40;
const MARKER_ICON_ANCHOR_X = 20;
const MARKER_ICON_ANCHOR_Y = 40;
const DECIMAL = 5;
const MAIN_ICON_HEIGHT = 52;
const MAIN_ICON_WIDTH = 52;
const ANCHOR_X = 26;
const ANCHOR_Y = 52;

const filterForm = document.querySelector('.map__filters');

disableForm();
disableFilterForm();

const defaultMapSettings = {
  coords: {
    LAT: 35.65160,
    LNG: 139.74908,
  },
  MAP_ZOOM: 10,
  MARKER_ICON: L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [MAIN_ICON_HEIGHT, MAIN_ICON_WIDTH],
    iconAnchor: [ANCHOR_X, ANCHOR_Y],
  }),
};

const defaultMarker = L.marker(
  {
    lat: defaultMapSettings.coords.LAT,
    lng: defaultMapSettings.coords.LNG,
  },
  {
    draggable: true,
    icon: defaultMapSettings.MARKER_ICON,
  },
);

const setCoordsOnInput = () => {
  сompleteAddressInput(`${defaultMapSettings.coords.LAT}, ${defaultMapSettings.coords.LNG}`);

  defaultMarker.on('drag', (evt) => {
    const { lat, lng } = evt.target.getLatLng();

    сompleteAddressInput(`${lat.toFixed(DECIMAL)}, ${lng.toFixed(DECIMAL)}`);
  });

};

const map = L.map('map-canvas')
  .on('load', () => {
    activateForm();
    setCoordsOnInput();
  })
  .setView({
    lat: defaultMapSettings.coords.LAT,
    lng: defaultMapSettings.coords.LNG,
  }, defaultMapSettings.MAP_ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

defaultMarker.addTo(map);

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (offerData) => {
  markerGroup.clearLayers();

  offerData.forEach(({ author, offer, location }) => {
    const { lat, lng } = location;
    const markerIcon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [MARKER_ICON_WIDTH, MARKER_ICON_HEIGHT],
      iconAnchor: [MARKER_ICON_ANCHOR_X, MARKER_ICON_ANCHOR_Y],
    });

    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon: markerIcon,
        riseOnHover: true,
        closePopupOnClick: false,
      },
    );
    marker.addTo(markerGroup).bindPopup(
      createCard(author, offer),
      {
        keepInView: true,
      },
    );
  });
};

const renderCards = (offerData) => {
  const cardData = shuffleArray(offerData).slice(0, DEFAULT_COUNT_OF_MARKER);
  createMarker(cardData);

  const applyFilter = () => {
    const currentFilter = getFilterData(cardData);
    createMarker(currentFilter);
  };

  filterForm.addEventListener('change', debounce(applyFilter, RERENDER_DELAY));
};

const loadMarkersOnMap = () => {
  fetchDataOffers(
    (offers) => {
      renderCards(offers);
      activateFilterForm();
    },
    () => openAlert('error', 'Ошибка при загрузке объявлений'),
  );
};

loadMarkersOnMap();

const returnMarkerOnDefault = () => {
  defaultMarker.setLatLng({
    lat: defaultMapSettings.coords.LAT,
    lng: defaultMapSettings.coords.LNG,
  });

  map.setView({
    lat: defaultMapSettings.coords.LAT,
    lng: defaultMapSettings.coords.LNG,
  }, defaultMapSettings.MAP_ZOOM);
};

export {
  returnMarkerOnDefault,
  loadMarkersOnMap,
  renderCards,
  createMarker,
  setCoordsOnInput
};

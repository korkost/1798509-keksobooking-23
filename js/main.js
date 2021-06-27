import { generateOffers } from './offer.js';
import { renderOffers } from './templete.js';
import { setInactive, setActive } from './form.js';

const NUMBERS_OF_OFFERS = 10;

const offers = generateOffers(NUMBERS_OF_OFFERS);

const firstOffer = offers[0];
const { author, offer } = firstOffer;

const mapCanvas = document.querySelector('#map-canvas');

setInactive();
setActive();
renderOffers(mapCanvas, author, offer);


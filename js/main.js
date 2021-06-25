<<<<<<< HEAD
import { generateOffers } from './offer.js';
import { renderOffers } from './templete.js';

const NUMBERS_OF_OFFERS = 10;

const firstOffer = offers[0];
const {author, offer} = firstOffer;

const mapCanvas = document.querySelector('#map-canvas');

renderOffers(mapCanvas, author, offer);
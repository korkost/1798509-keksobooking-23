import { createAd, NUMBERS_OF_OFFERS } from './data.js';


const generateOffers = new Array(NUMBERS_OF_OFFERS).fill(null).map(createAd);
generateOffers();


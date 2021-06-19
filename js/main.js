import { createAd, NUMBERS_OF_OFFERS } from './data';

const generateOffers = new Array(NUMBERS_OF_OFFERS).fill(null).map(createAd);
generateOffers();

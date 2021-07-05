import { generateOffers } from './offer.js';
import { renderOffers, mapCanvas } from './templete.js';
import { activateForm } from './form.js';

const NUMBERS_OF_OFFERS = 10;

const offers = generateOffers(NUMBERS_OF_OFFERS);

const [firstOffer] = offers;
const { author, offer } = firstOffer;

//disableForm();
activateForm();
renderOffers(mapCanvas, author, offer);


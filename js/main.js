import { generateOffers } from './offer.js';
import { renderOffers } from './templete.js';
import { setInactive, setActive } from './form.js';
import { mapCanvas } from './form.js';

const NUMBERS_OF_OFFERS = 10;

const offers = generateOffers(NUMBERS_OF_OFFERS);

const [firstOffer] = offers;
const { author, offer } = firstOffer;

setInactive();
setActive();
renderOffers(mapCanvas, author, offer);


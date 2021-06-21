import { createAd, NUMBERS_OF_OFFERS } from './data';
import { setInactive, setActive } from './form';


setInactive();
setActive();
const generateOffers = new Array(NUMBERS_OF_OFFERS).fill(null).map(createAd);
generateOffers();


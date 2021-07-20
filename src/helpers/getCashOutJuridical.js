import { keyUrls } from '../constant/constants.js';
import { getPercents } from './getPercents.js';

export const getCashOutJuridical = (value, response) => {
  if (value > response[keyUrls.cashOutJuridical].min.amount) {
    console.log(
      getPercents(value, response[keyUrls.cashOutJuridical].percents).toFixed(2),
    );
  }
};

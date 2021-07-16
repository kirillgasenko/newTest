import { keyUrls } from './constants.js';
import { getPercents } from './getPercents.js';

export const getDefaultCashIn = (value, url) => {
  const percent = getPercents(value, url[keyUrls.cashIn].percents);
  if (percent > url[keyUrls.cashIn].max.amount) {
    console.log((url[keyUrls.cashIn].max.amount).toFixed(2));
  } else {
    console.log((percent).toFixed(2));
  }
};

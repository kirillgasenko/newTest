import { keyUrls } from './constants.js';
import { getPercents } from './getPercents.js';

export const getDefaultCashIn = (value, url) => {
  const percent = getPercents(value, url[keyUrls.cashIn].percents);
  if (percent > url[keyUrls.cashIn].max.amount) {
    return (url[keyUrls.cashIn].max.amount).toFixed(2);
  }
  return (percent).toFixed(2);
};

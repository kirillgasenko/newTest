import { getApiCashIn } from '../repositories/getApiCashIn.js';
import { getApiCashOutJuridical } from '../repositories/getApiCashOutJuridical.js';
import { getApiCashOutNatural } from '../repositories/getApiCashOutNatural.js';

export function getAllResponses() {
  const requests = [
    getApiCashIn(),
    getApiCashOutJuridical(),
    getApiCashOutNatural(),
  ];

  return Promise.all(requests).then((response) => response.reduce((accumulator, currentValue) => ({ ...accumulator, ...currentValue }), {}));
}

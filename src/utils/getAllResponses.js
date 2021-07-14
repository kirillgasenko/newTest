import { getApiCashIn } from '../repositories/getApiCashIn.js';
import { getApiCashOutJuridical } from '../repositories/getApiCashOutJuridical.js';
import { getApiCashOutNatural } from '../repositories/getApiCashOutNatural.js';

export async function getAllResponses() {
  const apiResponses = {};
  const requests = [
    getApiCashIn(),
    getApiCashOutJuridical(),
    getApiCashOutNatural(),
  ];

  await Promise.all(requests).then((response) => {
    response.forEach((e) => {
      apiResponses[e.request.res.responseUrl] = e.data;
    });
  });

  return apiResponses;
}

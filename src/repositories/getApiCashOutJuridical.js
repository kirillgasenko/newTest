import axios from 'axios';
import { API_CASH_OUT_JURIDICAL } from '../constant/constants.js';

export async function getApiCashOutJuridical() {
  const response = await axios.get(API_CASH_OUT_JURIDICAL);

  return { cashOutJuridical: response.data };
}

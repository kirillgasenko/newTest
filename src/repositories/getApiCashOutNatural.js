import axios from 'axios';
import { API_CASH_OUT_NATURAL } from '../helpers/constants.js';

export async function getApiCashOutNatural() {
  const response = await axios.get(API_CASH_OUT_NATURAL);

  return { cashOutNatural: response.data };
}

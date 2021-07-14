import axios from 'axios';
import { API_CASH_OUT_JURIDICAL } from '../helpers/constants.js';

export function getApiCashOutJuridical() {
  const response = axios.get(API_CASH_OUT_JURIDICAL);

  return response;
}

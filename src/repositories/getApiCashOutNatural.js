import axios from 'axios';
import { API_CASH_OUT_NATURAL } from '../helpers/constants.js';

export function getApiCashOutNatural() {
  const response = axios.get(API_CASH_OUT_NATURAL);

  return response;
}

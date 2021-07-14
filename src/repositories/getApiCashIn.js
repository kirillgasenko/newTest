import axios from 'axios';
import { API_CASH_IN } from '../helpers/constants.js';

export function getApiCashIn() {
  const response = axios.get(API_CASH_IN);

  return response;
}

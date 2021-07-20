import axios from 'axios';
import { API_CASH_IN } from '../constant/constants.js';

export async function getApiCashIn() {
  const response = await axios.get(API_CASH_IN);

  return { cashIn: response.data };
}

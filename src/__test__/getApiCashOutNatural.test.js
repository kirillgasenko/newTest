import axios from 'axios';
import { getApiCashOutNatural } from '../repositories/getApiCashOutNatural';
import { API_CASH_OUT_NATURAL } from '../helpers/constants.js';

jest.mock('axios');

describe('getApiCashOutNatural', () => {
  it('fetches successfully data from an API', async () => {
    const data = {
      percents: 0.03,
      max: {
        amount: 5,
        currency: 'EUR',
      },
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(getApiCashOutNatural()).resolves.toEqual(data);
    expect(axios.get).toHaveBeenCalledWith(API_CASH_OUT_NATURAL);
  });
});

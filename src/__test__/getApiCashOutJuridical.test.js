import axios from 'axios';
import { getApiCashOutJuridical } from '../repositories/getApiCashOutJuridical';
import { API_CASH_OUT_JURIDICAL } from '../helpers/constants.js';

jest.mock('axios');

describe('getApiCashOutJuridical', () => {
  it('fetches successfully data from an API', async () => {
    const data = {
      percents: 0.03,
      max: {
        amount: 5,
        currency: 'EUR',
      },
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(getApiCashOutJuridical()).resolves.toEqual(data);
    expect(axios.get).toHaveBeenCalledWith(API_CASH_OUT_JURIDICAL);
  });
});

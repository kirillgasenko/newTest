import axios from 'axios';
import { getApiCashIn } from '../repositories/getApiCashIn';
import { API_CASH_IN } from '../helpers/constants.js';

jest.mock('axios');

describe('getApiCashIn', () => {
  it('fetches successfully data from an API', async () => {
    const data = {
      percents: 0.03,
      max: {
        amount: 5,
        currency: 'EUR',
      },
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(getApiCashIn()).resolves.toEqual(data);
    expect(axios.get).toHaveBeenCalledWith(API_CASH_IN);
  });
});

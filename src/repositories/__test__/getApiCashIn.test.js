import axios from 'axios';
import { getApiCashIn } from '../getApiCashIn.js';
import { API_CASH_IN } from '../../constant/constants.js';

jest.mock('axios');

describe('getApiCashIn', () => {
  it('fetches successfully data from an API', async () => {
    const expectedReponse = {
      data: {
        percents: 0.03,
        max: {
          amount: 5,
          currency: 'EUR',
        },
      },
    };

    const expectedResult = { cashIn: expectedReponse.data };

    axios.get.mockImplementationOnce(() => Promise.resolve(expectedReponse));
    const ApiCashIn = await getApiCashIn();

    expect(axios.get).toHaveBeenCalledWith(API_CASH_IN);
    expect(ApiCashIn).toEqual(expectedResult);
  });
});

import axios from 'axios';
import { getApiCashOutNatural } from '../getApiCashOutNatural';
import { API_CASH_OUT_NATURAL } from '../../constant/constants.js';

jest.mock('axios');

describe('getApiCashOutNatural', () => {
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

    const expectedResult = { cashOutNatural: expectedReponse.data };

    axios.get.mockImplementationOnce(() => Promise.resolve(expectedReponse));
    const ApiCashOutNatural = await getApiCashOutNatural();

    expect(axios.get).toHaveBeenCalledWith(API_CASH_OUT_NATURAL);
    expect(ApiCashOutNatural).toEqual(expectedResult);
  });
});

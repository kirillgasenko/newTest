import axios from 'axios';
import { getApiCashOutJuridical } from '../../repositories/getApiCashOutJuridical';
import { API_CASH_OUT_JURIDICAL } from '../constants.js';

jest.mock('axios');

describe('getApiCashOutJuridical', () => {
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

    const expectedResult = { cashOutJuridical: expectedReponse.data };

    axios.get.mockImplementationOnce(() => Promise.resolve(expectedReponse));
    const ApiCashOutJuridical = await getApiCashOutJuridical();

    expect(axios.get).toHaveBeenCalledWith(API_CASH_OUT_JURIDICAL);
    expect(ApiCashOutJuridical).toEqual(expectedResult);
  });
});

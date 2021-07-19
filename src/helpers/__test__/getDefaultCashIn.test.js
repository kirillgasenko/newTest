import { getDefaultCashIn } from '../getDefaultCashIn.js';

describe('getDefaultCashIn', () => {
  it('getDefaultCashIn result', () => {
    const url = {
      cashIn: { percents: 0.03, max: { amount: 5, currency: 'EUR' } },
      cashOutJuridical: {
        percents: 0.3,
        min: { amount: 0.5, currency: 'EUR' },
      },
      cashOutNatural: {
        percents: 0.3,
        week_limit: { amount: 1000, currency: 'EUR' },
      },
    };

    const getDefaultCashInResult = getDefaultCashIn(200, url);
    expect(getDefaultCashInResult).toBe('0.06');
  });
});

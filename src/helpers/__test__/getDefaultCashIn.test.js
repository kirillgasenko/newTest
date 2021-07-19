import { getDefaultCashIn } from '../getDefaultCashIn.js';

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

describe('getDefaultCashIn', () => {
  test('getDefaultCashIn right condition result', () => {
    const getDefaultCashInResult = getDefaultCashIn(200, url);
    expect(getDefaultCashInResult).toBe('0.06');
  });

  test('getDefaultCashIn wrong condition result', () => {
    const getDefaultCashInResult = getDefaultCashIn(1000000, url);
    expect(getDefaultCashInResult).toBe('5.00');
  });
});

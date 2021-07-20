import { getCashIn } from '../getCashIn.js';

jest.spyOn(console, 'log');

describe('getCashIn', () => {
  test('getCashIn result', () => {
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

    getCashIn(300, url);
    expect(console.log.mock.calls[0][0]).toBe('0.09');
  });
});

import { getCashOutNaturalDefault } from '../getCashOutNaturalDefault.js';

jest.spyOn(console, 'log');

describe('getCashOutNaturalDefault', () => {
  test('getCashOutNaturalDefault result', () => {
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

    getCashOutNaturalDefault(30000, url, '2020-12-31', 1);
    getCashOutNaturalDefault(1000, url, '2021-01-01', 1);
    expect(console.log.mock.calls[0][0]).toBe('87.00');
    expect(console.log.mock.calls[1][0]).toBe('3.00');
  });
});

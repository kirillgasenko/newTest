import { getCashOutJuridical } from '../getCashOutJuridical.js';

jest.spyOn(console, 'log');

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

describe('getCashOutJuridical', () => {
  test('getCashOutJuridical right condition result', () => {
    getCashOutJuridical(300, url);
    expect(console.log.mock.calls[0][0]).toBe('0.90');
  });

  test('getCashOutJuridical wrong condition result', () => {
    console.log(getCashOutJuridical(0.4, url));
    expect(console.log.mock.calls[1][0]).toBe(undefined);
  });
});

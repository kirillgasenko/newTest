import { getAllResponses } from '../getAllResponses.js';

describe('getAllResponses', () => {
  test('getAllResponses result', async () => {
    const result = {
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
    const getAllResponsesTest = await getAllResponses();
    expect(getAllResponsesTest).toEqual(result);
  });
});

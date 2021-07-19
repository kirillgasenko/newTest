import { getPercents } from '../getPercents.js';

describe('getPercentss', () => {
  it('getPercents result', () => {
    const functionPercent = getPercents(100, 50);
    expect(functionPercent).toBe(50);
  });
});

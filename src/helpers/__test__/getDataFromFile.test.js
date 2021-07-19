import { getDataFromFile } from '../getDataFromFile.js';

describe('getDataFromFile', () => {
  test('getDataFromFile result', () => {
    const data = [
      {
        date: '2016-01-05',
        operation: { amount: 200, currency: 'EUR' },
        type: 'cash_in',
        user_id: 1,
        user_type: 'natural',
      },
      {
        date: '2016-01-06',
        operation: { amount: 300, currency: 'EUR' },
        type: 'cash_out',
        user_id: 2,
        user_type: 'juridical',
      },
      {
        date: '2016-01-06',
        operation: { amount: 30000, currency: 'EUR' },
        type: 'cash_out',
        user_id: 1,
        user_type: 'natural',
      },
      {
        date: '2016-01-07',
        operation: { amount: 1000, currency: 'EUR' },
        type: 'cash_out',
        user_id: 1,
        user_type: 'natural',
      },
      {
        date: '2016-01-07',
        operation: { amount: 100, currency: 'EUR' },
        type: 'cash_out',
        user_id: 1,
        user_type: 'natural',
      },
      {
        date: '2016-01-10',
        operation: { amount: 100, currency: 'EUR' },
        type: 'cash_out',
        user_id: 1,
        user_type: 'natural',
      },
      {
        date: '2016-01-10',
        operation: { amount: 1000000, currency: 'EUR' },
        type: 'cash_in',
        user_id: 2,
        user_type: 'juridical',
      },
      {
        date: '2016-01-10',
        operation: { amount: 1000, currency: 'EUR' },
        type: 'cash_out',
        user_id: 3,
        user_type: 'natural',
      },
      {
        date: '2016-02-15',
        operation: { amount: 300, currency: 'EUR' },
        type: 'cash_out',
        user_id: 1,
        user_type: 'natural',
      },
    ];
    const getDataFromFileTest = getDataFromFile('input.json');
    expect(getDataFromFileTest).toEqual(data);
  });
});

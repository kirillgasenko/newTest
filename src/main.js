import moment from 'moment';
import { getAllResponses } from './utils/getAllResponses.js';
import { API_CASH_IN, API_CASH_OUT_NATURAL, API_CASH_OUT_JURIDICAL } from './helpers/constants.js';

const userIdDefault = {};
const getPercents = (value, percents) => (value * percents) / 100;

export const percentMain = getAllResponses().then((url) => {
  const getDefaultCashIn = (value) => {
    const percent = getPercents(value, url[API_CASH_IN].percents);
    if (percent > url[API_CASH_IN].max.amount) {
      console.log(url[API_CASH_IN].max.amount);
    } else {
      console.log(percent);
    }
  };

  const getCashOutNatural = (amount, value, existWeek, user_id, numberWeek) => {
    let newAmount = amount;
    let newValue = value;
    switch (true) {
      case (existWeek && amount < 0):
        newValue -= existWeek.amount;
        newValue = getPercents(newValue, url[API_CASH_OUT_NATURAL].percents);
        newAmount = 0;
        break;
      case (!existWeek && amount < 0):
        newValue -= url[API_CASH_OUT_NATURAL].week_limit.amount;
        newValue = getPercents(newValue, url[API_CASH_OUT_NATURAL].percents);
        newAmount = 0;
        break;
      default:
        newValue = 0;
    }
    userIdDefault[user_id] = {
      [numberWeek]: {
        value: newValue,
        amount: newAmount,
      },
    };
    console.log(userIdDefault[user_id][numberWeek].value);
  };

  const percent = {
    natural: {
      cash_out: (value, date, user_id) => {
        const numberWeek = moment(date).locale('uk').week();
        const userDefault = userIdDefault[user_id];
        const existWeek = userDefault && userDefault[numberWeek];

        if (existWeek) {
          const amount = existWeek.amount - value;
          getCashOutNatural(amount, value, existWeek, user_id, numberWeek);
          return;
        }

        const amount = url[API_CASH_OUT_NATURAL].week_limit.amount - value;
        getCashOutNatural(amount, value, existWeek, user_id, numberWeek);
      },
      cash_in: (value) => getDefaultCashIn(value),
    },
    juridical: {
      cash_out: (value) => {
        if (value > url[API_CASH_OUT_JURIDICAL].min.amount) {
          console.log(getPercents(value, url[API_CASH_OUT_JURIDICAL].percents));
        }
      },
      cash_in: (value) => getDefaultCashIn(value),
    },
  };
  return percent;
});

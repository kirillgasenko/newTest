import moment from 'moment';
import { getPercents } from './getPercents.js';
import { keyUrls } from '../constant/constants.js';

const userIdDefault = {};

const getCashOutNatural = (
  amount,
  response,
  value,
  existWeek,
  user_id,
  numberWeek,
) => {
  let newAmount = amount;
  let newValue = value;
  switch (true) {
    case existWeek && amount < 0:
      newValue -= existWeek.amount;
      newValue = getPercents(
        newValue,
        response[keyUrls.cashOutNatural].percents,
      );
      newAmount = 0;
      break;
    case !existWeek && amount < 0:
      newValue -= response[keyUrls.cashOutNatural].week_limit.amount;
      newValue = getPercents(
        newValue,
        response[keyUrls.cashOutNatural].percents,
      );
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
  console.log((userIdDefault[user_id][numberWeek].value).toFixed(2));
};

export const getCashOutNaturalDefault = (value, response, date, user_id) => {
  const numberWeek = moment(date).locale('uk').week();
  const userDefault = userIdDefault[user_id];
  const existWeek = userDefault && userDefault[numberWeek];

  if (existWeek) {
    const amountExistWeek = existWeek.amount - value;
    getCashOutNatural(
      amountExistWeek,
      response,
      value,
      existWeek,
      user_id,
      numberWeek,
    );
    return;
  }

  const amountDefault = response[keyUrls.cashOutNatural].week_limit.amount - value;
  getCashOutNatural(
    amountDefault,
    response,
    value,
    existWeek,
    user_id,
    numberWeek,
  );
};

import axios from 'axios';
import moment from 'moment';

export const getAll = async (urls) => {
  const requests = urls.map((url) => axios.get(url)
    .then(
      ({ data, request }) => ({
        data, url: request.res.responseUrl,
      }),
    ));

  return axios.all(requests)
    .then(axios.spread((...args) => args));
};

const ApiCashOutNatural = 'https://private-00d723-paysera.apiary-proxy.com/cash-out-natural';
const ApiCashIn = 'https://private-00d723-paysera.apiary-proxy.com/cash-in';
const ApiCashOutJuridical = 'https://private-00d723-paysera.apiary-proxy.com/cash-out-juridical';
const apis = [ApiCashOutNatural, ApiCashIn, ApiCashOutJuridical];

const apiresponses = {};
let user_id_default = {};

getAll(apis).then((res) => {
  res.forEach((e) => {
    apiresponses[e.url] = e.data;
  });
});

const DefaultCashIn = (value) => {
  const percent = (value * apiresponses[ApiCashIn].percents) / 100;
  if (percent > apiresponses[ApiCashIn].max.amount) {
    console.log(apiresponses[ApiCashIn].max.amount);
  } else {
    console.log(percent);
  }
};

const CashOutNatural = (amount, value, existWeek, user_id, NUMBER_WEEK) => {
  let newAmount = amount;
  let newValue = value;
  if (amount < 0) {
    newValue -= existWeek.amount;
    newValue = (newValue * apiresponses[ApiCashOutNatural].percents) / 100;
    newAmount = 0;
  } else if (amount === 0) {
    newValue = 0;
  } else {
    newValue = 0;
  }

  user_id_default = {
    [user_id]: {
      [NUMBER_WEEK]: {
        value: newValue,
        amount: newAmount,
      },
    },
  };
  console.log(user_id_default[user_id][NUMBER_WEEK].value);
};

export const Percent = {
  natural: {
    cash_out: (value, date, user_id) => {
      const NUMBER_WEEK = moment(date).locale('uk').week();
      const USER_DEFAULT = user_id_default[user_id];
      const existWeek = USER_DEFAULT && USER_DEFAULT[NUMBER_WEEK];

      if (USER_DEFAULT && existWeek) {
        const amount = existWeek.amount - value;
        CashOutNatural(amount, value, existWeek, user_id, NUMBER_WEEK);
        return;
      }

      const amount = apiresponses[ApiCashOutNatural].week_limit.amount - value;
      let newAmount = amount;
      let newValue = value;
      if (amount < 0) {
        newValue -= apiresponses[ApiCashOutNatural].week_limit.amount;
        newValue = (newValue * apiresponses[ApiCashOutNatural].percents) / 100;
        newAmount = 0;
      } else if (amount === 0) {
        newValue = 0;
      } else {
        newValue = 0;
      }
      user_id_default = {
        [user_id]: {
          [NUMBER_WEEK]: {
            value: newValue,
            amount: newAmount,
          },
        },
      };
      console.log(user_id_default[user_id][NUMBER_WEEK].value);
    },
    cash_in: (value) => DefaultCashIn(value),
  },
  juridical: {
    cash_out: (value) => {
      if (value > apiresponses[ApiCashOutJuridical].min.amount) {
        console.log((value * apiresponses[ApiCashOutJuridical].percents) / 100);
      }
    },
    cash_in: (value) => DefaultCashIn(value),
  },
};

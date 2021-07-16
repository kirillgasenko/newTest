import { getAllResponses } from './services/getAllResponses.js';
import { getCashOutJuridical } from './helpers/getCashOutJuridical.js';
import { getCashIn } from './helpers/getCashIn.js';
import { getCashOutNaturalDefault } from './helpers/getCashOutNaturalDefault.js';

export async function percentCalculate(data) {
  const response = await getAllResponses();

  const percent = {
    natural: {
      cash_out: getCashOutNaturalDefault,
      cash_in: getCashIn,
    },
    juridical: {
      cash_out: getCashOutJuridical,
      cash_in: getCashIn,
    },
  };

  data.forEach((e) => percent[e.user_type][e.type](e.operation.amount, response, e.date, e.user_id));

  return percent;
}

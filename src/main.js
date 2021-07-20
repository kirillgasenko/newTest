import { getAllResponses } from './services/getAllResponses.js';
import { getCashOutJuridical } from './helpers/getCashOutJuridical.js';
import { getCashIn } from './helpers/getCashIn.js';
import { getCashOutNaturalDefault } from './helpers/getCashOutNaturalDefault.js';

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

export async function percentCalculate(data) {
  const response = await getAllResponses();

  data.forEach((value) => percent[value.user_type][value.type](
    value.operation.amount,
    response,
    value.date,
    value.user_id,
  ));
}

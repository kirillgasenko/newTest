import { percentMain } from './src/main.js';
import { getReadFile } from './src/helpers/getReadFile.js';

percentMain.then((percent) => getReadFile(process.argv[2]).forEach(({
  user_type, type, operation, date, user_id,
}) => percent[user_type][type](operation.amount, date, user_id)));

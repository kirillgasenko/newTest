import fs from 'fs';
import { Percent } from './src/main.js';

const filename = process.argv[2];
const file = fs.readFileSync(filename);
const data = JSON.parse(file);
setTimeout(
  () => data.forEach(({
    user_type, type, operation, date, user_id,
  }) => Percent[user_type][type](operation.amount, date, user_id)),
  5000,
);

import { percentCalculate } from './src/main.js';
import { getDataFromFile } from './src/helpers/getDataFromFile.js';

const data = getDataFromFile(process.argv[2]);
percentCalculate(data);

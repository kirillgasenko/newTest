import fs from 'fs';

export const getDataFromFile = (value) => {
  const file = fs.readFileSync(value);
  const data = JSON.parse(file);
  return data;
};

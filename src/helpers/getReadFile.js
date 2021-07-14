import fs from 'fs';

export const getReadFile = (value) => {
  const file = fs.readFileSync(value);
  const data = JSON.parse(file);
  return data;
};

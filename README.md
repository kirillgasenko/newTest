# Available commands

### `npm start input.json` - command for start

### `npm test` - command for test

### Also, if you want add other json file, you should put file in this directory and after `npm start` write name file

## File structure 

```
├── src
│   ├── helpers
│   │   ├── __test__
│   │   │   ├── getCashIn.test.js
│   │   │   ├── getCashOutJuridical.test.js
│   │   │   ├── getCashOutNaturalDefault.test.js
│   │   │   ├── getDataFromFile.test.js
│   │   │   ├── getDefaultCashIn.test.js
│   │   │   └── getPercents.test.js
│   │   ├── constant.js
│   │   ├── getCashIn.js
│   │   ├── getCashOutJuridical.js
│   │   ├── getDataFromFile.js
│   │   ├── gerDafaultCashIn.js
│   │   └── getPercents.js
│   ├── repositories
│   │   ├── __test__
│   │   │   ├── getApiCashIn.test.js
│   │   │   ├── getApiCashOutJuridical.test.js
│   │   │   └── getApiCashOutNatural.test.js
│   │   ├── getApiCashIn.js
│   │   ├── getCashOutJuridical.js
│   │   └── getApiCashOutNatural.js
│   ├── services
│   │   ├── __test__
│   │   │   └── getAllResponses.test.js
│   │   └── getAllResponses,js
|   └── main.js
├── index.js
├── README.md
├── package-lock.json
├── package.json
└── input.json
```
const parser = require('./2-parser.js');

const test = tokens => {
  total++;
  console.log(`${total}:`);
  try {
    console.log(JSON.stringify(parser(tokens), null, 2));
  } catch (e) {
    console.log(`${e.name}: ${e.message}`);
  }
};

let data = [
  [
    { type: 'paren', value: '(' },
    { type: 'name', value: 'concat' },
    { type: 'string', value: 'foo' },
    { type: 'string', value: 'bar' },
    { type: 'paren', value: ')' },
  ],
  [
    { type: 'paren', value: '(' },
    { type: 'name', value: 'add' },
    { type: 'number', value: '1' },
    { type: 'number', value: '1' },
    { type: 'paren', value: ')' },
    { type: 'paren', value: '(' },
    { type: 'name', value: 'add' },
    { type: 'number', value: '2' },
    { type: 'number', value: '3' },
    { type: 'paren', value: ')' },
  ],
  [
    { type: 'paren', value: '(' },
    { type: 'name', value: 'add' },
    { type: 'number', value: '2' },
    { type: 'paren', value: '(' },
    { type: 'name', value: 'subtract' },
    { type: 'number', value: '4' },
    { type: 'number', value: '2' },
    { type: 'paren', value: ')' },
    { type: 'paren', value: ')' },
  ],
];

let total = 0;
data.map(test);
console.log(`### ${total} tests run. ###`);

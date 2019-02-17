const tokenizer = require('./1-tokenizer.js');

const test = (input, key) => {
  total++;
  log(`${key + 1}: ${input}`);
  try {
    log(tokenizer(input));
    succ++;
  } catch (e) {
    log(`${e.name}: ${e.message}`);
  }
};

let data = [
  '678 99',
  '(123 4)',
  '(add 1 1)(add 2 3)',
  '"sad"',
  '%(add 12 324)',
  '(add 2 (subtract 4 2))',
  '(add 2 32*(subtract 4 2))',
];

let succ = 0;
let total = 0;
let log = () => {};
if (process.argv.slice(2).includes('-L')) {
  log = (input, ...rest) => console.log(input, ...rest);
}
data.map(test);
console.log(
  `### ${total} tests run, ${succ} succeeded, ${Math.trunc(
    (succ / total) * 100,
    2
  )}% rate. ###`
);

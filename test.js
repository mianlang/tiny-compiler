let compiler = require('./5-compiler');

const testCompiler = (input, key) => {
  console.log(`${key + 1}: ${input}`);
  try {
    console.log(compiler(input));
  } catch (e) {
    console.log(`${e.name}: ${e.message}`);
  }
};

let data = [
  '(concat "foo" "bar")',
  '(add 2 (subtract 4 2))',
  '(add 1 1)(concat "foo" "bar")(JSON.stringify (parser "tokens") "null" 2)',
];

data.map(testCompiler);

console.log('######');

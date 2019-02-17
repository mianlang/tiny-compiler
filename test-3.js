var tokenizer = require('./1-tokenizer');
var parser = require('./2-parser');
var transformer = require('./3-transformer');

const testTokenizer = (input, key) => {
  console.log(`${key + 1}: ${input}`);
  try {
    const tokens = tokenizer(input);
    console.log(tokens);
    return tokens;
  } catch (e) {
    console.log(`${e.name}: ${e.message}`);
  }
};

const testParser = (tokens, key) => {
  const ast = parser(tokens);
  console.log(`AST ${key + 1}:`);
  console.log(JSON.stringify(ast, null, 2));
  return ast;
};

const testTransformer = (ast, key) => {
  const newAst = transformer(ast);
  console.log(`new AST ${key + 1}:`);
  console.log(JSON.stringify(newAst, null, 2));
  return newAst;
};

let data = ['(concat "foo" "bar")', '(add 2 (subtract 4 2))', '(add 1 1)(add 2 3)'];

data
  .map(testTokenizer)
  .map(testParser)
  .map(testTransformer);

console.log('######');

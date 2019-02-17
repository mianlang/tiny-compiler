var tokenizer = require('./1-tokenizer');
var parser = require('./2-parser');
var transformer = require('./3-transformer');
var codeGenerator = require('./4-code-generator');

function compiler(input) {
  let tokens = tokenizer(input);
  let ast = parser(tokens);
  let newAst = transformer(ast);
  let output = codeGenerator(newAst);

  return output;
}

module.exports = {
  tokenizer,
  parser,
  transformer,
  codeGenerator,
  compiler,
};

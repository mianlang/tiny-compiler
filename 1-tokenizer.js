function tokenizer(input) {
  let current = 0;
  let tokens = [];

  while (current < input.length) {
    let char = input[current];

    if (char === '(') {
      tokens.push({
        type: 'paren',
        value: '(',
      });
      current++;
      continue;
    }

    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')',
      });
      current++;
      continue;
    }

    const WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }

    const NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {
      let value = '';
      do {
        value += char;
        char = input[++current];
      } while (NUMBERS.test(char));
      tokens.push({
        type: 'number',
        value,
      });
      continue;
    }

    if (char === '"') {
      let value = '';
      char = input[++current];
      while (char !== '"') {
        value += char;
        char = input[++current];
      }
      char = input[++current];
      tokens.push({
        type: 'string',
        value,
      });
      continue;
    }

    const LETTERS = /[a-z.]/i;
    if (LETTERS.test(char)) {
      let value = '';
      do {
        value += char;
        char = input[++current];
      } while (LETTERS.test(char));
      tokens.push({
        type: 'name',
        value,
      });
      continue;
    }

    throw new TypeError('I dont know what this character is: ' + char);
  }

  return tokens;
}

module.exports = tokenizer;

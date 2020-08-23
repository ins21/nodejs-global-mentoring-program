const readline = require('readline');

const readInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

readInput.on('line', value => {
  console.log(value.split('').reverse().join(''));
});

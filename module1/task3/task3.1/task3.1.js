import readline from 'readline';

const readInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readInput.on('line', value => {
  console.log(value.split('').reverse().join(''));
});

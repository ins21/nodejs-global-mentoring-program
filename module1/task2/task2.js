const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream');
const csvtojson = require('csvtojson');

pipeline(
  fs.createReadStream(path.resolve(__dirname, './csv/users.csv')),
  csvtojson(),
  fs.createWriteStream(path.resolve(__dirname, './csv/users.txt')),
  error => console.log(error ? `error: ${error}` : 'completed successfully')
);

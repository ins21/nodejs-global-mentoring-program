import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream';
import csvtojson from 'csvtojson';

pipeline(
  fs.createReadStream(path.resolve(__dirname, './csv/users.csv')),
  csvtojson(),
  fs.createWriteStream(path.resolve(__dirname, './csv/users.txt')),
  error => console.log(error ? `error: ${error}` : 'completed successfully')
);

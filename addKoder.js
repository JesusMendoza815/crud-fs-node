import fs from 'fs';
import { read } from './readKoders.js';

const koder = {
  "id": Math.round(Math.random() * 100),
  "name": "Alfredo",
  "lastName": "Mentor",
  "Age": 29,
  "favoriteFood": "Algo rico x3"
};

let data = {};
fs.readFile('koders.json', (error, content) => {
  if (error) throw error;
  data = JSON.parse(content);
  data["koders"].push(koder);
  fs.writeFile('koders.json', JSON.stringify(data, null, '  '), (error) => {
    if (error) throw error;
    console.log('Koder agregado');
  });
});
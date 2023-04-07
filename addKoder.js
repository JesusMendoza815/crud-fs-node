//2. Crear una funcion que permita agregar un Koder y guardar el arhico con el cambio realizado
import fs from 'fs';

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
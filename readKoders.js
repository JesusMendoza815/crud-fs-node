//1. Crear una funcion que permita leer el archivo e imprimir en consola los koders
import fs from 'fs';

const read = () => {
  fs.readFile('koders.json', (error, content) => {
  if (error) throw error;
  console.log(content.toString());
})};
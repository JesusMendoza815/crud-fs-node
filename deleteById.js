//3. Crear una funcion que permita eliminar a un koder por su id y guardar el archivo con el cambio realizado
import fs from "fs";

let data = {};
const deleteById = (id) => {
  fs.readFile('koders.json', (error, content) => {
    if (error) throw error;
    data = JSON.parse(content);
    data["koders"].forEach((koder, index) => {
      if (id === koder.id) {
        data["koders"].splice(index, 1);
      }
    });
    fs.writeFile('koders.json', JSON.stringify(data, null, '  '), (error) => {
      if (error) throw error;
      console.log('Koder eliminado');
    });
  })
};

deleteById(22);
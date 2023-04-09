//5. Crear una funcion que permita editar a un koder por su id y guardar el archivo con el cambio realizado
import fs from 'fs';

const editKoderById = (id) => {
  let data = {};
  fs.readFile('koders.json', (error, content) => {
    if (error) throw error;
    data = JSON.parse(content);
    data["koders"].forEach((koder, index) => {
      if (id === koder.id) {
        let koderEdited = {
          ...koder,
          //"name": "Edit :)",
          //"lastName": "Edit :3",
          //"Age": 20,
          "favoriteFood": "test editado"
        };
        data["koders"].splice(index, 1, koderEdited);
      }
    });
    fs.writeFile('koders.json', JSON.stringify(data, null, '  '), (error) => {
      if (error) throw error;
      console.log('Koder editado');
    });
  })
};

editKoderById(22)
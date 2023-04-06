import fs from 'fs';
let data = {};

const editKoderById = (id) => {
  fs.readFile('koders.json', (error, content) => {
    if (error) throw error;
    data = JSON.parse(content);
    data["koders"].forEach((koder, index) => {
      if (id === koder.id) {
        let koderEdited = {
          "id": koder.id,
          "name": "Edit :)",
          "lastName": "Edit",
          "Age": 20,
          "favoriteFood": "Edit"
        };
        data["koders"].splice(index, 1, koderEdited);
      }
    });
    fs.writeFile('koders.json', JSON.stringify(data, null, '  '), (error) => {
      if (error) throw error;
      console.log('Koder eliminado');
    });
  })
};

editKoderById(71)
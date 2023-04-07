import fs from 'fs';

const id = process.argv[2];

function getKoderById(idToSearch, callback) {
  idToSearch = parseInt(idToSearch);
  if (!idToSearch) throw new Error(`Id no válida o no ingresada`);
  callback(idToSearch);
};

function getKoder(id) {
  fs.readFile('koders.json', (error, data) => {
    if (error) throw error;
    const kodersList = JSON.parse(data);
    const koder = kodersList["koders"].find(koder => koder.id === id);
    if (!koder) throw new Error(`No se encontró el id ${id}`);
    console.log(koder);
  });
}

getKoderById(id, getKoder);
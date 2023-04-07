//4. Crear una funcion que permita obtener a los koders que sean mayores de 25 años
import fs from "fs";

let data = {};
const getKodersOlders25Years = () => {
  fs.readFile('koders.json', (error, content) => {
    if (error) throw error;
    data = JSON.parse(content);
    data["koders"].forEach(koder => {
      if (koder.Age >= 25) {
        console.log(koder);
      }
    });
  })
};

getKodersOlders25Years();
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
import fs from 'fs';

const read = () => {
  fs.readFile('koders.json', (error, content) => {
  if (error) throw error;
  // console.log(content.toString());
  return content;
})};

export { read };
const fs = require('fs')
const arquivo = process.argv[2];
const itemadd = `\n${process.argv[3]}`;

try{
  fs.appendFileSync(arquivo, itemadd, 'UTF8')
  console.log("\u001b[95m Tarefa adicionada!")
}catch(error){
  console.error(error)
}
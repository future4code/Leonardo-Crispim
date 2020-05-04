// ------------ EXERCICIO 1

// const operacao = process.argv[2];
// const valor1 = Number(process.argv[3]);
// const valor2 = Number(process.argv[4]);

// function Soma (numero1, numero2) {
//     const total = numero1 + numero2
//     return 'O resultado da soma e: ' + total
//   }

// const result = Soma(valor1, valor2)

// console.log(result)


// ------------ EXERCICIO 2

const fs = require('fs')
const arquivo = process.argv[2];
const itemadd = `\n${process.argv[3]}`;

try{
  fs.appendFileSync(arquivo, itemadd, 'UTF8')
  console.log("Tarefa adicionada!")
}catch(error){
  console.error(error)
}

// ------------ EXERCICIO 3

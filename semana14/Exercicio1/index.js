const operacao = process.argv[2];
const valor1 = Number(process.argv[3]);
const valor2 = Number(process.argv[4]);

function Soma (numero1, numero2) {
    if(isNaN(numero1) || isNaN(numero2)){
        console.log("\u001b[95mFavor inserir valores numericos")
    }
    else{
        const total = numero1 + numero2
        return 'O resultado da soma e: ' + total
    }
  }

const result = Soma(valor1, valor2)

console.log(result)
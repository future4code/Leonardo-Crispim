function ex1A(arraySent: number[]){
    const result = {
        soma: 0,
        quantidade: 0,
        multiplicacao: 0
    }

    result.soma = arraySent.reduce((a, b) => a + b)
    result.quantidade = arraySent.length
    result.multiplicacao = arraySent.reduce((a, b) => a * b)

    return result
}

function ex1B(arraySent: number[]){
    const result = {
        maior: 0,
        menor: 0,
    }

    result.maior = arraySent.reduce(function(a, b){
        return (a > b) ? a : b
    })

    result.menor = arraySent.reduce(function(a, b){
        return (a < b) ? a : b
    })

    return result
}


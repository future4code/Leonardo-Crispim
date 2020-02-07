/*

Pre Aula: Remember

1) Escreva uma classe que represente uma Conta Bancária.
 Ela deve conter o nome do usuário, a quantidade do saldo e dois métodos:
  (i) adicione dinheiro a conta; (ii) retire dinheiro da conta. 
  O usuário não deve conseguir tirar dinheiro se a quantia for maior do que ele possuir

Resposta: 

class Conta {
    constructor(nome) {
        this.nome = nome
        this.saldo = 0
    }

    adicionaDinheiro(qtd) {
        this.saldo += qtd
    }

    retiraDinheiro(qtd) {
        if (this.saldo >= qtd) {
            this.saldo -= qtd
        }
    }
}

---

Exercicio em Aula 1 - Callback

Faca um codigo que determine se um numero e impar.
A ideia e que ele receba um unico numero e imprima no terminal "Sim e impar", somente se ele for.

Se nao for nao faca nada

 - Use callback para imprimir no console

Resposta --

function verificaImpar(numero, outraFuncao) {

    if (numero % 2 !== 0) {
        
        const resultado = "É impar"
        outraFuncao(resultado)

    }
}

function mostraResultado(resultado) {

    console.log(resultado)

}

verificaImpar(11, mostraResultado)


----

Exercicio em Aula 2 - Callback

Vamos considerar que os Pokemons tenham outro atributo: "Vida Maxima"
que e um numero correspondente ao valor maximo da vida dos Pokemons.

Faca um codigo que receba uma lista de Pokemons e altere o valor da vida deles para o  valor
maximo possivel.

Utilize o seguinte codigo como base:

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama", vida: 0 },
    { nome: "Charmander", tipo: "fogo", vida: 0 },
    { nome: "Squirtle", tipo: "água", vida: 0 },
]

-

Resposta:

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama", vida: 0, maxlife: 2000},
    { nome: "Charmander", tipo: "fogo", vida: 0, maxlife: 2000 },
    { nome: "Squirtle", tipo: "água", vida: 0, maxlife: 2000 },
]

pokemons.forEach((pokemon, index, array) => {

pokemon.vida = pokemon.maxlife

})

console.log(pokemons)

-----

Exercicio 3 - map (AULA)

Faca um programa que tenha uma lista de numbers (quaisquer valores) e transforme-a numa nova lista,
contendo strings nesse formato:

"O elemento ${index do elemento} e ${valor}"

Resposta:

const MeuGrupo = [33, 25, 49, 51]

const NovoGrupo = MeuGrupo.map((numero, index, array) => {

    return `o elemento ${index} e ${numero}`

})

console.log(NovoGrupo)

-----

Exercicio 4 - Filter (AULA)

Faca um programa que tenha uma lista de numbers (quaisquer valores)

e crie 2 novos arrays:

A) Um que receba somente os numeros maiores que 10

const MeuArray = [3, 26, 34, 41, 55]

const maioresque10 = MeuArray.filter((numero, index, array) =>
    {

    return numero>10

}

)

console.log(maioresque10)

B) um com somente os numeros pares

const MeuArray = [3, 26, 34, 41, 55]

const NumerosPares = MeuArray.filter((numero, index, array) => {

    return numero%2 === 0

})

console.log(NumerosPares)


*/


function CadastrarButton(){
    let despesa = document.getElementById("ValorDespesaID")
    let descricao = document.getElementById("DescricaoID")
    let minvalue = document.getElementById("ValorMinID")
    let maxvalue = document.getElementById("ValorMaxID")

    if (despesa.value === "" || descricao.value === ""){
        alert("Nao e possivel criar despesas com dados vazios!")
    }

    else{

        const DespesaData = [

            { valor: 0, descricao: ""}
        
        ]
    
        DespesaData.valor = despesa.value;
        DespesaData.descricao = descricao.value;
    
        console.log(DespesaData)
    
        despesa.value = ""
        descricao.value = ""
    
        console.log("Inputs do ControladorBox limpos!")

    }

}


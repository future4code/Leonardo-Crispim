/*

------------------------    Exercicios de Interpretacao de codigo

Analise os trechos de código em cada exercício e escreva o que ele faz, 
como faz e qual será o valor impresso no console.

------------------------

1) O programa analisa e calcula o valor da cotacao do dolar inserido pelo usuario e printa no console
o valor inserido em dinheiro (100 nesse exercicio) convertido para seu valor em dolar.

------------------------

2) Esse e um programa de investimendo de valores cujo qual voce pode escolher uma de 4 opcoes, caso o
usuario tente selecionar uma opcao de investimento que seja diferente das 4 ele recebe uma mensagem de erro
informando que o tipo de investimento esta incorreto.


O console printa no final do codigo 2 investimentos, um em "acoes" no valor de 150 e outro que dara
erro, pois nao existe esse tipo de investimento no codigo.

------------------------

3) Esse programa cria um array com 14 elementos chamado numeros[], e diz que para cada elemento dentro
desse array ele ira checar se o numero e par, caso seja o numero sera enviado para o array[1]
caso seja impar ele sera enviado para o array[2]

Apos isso ele printa o tamanho dos 3 arrays

No final do codigo ele mostrara respectivamente no console:

Quantidade total de numeros: 14
6
8

------------------------

4) (25 numbers, first array)

Esse programa cria um array com 25 elementos chamado numeros[], e cria 2 ifs para checar se o elemento
e maior ou menor (respectivamente) do que as variaveis numero1; e numero2;

No final do codigo o console printa as seguintes linhas:

-10
1590

------------------------


*/



//------------------------  Exercicios de Logica de Programacao


// 1) Cite 3 Maneiras de percorrer / iterar uma lista. Faca um programa para exemplificar

//A) Foreach

let Exercicio1LPArray = [11, 20, 33, 40, 55, 60, 77, 80, 99, 110]

//Checar numeros pares do Array

const Ex1LPCheck = () => {

    for(const ex1lpelement of Exercicio1LPArray){

        if(ex1lpelement % 2 === 0){
    
            console.log("O numero: " + ex1lpelement + " e par")
    
        }
    
        else{
    
            console.log("O numero: " + ex1lpelement + " e impar")
            
        }
    }
}

//B) Map

let Exercicio1LPNovoArray = Exercicio1LPArray.map(Ex1LPMult)

//Multiplica os numeros do array antigo e cria um novo

function Ex1LPMult(number){

    return number * 2;

}

//console.log(Exercicio1LPNovoArray)

//C) Filter

//Filtra que tipo de animal com que eu vou ter que lidar hoje

Exercicio1LPStringArray = [

    {name: 'Bob',
    idade: 8,
    tipo: 'dog'},

    {name: 'Nina',
    idade: 2,
    tipo: 'cat'},

    {name: 'XxXPeruHacker23XxX',
    idade: 12,
    tipo: 'PessoaRuimQueJogaNoMeuTimeEmJogosOnline'}

]

let animals = Exercicio1LPStringArray.filter((animal) => {

    return animal.tipo === 'dog';

    }

)

//console.log(animals);


/*

2) Para este exercício considere as seguintes variáveis:

const booleano1 = true
const booleano2 = false
const booleano3 = !booleano2 //true
const booleano4 = !booleano3  //false

Sem rodar nenhum código, diga quais são os valores das expressões lógicas abaixo:

a) booleano1 && booleano2 && !booleano4

Resposta: FALSE

b) (booleano1 && booleano2) || !booleano3

Resposta: FALSE

c) (booleano2 || booleano3) && (booleano4 || booleano1)

Resposta: TRUE

d) !(booleano2 && booleano3) || !(booleano1 && booleano3)

Resposta: TRUE

e) !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

Resposta: TRUE

*/

/* 

3) Você tem que escrever um código que, dado um número **N**, ele imprima (no `console`)
os **N** primeiros números pares 
(por exemplo, se **N** for 3, você deve imprimir 0, 2 e 4; se **N** for 5, deve imprimir 0, 2, 4, 6 e 8)
Um colega seu disse que já começou esta tarefa, mas não conseguiu terminar.
Dê uma olhada no código dele:

        const quantidadeDeNumerosPares
        let i = 0
        while(i <= quantidadeDeNumerosPares) {
          console.log(i*2)
        }

    Este código funciona? Por quê? Caso não funcione, corrija a implementação dele.


Resposta: O Codigo dele nao funciona pois alem de nao criar uma funcao para executar o que ele deseja,
mesmo se ele tivesse criado a mensagem do console estaria errada pois todos os resultados seriam 0

i = 0 --> console.log(i * 2) == 0

*/

function Ex3LPNumerosPares(quantidade){

    for(let i = 0; i < quantidade; i++){
        console.log((i * 2))
    }

}

/* 4)

O exercício é simples, mas mexe com isso. Veja bem: quando nos ensinam triângulos
(uma figura de três lados), nós aprendemos como classifica-los dependendo do tamanho
de seus lados. Se um triângulo possuir os três lados iguais, ele é chamado de "Equilátero".

Se possuir, dois (e somente 2) lados iguais, diz-se que ele é "Isósceles". Se os três lados
tiverem medidas diferentes, ele é "Escaleno". Faça uma função que receba como parâmetro os
tamanhos dos três lados do triângulo: a, b, c  e retorne se ele é equilátero, isósceles ou
escaleno.

*/

function Ex4LPSizeCheck(a, b, c){

    if(a == b && a == c && b == c){
        return "O triangulo e Equilátero"
    }

    if(a == b || b == c || c == a){
        return "O triangulo e Isósceles"
    }

    else{
        return "O triangulo e Escaleno"
    }

}

//console.log(Ex4LPSizeCheck(1,2,3))


/*

5) Faça um programa que, dados dois números,

i. indique qual é o maior,

ii. determine se eles são divisíveis um pelo outro (use o operador `%`) e

iii. determine a diferença entre eles (o resultado deve ser um número positivo sempre)


*/

function Ex5LPNumCheck(num1, num2){
    let maiornumero = 0
    let divisivel1 = ""
    let divisivel2 = ""
    let diferenca1 = 0
    let diferenca2 = 0
    let diferencapos = 0


    if(num1 > num2){

        maiornumero = num1
        diferenca1 = num1 - num2
        diferenca2 = num1 - num2

    }

    if(num1 < num2){

        maiornumero = num2
        diferenca1 = num2 - num1
        diferenca2 = num1 - num2

    }

    if(num1 == num2){

        maiornumero = "Ambos os numeros tem o mesmo valor"
        diferenca = "Nao existe diferenca entre numeros iguais"

    }

    if(num1 % num2 == 0){

        divisivel1 = num1 + " E divisivel por " + num2

    }

    else{

        divisivel1 = num1 + " Nao e divisivel por " + num2

    }

    if(num2 % num1 == 0){

        divisivel2 = num2 + " E divisivel por " + num1

    }

    else{

        divisivel2 = num2 + " Nao e divisivel por " + num1

    }

    if(diferenca1 > diferenca2){

        diferencapos = "A diferenca entre eles e: " + diferenca1

    }

    else{

        diferencapos = "A diferenca entre eles e: " + diferenca2

    }


    console.log("Entrada: " + num1 + " e " + num2)
    console.log("Saida:")
    console.log("O maior numero e: " + maiornumero)
    console.log(divisivel1)
    console.log(divisivel2)
    console.log(diferencapos)

}

//------------------------  Exercicios de Funcoes

//1)
// Escreva uma função que receba um array de números e imprima na tela o segundo maior
// e o segundo menor número. Em seguida, invoque essa função.

const Ex1FUArray = [5, 10, 15, 20, 25, 30, 35, 40]

function Ex1FUCheck(inserirarray){
    let maiornumero = null
    let segundomaior = null
    let menornumero = inserirarray[1]
    let segundomenor = inserirarray[1]

    for(let elemento of inserirarray){

        if(elemento > maiornumero && elemento > segundomaior){

            segundomaior = maiornumero
            maiornumero = elemento

        }

        if(menornumero > segundomenor){

            segundomenor = menornumero

        }

        if(elemento < menornumero){

            menornumero = elemento

        }


    }

    console.log("O segundo maior numero e: " + segundomaior)
    console.log("O segundo menor numero e: " + segundomenor)

}

// 2)Escreva uma **função não nomeada** que faça um alert("Hello Future4");
// Em seguida, invoque essa função.

const Ex2FUNoName = function(){

    return alert("Hello Future4")

}

// let Ex2FUCall = Ex2FUNoName()

//------------------------  Exercicios de Objetos

/*
1) Explique com as suas palavras o que são e quando podemos/devemos utilizar arrays e objetos.

Resposta: 

Arrays sao variaveis cujo qual conseguem armazenar multiplos elementos dentro deles, sendo eles numeros,
strings, bools, etc.

Podem ser usados para se criar listas de dados e os percorrer, adicionando, removendo, ordenando ou
filtrando os elementos dentro deles.

Exemplo: 

Array = ["Elemento1", "elemento2," "elemento3", "elemento4"]

Array = [10, 25, 40, 50, 75]

--

Objetos sao uma coletanea de propriedades, uteis para se criar um elemento feito de valores que pertencem
juntos.

Exemplo:

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama", vida: 0 },
    { nome: "Charmander", tipo: "fogo", vida: 0 },
    { nome: "Squirtle", tipo: "água", vida: 0 },
]

const nomeDosPokemons = pokemons.map((pokemon, index, array) => {

        return pokemon.nome

    }
)

Ira retornar o nome de todos os pokemons.

Ou se voce quiser pode encontrar todos os pokemons de um certo tipo.

const soPokemonsDeGrama = pokemons.filter((pokemon, index, array) => {

    return pokemon.tipo === "grama"

    }
)

*/

//2) Crie uma função chamada criaRetangulo que recebe como parâmetros dois lados (lado1 e lado2)
//e retorna um objeto com 4 informações: 
//largura (lado1), altura (lado2), perímetro (2 * (lado1 + lado2)) e área (lado1 * lado2).

function criaRetangulo(lado1, lado2){

    const RetanguloCriado = [

        {largura: lado1, altura: lado2, perimetro: (2 * (lado1 + lado2)), area: (lado1 * lado2)}

    ]

    return RetanguloCriado;

}

/*

3) Crie um objeto para representar seu filme favorito. 

Ele deve ter as seguintes propriedades: 
título, ano, diretor e atores/atrizes (lista com pelo menos 2 atores/atrizes).

Imprima na tela a seguinte string, baseada nos valores do objeto:
Venha assistir ao filme NOME DO FILME, de ANO, 
dirigido por DIRETOR e estrelado por ATOR 1, ATRIZ 2, ATOR n. 

A lista de atores/atrizes deve ser impressa inteira, independente do tamanho da lista.

*/

const MeuFilmeFavorito = 

    {
    nome: "John Wick", 
    ano: 2006, 
    diretor: "John Williams", 
    Ator1: "Keanu Reeves", 
    Ator2: "Megan Fox", 
    Ator3: "William DaFoe", 
    Ator4: "John Cena"
    }



alert("Venha assistir ao filme: " + MeuFilmeFavorito.nome + " de " + MeuFilmeFavorito.ano +

 "\ndirigido pelo diretor: " + MeuFilmeFavorito.diretor +

 "\ne estrelado por: " + MeuFilmeFavorito.Ator1 + ", " + MeuFilmeFavorito.Ator2 +

 "\n" + MeuFilmeFavorito.Ator3 + " e " + MeuFilmeFavorito.Ator4

)
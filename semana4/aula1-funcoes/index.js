/*

Exercicios em aula - Aula 13

--

Exercicio 1 Funcoes nomeadas

Crie uma funcao que receba um array e imprima cada um dos seus elementos e devolva a quantidade
de elementos nele

Resposta:

function MyFunction(variavel){

    for(const ArrayElement of variavel){

        console.log(ArrayElement)

    }

    return variavel.length

}

const MeuArray = [5, 10, 15, 20, 25, 30, 35]

const comprimento = MyFunction(MeuArray)

console.log("O tamanho do array e: " + comprimento)

--

Exercicio 2 - Funcoes nao nomeadas

Faca uma funcao nao nomeada que receba um numero e devolva um string dizendo se ele e par ou impar

Resposta:

let funcao = function(number){

    if(number % 2 == 0){
        resposta = "O numero e par"
    }

    else{
        resposta = "O numero e impar"
    }

    return resposta

}

let resposta = ""

console.log("A resposta e: " + funcao(4))

--

Exercicios da Tarde --

Exercicio 1 -

A) []

B) [0, 1, 0, 1, 2, 3]

C) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

--

Exercicio 2 -

A) 0, 2, Undefined

B) Funcionaria, voce estaria adicionando o array em um parametro e pedindo a posicao do numero requisitado
dentro do array.

--

Exercicio 3 -

Ele esta criando um loop para somar todos os elementos do array no ResultadoA
e multiplicar todos os elementos do array no ResultadoB

Um nome melhor pra essa funcao seria: "SomaMult"

--

Exercicio 4 -

A)

function CalculateDoggo(humanyears){

    let DogYears = humanyears * 7

    return DogYears

}

console.log(CalculateDoggo(10))

-

B) 

function DadosCliente(Nome, Idade, Address, Student){

    if(Student == true){
        Student = "sou estudante"
    }

    else{
        Student = "nao sou estudante"
    }

    return "Eu sou " + Nome + " tenho " + Idade + ", " + "moro em " + Address + " e " + Student 

}

console.log(DadosCliente("Joao", 15, "Paunalomba", true))

--

Exercicio 5 -

function MyFunction(numero){

    let anoromano = ""

    switch (true){
        
        case (numero > 1000 && numero <= 1100):
            anoromano = "XI"
            break;

        case (numero > 1101 && numero <= 1200):
            anoromano = "XII"
            break;

        case (numero > 1201 && numero <= 1300):
            anoromano = "XIII"
            break;

        case (numero > 1301 && numero <= 1400):
            anoromano = "XIV"
            break;    
    
        case (numero > 1401 && numero <= 1500):
            anoromano = "XV"
            break;
    
        case (numero > 1501 && numero <= 1600):
            anoromano = "XVI"
            break;

        case (numero > 1601 && numero <= 1700):
            anoromano = "XVII"
            break;

        case (numero > 1701 && numero <= 1800):
            anoromano = "XVIII"
            break;

        case (numero > 1801 && numero <= 1900):
            anoromano = "XIX"
            break;

        case (numero > 1901 && numero <= 2000):
            anoromano = "XX"
            break;

        case (numero > 2001 && numero <= 2100):
            anoromano = "XXI"
            break;

    }

    return "O ano " + numero + " Pertence ao seculo " + anoromano

}

console.log(MyFunction(1356))

--

Exercicio 6 -

A)

const umarray = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function MyFunction(umarray){

    return umarray.length

}

console.log(MyFunction(umarray))

-

B)

const umarray = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function MyFunction(umarray){

    if(umarray % 2 == 0){
        return "O numero e par"
    }

    else{
        return "O numero e impar"
    }

}

console.log(MyFunction(5))

-

C)

const umarray = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function MyFunction(umarray){

    let EvenNumbers = 0

    for(let numcheck of umarray){

        if(numcheck % 2 == 0){

            EvenNumbers++;

        }

    }

    return EvenNumbers

}

console.log(MyFunction(umarray))

-

D)

const umarray = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function MyFunction(umarray){

    let EvenNumbers = 0

    for(let numcheck of umarray){

        if(numcheck % 2 == 0){

            EvenNumbers++;

        }

    }

    if(EvenNumbers % 2 == 0){
        return "O numero e par"
    }

    else{
        return "O numero e impar"
    }

}

console.log(MyFunction(umarray))

--

*/













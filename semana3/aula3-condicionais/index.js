/*

Exercicio 1) 

Ele pede um numero para o usuario para testar se o numero e par ou impar.

Para verificar isso ele divide o numero e verifica se existe sobra da divisao

Apos isso ele mostra a mensagem que passou no teste para os numeros cujo qual a resposta for 0

Igualmente ele mostra que nao passou se o numero for = ou maior que 1

--

Exercicio 2)

A) Serve para selecionar um tipo de fruta e mostrar para o usuario seu respectivo preco

B) O preço da fruta Maçã é R$2.25

C) R$24,55

D) O preço da fruta  Pêra  é  R$  5

--

Exercicio 3)

Havera uma mensagem de erro, pois a variavel mensagem foi definida dentro do bloco do IF, podendo somente
ser acessada dentro daquele bloco, ja o console log tenta disponibilizar a variavel sendo que ela nao foi definida fora do bloco, entao nao tem acesso ao seu valor, retornando uma variavel indefinida

--

Exercicio 4)

A) const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número")

if(numero1 > numero2){
    console.log("O maior numero e: " + numero1 + " E o menor numero e: " + numero2)
}
    else if(numero2 > numero1){
        console.log("O maior numero e: " + numero2 + " E o menor numero e: " + numero1)
    }

    else{
        console.log("Ambos os numeros tem o mesmo valor")
    }

B) 

const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o segundo numero")
const numero3 = prompt("Digite o terceiro numero")

if(numero1 > numero2 && numero1 > numero3){

    if(numero2 > numero3){
        console.log("O maior numero e: " + numero1 + " o segundo maior e: " + numero2 + " e o menor e: " + numero3)
    }

    if(numero3 > numero2){
        console.log("O maior numero e: " + numero1 + " o segundo maior e: " + numero3 + " e o menor e: " + numero2)
    }
}

else if (numero2 > numero1 && numero2 > numero3){

    if(numero1 > numero3){
        console.log("O maior numero e: " + numero2 + " o segundo maior e: " + numero1 + " e o menor e: " + numero3)
    }

    if(numero3 > numero1){
        console.log("O maior numero e: " + numero2 + " o segundo maior e: " + numero3 + " e o menor e: " + numero1)
    }
}

else if (numero3 > numero1 && numero3 > numero2){

    if(numero1 > numero2){
        console.log("O maior numero e: " + numero3 + " o segundo maior e: " + numero1 + " e o menor e: " + numero2)
    }

    if(numero2 > numero1){
        console.log("O maior numero e: " + numero3 + " o segundo maior e: " + numero2 + " e o menor e: " + numero1)
    }
}

else if (numero1 === numero2 && numero1 === numero3){
    console.log("Todos os numeros sao iguais")
}

C) const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o segundo numero")
const numero3 = prompt("Digite o terceiro numero")

if(numero1 > numero2 && numero1 > numero3){

    if(numero2 > numero3){
        console.log("O maior numero e: " + numero1 + " o segundo maior e: " + numero2 + " e o menor e: " + numero3)
    }

    if(numero3 > numero2){
        console.log("O maior numero e: " + numero1 + " o segundo maior e: " + numero3 + " e o menor e: " + numero2)
    }
}

else if (numero2 > numero1 && numero2 > numero3){

    if(numero1 > numero3){
        console.log("O maior numero e: " + numero2 + " o segundo maior e: " + numero1 + " e o menor e: " + numero3)
    }

    if(numero3 > numero1){
        console.log("O maior numero e: " + numero2 + " o segundo maior e: " + numero3 + " e o menor e: " + numero1)
    }
}

else if (numero3 > numero1 && numero3 > numero2){

    if(numero1 > numero2){
        console.log("O maior numero e: " + numero3 + " o segundo maior e: " + numero1 + " e o menor e: " + numero2)
    }

    if(numero2 > numero1){
        console.log("O maior numero e: " + numero3 + " o segundo maior e: " + numero2 + " e o menor e: " + numero1)
    }
}

else if (numero1 === numero2 && numero1 === numero3){
    console.log("Favor insira pelo menos um numero diferente")
}

--

Exercicio 5)

Diagrama: https://drive.google.com/open?id=1KumiNfRdB6Uf-GzeWR6vi1vqRQ-NphP8


*/

let vertebrado
let pelos
let racional
let penas
let terrestre
let aquatico

vertebrado = prompt("O animal descoberto e vertebrado? s/n")

if(vertebrado == "n"){

    console.log("O animal e invertebrado")

}

else{

    pelos = prompt("O animal tem pelos? s/n")

    if(pelos == "s"){

        racional = prompt("O animal e racional? s/n")

        if(racional == "s"){

            console.log("O animal e um ser humano")

        }

        else{
            console.log("O animal e um mamifero nao humano")
        }

    }

    else{

        penas = prompt("O animal tem penas? s/n")

        if(penas == "s"){

            console.log("O animal e uma ave")

        }

        else{
            
            terrestre = prompt("O animal e terrestre? s/n")

            if(terrestre == "n"){

                console.log("O animal e um peixe")

            }

            else{

                aquatico = prompt("O animal passa parte de sua vida em um ambiente aquatico? s/n")

                if(aquatico == "s"){

                    console.log("O animal e um anfibio")

                }

                else{

                    console.log("O animal e um reptil")
                    
                }

            }
        }
    }
}

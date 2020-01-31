/*

Exercicio 1) O codigo cria uma variavel 0 e checa para ver se ela ainda e menor do que 15, toda vez que isso for true a variavel recebe +1

Apos chegar ao 15 o console mostra a variavel (agora 15)

--

Exercicio 2)

A) Ele adiciona um novo elemento ao Array

B) Array [10, 15, 25, 30]

C) 12, 15, 18, 21, 27, 30

Se fosse 4: 12

--

Exercicio 3)

A) const ArrayOriginal = [0, 1, 2, 3, 4]

let maiornumero = 0

let menornumero = 100

for (let numcheck of ArrayOriginal){

    if(numcheck > maiornumero){

        maiornumero = numcheck

    }

    if(numcheck < menornumero){

        menornumero = numcheck
    }
    
} 

console.log("O maior numero e " + maiornumero)
console.log("O menor numero e " + menornumero)

-

B) const ArrayOriginal = [10, 20, 30, 40, 50]

let NovoArray = []

for (let numcheck of ArrayOriginal){

    NovoArray.push(numcheck / 10)

} 

console.log(NovoArray)

-

C) const ArrayOriginal = [1, 2, 3, 4, 5]

let NovoArray = []

for (let numcheck of ArrayOriginal){

    if(numcheck % 2 == 0){

        NovoArray.push(numcheck)

    }

} 

console.log(NovoArray)

-

D) const ArrayOriginal = [10, 20, 30, 40, 50]

let NovoArray = []

let currentindex = 0

for (let numcheck of ArrayOriginal){

    NovoArray.push("O elemento do index " + currentindex + " e " + numcheck)
    currentindex++;

} 

console.log(NovoArray)

---

Desafio 1) 

0
00
000
0000

Desafio 2)

let numeroprincipal = prompt("Vamos jogar!")

let numerodechutes = 0

for(let numerochutado = undefined; numerochutado != numeroprincipal;){

    numerochutado = prompt("Chute um numero!")
    console.log("O numero chutado foi: " + numerochutado)

    if(numerochutado > numeroprincipal){
        console.log("Errou. O número escolhido é menor")
    }

    if(numerochutado < numeroprincipal){
        console.log("Errou. O número escolhido é maior")
    }

    numerodechutes++;

}

console.log("Acertou!")
console.log("O numero de tentativas foi: " + numerodechutes)




*/



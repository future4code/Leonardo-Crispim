/*

Exercicio 1 - DOM - (AULA)

Faca um site que, ao ser renderizado, adicione atraves do JS
5 textos quaisquer com a cor azul, um do lado do outro
igualmente espacados

Resposta: 

const FiveText = document.getElementById("Test1")

FiveText.innerHTML += "<p>Texto</p>"
FiveText.innerHTML += "<p>Texto</p>"
FiveText.innerHTML += "<p>Texto</p>"
FiveText.innerHTML += "<p>Texto</p>"
FiveText.innerHTML += "<p>Texto</p>"

--

HTML:

    <div id="Test1">

    </div>

--

CSS:

#Test1{
    display: flex;
    justify-content: space-evenly;
    color: blue;
}

-----------------------------------------

Exercicio 2 - DOM - (AULA)

Faca um site que, toda vez que o usuario clicar em um botao, mostre quantos clicks ele deu

let ButtonClicks = 0

function AddClick(){
    let Elemento = document.getElementById("Resposta")

    ButtonClicks++;

    Elemento.innerHTML = "O botao foi apertado um total de: " + ButtonClicks + " vezes!"

    console.log("Pressionado!")

}

--

HTML:

    <button onclick="AddClick()">Me Pressione!</button>

    <br>

    <div id="Resposta">

    </div>



-----------------------------------------

Exercicio 3 - DOM - (AULA)

Faca um site de uma lista de compras de supermercado. O Site deve ter:

1) Um campo de input do item

2) Um botao para criar o item na lista

Resposta: 

function AddItem(){
    let Grocery = document.getElementById("ItemInput")
    let Listto = document.getElementById("Listadecompras")

    Listto.innerHTML += "<p>" + Grocery.value + "</p>"

}

--

HTML: 

 <input id="ItemInput" type="text">

    <br>

    <button onclick=AddItem()>Adicionar Item</button>

    <br>

    <div id="Listadecompras">

    </div>

-----------------------------------------



*/



import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!")

 if(confirm("Deseja iniciar outra rodada?")) {

   let pontuacaousuario = 0;
   let pontuacaocomputador = 0;
   let acecheck = 0;
   let cartascomputador = ""
   let pass = false;

   let carta = comprarCarta(); 

   let cartasjogador = carta.texto + " "
   pontuacaousuario += carta.valor;

   if(carta.valor == "11"){
      acecheck++;
   }

   carta = comprarCarta(); 

   while(acecheck == 1 && carta.valor == 11){
      carta = comprarCarta();
   }

   if(carta.valor == "11"){
      acecheck++;
   }

   cartasjogador += carta.texto + " "
   pontuacaousuario += carta.valor;


   acecheck = 0;
   
   carta = comprarCarta(); 

   if(carta.valor == "11"){
      acecheck++;
   }

   cartascomputador = carta.texto + " "

   pontuacaocomputador += carta.valor;

   while(pontuacaousuario < 21 && pass == false){  

      if(confirm("Suas cartas são " + cartasjogador + "\n" + "A carta revelada do computador e: " + cartascomputador + "\n" + "Deseja comprar mais uma carta?")){
         carta = comprarCarta(); 
         cartasjogador += carta.texto + " "
         pontuacaousuario += carta.valor;
         pass = false;
      }

      else{
         pass = true;
      }
   }

   carta = comprarCarta(); 

   while(acecheck == 1 && carta.valor == 11){
      carta = comprarCarta();
   }

   if(carta.valor == "11"){
      acecheck++;
   }

   cartascomputador += carta.texto + " "
   pontuacaocomputador += carta.valor;

   if(pontuacaousuario == 21){
      alert("21! O jogador venceu!")
      console.log("Usuario - cartas: " + cartasjogador + "pontuacao: " + pontuacaousuario)
      console.log("Computador - cartas: " + cartascomputador + "pontuacao: " + pontuacaocomputador)
      console.log("O jogador venceu!")
   }

   else if(pontuacaousuario < 21){

      while(pontuacaocomputador < 21 && pontuacaocomputador < pontuacaousuario){  

            carta = comprarCarta(); 
            cartascomputador += carta.texto + " "
            pontuacaocomputador += carta.valor;
   
      }
   
   
      console.log("Usuario - cartas: " + cartasjogador + "pontuacao: " + pontuacaousuario)
      console.log("Computador - cartas: " + cartascomputador + "pontuacao: " + pontuacaocomputador)
   
   
      if(pontuacaocomputador > pontuacaousuario && pontuacaocomputador < 21){
         console.log("O computador ganhou!")
      }
   
      else if(pontuacaocomputador < pontuacaousuario){
         console.log("O usuario ganhou!")
      }

      else if(pontuacaocomputador > 21){
         console.log("O computador estourou!")
         console.log("O usuario ganhou!")
      }
   
      else{
         console.log("Empate!")
      }

   }

   else{
      alert("Estourou! o Computador venceu!")
      console.log("Usuario - cartas: " + cartasjogador + "pontuacao: " + pontuacaousuario)
      console.log("Computador - cartas: " + cartascomputador + "pontuacao: " + pontuacaocomputador)
      console.log("O computador venceu!")
   }
   
}

   else {

   console.log("O jogo acabou")
   
   }
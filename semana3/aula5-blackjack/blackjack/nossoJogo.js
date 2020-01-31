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

   let carta = comprarCarta(); 

   let cartasjogador = carta.texto + " "

   pontuacaousuario += carta.valor;

   carta = comprarCarta(); 

   cartasjogador += carta.texto + " "
   pontuacaousuario += carta.valor;


   console.log("Usuario - cartas: " + cartasjogador + "pontuacao: " + pontuacaousuario)

   
   carta = comprarCarta(); 

   let cartascomputador = carta.texto + " "

   pontuacaocomputador += carta.valor;

   carta = comprarCarta(); 

   cartascomputador += carta.texto + " "
   pontuacaocomputador += carta.valor;

   console.log("Computador - cartas: " + cartascomputador + "pontuacao: " + pontuacaocomputador)

   if(pontuacaocomputador > pontuacaousuario){
      console.log("O computador ganhou!")
   }

   else if(pontuacaocomputador < pontuacaousuario){
      console.log("O usuario ganhou!")
   }

   else{
      console.log("Empate!")
   }
   
} else {

   console.log("O jogo acabou")
   
}
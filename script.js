let pares = 0;

function modoJogo() {
    pares = prompt('Com quantas cartas você deseja jogar? (números pares entre 4 e 14)');
}
modoJogo();

// max 14 second prompt for letting the user know

while (pares < 4 || pares%2 !== 0 || pares > 14) {
        modoJogo();
    }
console.log(pares);

//randomizador 
function comparador() { 
	return Math.random() - 0.5; 
}

let qtdeCards = ['oi', 'ola'];
let cardSelecionado = [];
function clonaArray () {
    cardSelecionado = [...qtdeCards];
    console.log(cardSelecionado);
}

clonaArray ();

let deck = [];
deck.push.apply(deck, qtdeCards);
deck.push.apply(deck, cardSelecionado);

console.log(deck.length);

const opcoesGif = ['bobross', 'explody', 'fiesta', 'metal', 'revertit', 'triplets', 'unicorn'];



let teste;

function addImg () {
    //teste = document.querySelector('main');
    for(let i = 0; i < pares; i++) {
        teste = document.querySelector('main');
    teste.innerHTML += `<div class="card">
    <div class="front-face face" onclick="rotacionaCarta(this)">
      <img class="imgVerso" src="./img/back.png" alt="">
    </div>
    <div class="back-face face">
      <img class="gifReveal" src="./img/bobrossparrot.gif" alt="">
    </div>
  </div>`
}
}

addImg ();








/*function rotacionaCarta(cartaRotacionada) {
    console.log(cartaRotacionada);
}*/
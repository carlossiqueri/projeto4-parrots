let pares = 0;
let opcoesGif = [
  './img/bobrossparrot.gif',
  './img/explodyparrot.gif',
  './img/fiestaparrot.gif',
  './img/metalparrot.gif',
  './img/revertitparrot.gif',
  './img/tripletsparrot.gif',
  './img/unicornparrot.gif'
]
function modoJogo() {
    pares = prompt('Com quantas cartas você deseja jogar? (números pares entre 4 e 14)');
    pares = Number(pares);
}
modoJogo();

while (pares < 4 || pares%2 !== 0 || pares > 14) {
        modoJogo();
    }

//randomizador 
function comparador() { 
	return Math.random() - 0.5; 
}

let deck = [];
const numPares = Number(pares/2);
for (let i = 0; i < numPares; i++){
  deck.push(opcoesGif[i]);
  deck.push(opcoesGif[i]);
}

console.log(deck);

deck.sort(comparador);

let imgJogo;

function addImg () {
    for(let i = 0; i < pares; i++) {
        imgJogo = document.querySelector('main');
    imgJogo.innerHTML += `<div class="card">
    <div class="front-face face" onclick="rotacionaCarta(this)">
      <img class="imgVerso" src="./img/back.png" alt="">
    </div>
    <div class="back-face face">
      <img class="gifReveal" src="${deck[i]}" alt="">
    </div>
  </div>`
}
}

addImg ();


let pares = 0;
let opcoesGif = [
  "./img/bobrossparrot.gif",
  "./img/explodyparrot.gif",
  "./img/fiestaparrot.gif",
  "./img/metalparrot.gif",
  "./img/revertitparrot.gif",
  "./img/tripletsparrot.gif",
  "./img/unicornparrot.gif",
];
function modoJogo() {
  pares = prompt(
    "Com quantas cartas você deseja jogar? (números pares entre 4 e 14)"
  );
  pares = Number(pares);
}
modoJogo();

while (pares < 4 || pares % 2 !== 0 || pares > 14) {
  modoJogo();
}

//randomizador
function comparador() {
  return Math.random() - 0.5;
}

let deck = [];
const numPares = Number(pares / 2);
for (let i = 0; i < numPares; i++) {
  deck.push(opcoesGif[i]);
  deck.push(opcoesGif[i]);
}
// Randomiza as cartas de acordo com a quantidade selecionada pelo usuario
deck.sort(comparador);

let imgJogo;

// adiciona as cartas na tela
function addImg() {
  for (let i = 0; i < pares; i++) {
    imgJogo = document.querySelector("main");
    let cardAdd = `
    <div class="card" onclick="rotacionaCarta(this)">
      <div class="front-face face">
        <img class="imgVerso" src="./img/back.png" alt="">
      </div>
      <div class="back-face face">
        <img class="gifReveal" src="${deck[i]}" alt="">
      </div>
    </div>`;

    imgJogo.innerHTML += cardAdd;
  }
}

addImg();

function rotacionaCarta(cardRevelado) {
  const revelado = cardRevelado.querySelector(".front-face");
  const escondido = cardRevelado.querySelector(".back-face");
  // se uma ou nenhuma carta foi virada e se o elemento clicado não foi virado ainda{}

  const rotacionado = document.querySelectorAll('[class*="cardRotacionado"]');
  console.log(rotacionado.length);
  

  if(rotacionado.length <= 1 && cardRevelado.contains('.cardRotacionado') == false){
  revelado.classList.add("cardRotacionado");
  escondido.classList.add("gifRevelado");
  }

  // if (cardRevelado.length <= 1 && cardRevelado.contains('.cardRotacionado') == false){
  //   revelado.classList.add("cardRotacionado");
  //   escondido.classList.add("gifRevelado");
  // }
  
}

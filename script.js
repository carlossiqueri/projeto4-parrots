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
    <div class="card" data-test="card">
        <img class="front-face face" data-test="face-down-image" src="./img/back.png" alt="">
        <img class="back-face face" data-test="face-up-image" src="${deck[i]}" alt="">
    </div>`;

    imgJogo.innerHTML += cardAdd;
  }
}
addImg();

const cards = document.querySelectorAll(".card");
function rotacionaCard() {
  let selecionado = document.querySelectorAll(".selecionado");

  if (
    selecionado.length <= 1 &&
    this.classList.contains("selecionado") == false
  ) {
    this.classList.add("cardRotacionado");
    this.classList.add("selecionado");
    setTimeout(confere, 1500);
  }
}

cards.forEach((card) => card.addEventListener("click", rotacionaCard));

let cliques = 0;
function confere() {
  let selecionado = document.querySelectorAll(".selecionado");
  if (selecionado.length === 2) {
    if (
      selecionado[0].querySelector(".back-face").src !=
      selecionado[1].querySelector(".back-face").src
    ) {
      selecionado[0].classList.remove("cardRotacionado");
      selecionado[0].classList.remove("selecionado");
      selecionado[1].classList.remove("cardRotacionado");
      selecionado[1].classList.remove("selecionado");
      cliques += 2;
    } else {
      selecionado[0].classList.remove("selecionado");
      selecionado[1].classList.remove("selecionado");
      cliques += 2;
      encerra();
    }
  }
}

function encerra() {
  let acertos = document.querySelectorAll(".cardRotacionado");
  console.log(cliques);
  if (acertos.length == pares) {
    alert(`Você ganhou em ${cliques} jogadas!`);
  }
}

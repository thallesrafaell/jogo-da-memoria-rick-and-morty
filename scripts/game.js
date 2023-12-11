const grid = document.querySelector(".grid");
const player = document.querySelector(".player");
const timer = document.querySelector(".timer");

const character = [
  "beth",
  "jerry",
  "jessica",
  "morty",
  "pessoa-passaro",
  "pickle-rick",
  "rick",
  "summer",
  "meeseeks",
  "scroopy",
];

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll(".disabled_card").length;
  if (disabledCards === 20) {
    clearInterval(this.loop);
    alert(`Parabéns ${player.innerHTML} seu tempo foi ${timer.innerHTML}`);
  }
};
const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

let firstCard = "";
let secondCard = "";

const checkCards = () => {
  const firstCaracter = firstCard.getAttribute("data-character");
  const secondCaracter = secondCard.getAttribute("data-character");

  if (firstCaracter === secondCaracter) {
    firstCard.firstChild.classList.add("disabled_card");
    secondCard.firstChild.classList.add("disabled_card");

    firstCard = "";
    secondCard = "";

    checkEndGame();
  } else {
    setTimeout(() => {
      console.log("deu certo");
      firstCard.classList.remove("reveal_card");
      secondCard.classList.remove("reveal_card");

      firstCard = "";
      secondCard = "";
    }, 500);
  }
};

const revealCard = ({ target }) => {
  if (target.parentNode.className.includes("reveal_card")) {
    return;
  }

  if (firstCard === "") {
    target.parentNode.classList.add("reveal_card");
    firstCard = target.parentNode;
  } else if (secondCard === "") {
    target.parentNode.classList.add("reveal_card");
    secondCard = target.parentNode;

    checkCards();
  }
};

const createCard = (character) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url(../assets/images/${character}.png)`;

  card.appendChild(front);
  card.appendChild(back);

  card.setAttribute("data-character", character);
  card.addEventListener("click", revealCard);

  return card;
};

const loadGame = () => {
  const duplicateCharacters = [...character, ...character];
  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });
};

const startTimer = () => {
  this.loop = setInterval(() => {
    const currentTime = parseInt(timer.innerHTML);
    timer.innerHTML = currentTime + 1;
  }, 1000);
};

window.onload = () => {
  const playerName = localStorage.getItem("player");
  player.innerHTML = playerName;

  startTimer();
  loadGame();
};

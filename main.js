/*----- cached elements -----*/
const board = document.querySelector("#board");
const facedownEls = document.querySelectorAll(".facedown");
const faceupEls = document.querySelectorAll(".faceup");
const cards = document.querySelectorAll(".flip-card");
const playAgainBtn = document.querySelector(".button");
const instrMessage = document.querySelector(".instructions");
const winningMes = document.getElementById("winner");
/*----- constants -----*/

/*----- state variables -----*/
let time;
let flips;
let chosen;
let matches;
let timerInterval;
let matchedPairs;
let instruction;
let winningMessage;
let gameStarted = false;

/*----- event listeners -----*/

playAgainBtn.addEventListener("click", initialize);
function on() {
  instrMessage.style.display = "block";
}

function off() {
  instrMessage.style.display = "none";
  gameStarted = true;
  // Set up a timer to update the timer display every second
  timerInterval = setInterval(() => {
    time++;
    render();
  }, 1000);
}
function showWinningMessage() {
  winningMes.style.display = "block";
}
// This function handles clicks on the cards.
board.addEventListener("click", flipCard);
function flipCard(evt) {
  if (!gameStarted) {
    return;
  }
  const cardContainer = evt.target.closest(".flip-card-inner");
  if (cardContainer && !cardContainer.classList.contains("flipped")) {
    cardContainer.style.transform = "rotateY(180deg)";
    cardContainer.classList.add("flipped");
    chosen.push(cardContainer.dataset.id);
    flips++;
    if (chosen.length === 2) {
      render();
      chosen = [];
    }
  }
}

/*----- functions -----*/
// This function initializes the game state and sets up the timer.
initialize();

function initialize() {
  const faceupArr = [...faceupEls];
  time = 0;
  flips = 0;
  chosen = [];
  matches = 0;
  matchedPairs = [];
  instruction =
    "Match the ingredient to the food as fast as possible <br> Click Here to <strong>START</strong>";
  (function shuffle() {
    cards.forEach((card) => {
      let shuffled = Math.floor(Math.random() * 12);
      card.style.order = shuffled;
    });
  })();

  // Hide the winning message
  winningMes.style.display = "none";
  //Display instruction
  instrMessage.innerHTML = instruction;

  const flippedEls = document.querySelectorAll(".flipped");
  flippedEls.forEach((card) => {
    card.classList.remove("flipped", "matched");
    card.style.transform = "rotateY(0deg)";
  });
  render(); // render the initial game state
}

// This function updates the game state and re-renders the board.
function render() {
  const timerEl = document.querySelector("#timer");
  timerEl.textContent = time;
  const flipCountEl = document.querySelector("#flips");
  flipCountEl.textContent = flips;
  winningMessage = `You matched all pairs in ${time} Seconds with ${flips} Flips Can you do better?`;

  const flippedEls = document.querySelectorAll(".flipped:not(.matched)");
  if (flippedEls.length === 2) {
    const [card1, card2] = flippedEls;
    const isMatch = card1.dataset.id === card2.dataset.id;
    if (isMatch) {
      card1.classList.add("matched");
      card2.classList.add("matched");
      matchedPairs.push([card1.dataset.id, card2.dataset.id]);
      matches = 0;
    } else {
      setTimeout(() => {
        card1.style.transform = "rotateY(0deg)";
        card1.classList.remove("flipped");
        card2.style.transform = "rotateY(0deg)";
        card2.classList.remove("flipped");
      }, 1000);
    }
  } // Check if all pairs have been matched
  if (matchedPairs.length === 6) {
    clearInterval(timerInterval);
    time = 0;
    winningMes.innerText = winningMessage;
    showWinningMessage();
  }
}

const diceEl = document.querySelector(".dice");
const rollDise = document.querySelector(".btn--roll");
const holdDice = document.querySelector(".btn--hold");
const newDice = document.querySelector(".btn--new");

diceEl.style.display = "none";
let currentScore = 0;
let activePlayer = 0;
const totalScore = [0, 0];
let gameOver = true;

rollDise.addEventListener("click", () => {
  if (gameOver) {
    const randomNumbers = Math.trunc(Math.random() * 6) + 1;
    diceEl.style.display = "block";
    currentScore += randomNumbers;
    diceEl.src = `dice-${randomNumbers}.png`;

    if (randomNumbers !== 1) {
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer == 0 ? 1 : 0;
      currentScore = 0;
      document.querySelector(".player--0").classList.toggle("player--active");
      document.querySelector(".player--1").classList.toggle("player--active");
    }
  }
});

holdDice.addEventListener("click", () => {
  if (gameOver) {
    totalScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];

    if (totalScore[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      gameOver = false;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer == 0 ? 1 : 0;
      currentScore = 0;
      document.querySelector(".player--0").classList.toggle("player--active");
      document.querySelector(".player--1").classList.toggle("player--active");
    }
  }
});
newDice.addEventListener("click", () => {
  window.location.reload();
});

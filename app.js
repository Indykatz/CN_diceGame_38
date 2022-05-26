// Dice game JS

const topTextArea = document.getElementById("textArea");
const restart = document.getElementById("restart");
const rolldice = document.getElementById("rolldice");
const count = document.getElementById("count");
const roll = document.getElementById("roll");
const score = document.getElementById("score");

// game var
let gameCount = 0;
let gameScore = 0;
let diceRoll = 0;

// event listener for new game
restart.addEventListener("click", () => {
  newGameFunc();
});

// new game function
const newGameFunc = () => {
  topTextArea.textContent = "Score 21 to win! Game Over if roll a 1";
  gameCount = 0;
  gameScore = 0;
  diceRoll = 0;
  count.textContent = gameCount;
  roll.textContent = gameScore;
  score.textContent = diceRoll;
};

rolldice.addEventListener("click", () => {
  if (gameScore < 21 && diceRoll != 1 && count.textContent != `-`) {
    rollDiceFunc();
  }
});

// random Dice roll function
const diceNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// roll dice function
const rollDiceFunc = () => {
  diceRoll = diceNumber(1, 6);
  if (diceRoll == 1) {
    oneRolled();
  } else {
    logScore();
  }
};

// oneRolled  function
const oneRolled = () => {
  topTextArea.textContent = `ROLLED A ${diceRoll} GAME OVER`;
};

// next round function
const logScore = () => {
  gameCount += 1;
  count.textContent = gameCount;
  roll.textContent = diceRoll;
  gameScore += diceRoll;
  score.textContent = gameScore;
  if (gameScore > 21) {
    topTextArea.textContent = `GAME LOST YOU SCORED ${gameScore}`;
  } else {
    if (gameScore == 21) {
      topTextArea.textContent = `GAME WON YOU SCORED ${gameScore}`;
    }
  }
};

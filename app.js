// Dice game JS

const topTextArea = document.getElementById("textArea");
const restart = document.getElementById("restart");
const rolldice = document.getElementById("rolldice");
const count = document.getElementById("count");
const roll = document.getElementById("roll");
const score = document.getElementById("score");

// dice dot elements
const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
const d3 = document.getElementById("d3");
const d5 = document.getElementById("d5");
const d7 = document.getElementById("d7");
const d8 = document.getElementById("d8");
const d9 = document.getElementById("d9");

// game var
let gameCount = 0;
let gameScore = 0;
let diceRoll = 0;

// event listener for new game
restart.addEventListener("click", () => {
  d1.style.backgroundColor = "#2a5a97";
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
  resetDice();
  d5.style.backgroundColor = "#fff";
};

d5.addEventListener("click", () => {
  resetDice();
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
  diceResult();
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

// dice face pattern
const df1 = [d5];
const df2 = [d1, d9];
const df3 = [d3, d5, d7];
const df4 = [d1, d3, d7, d9];
const df5 = [d1, d3, d5, d7, d9];
const df6 = [d1, d2, d3, d7, d8, d9];

const diceFaceList = [df1, df2, df3, df4, df5, df6];

const diceResult = () => {
  resetDice();
  let searchFor = diceFaceList[diceRoll - 1];
  let dItems = searchFor;
  for (let i = 0; i < dItems.length; i++) {
    console.log(dItems[i]);
    dItems[i].style.backgroundColor = "#fff";
  }
};

const resetDice = () => {
  d1.style.backgroundColor = "#2a5a97";
  d2.style.backgroundColor = "#2a5a97";
  d3.style.backgroundColor = "#2a5a97";
  d5.style.backgroundColor = "#2a5a97";
  d7.style.backgroundColor = "#2a5a97";
  d8.style.backgroundColor = "#2a5a97";
  d9.style.backgroundColor = "#2a5a97";
};

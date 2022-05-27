// Dice game JS
const textArea = document.getElementById("textArea");
const restart = document.getElementById("restart");

// player 1 p1_
const p1 = document.getElementById("p1");
const p1_count = document.getElementById("p1_count");
const p1_roll = document.getElementById("p1_roll");
const p1_score = document.getElementById("p1_score");

// dice dot elements
const p1_d1 = document.getElementById("p1_d1");
const p1_d2 = document.getElementById("p1_d2");
const p1_d3 = document.getElementById("p1_d3");
const p1_d5 = document.getElementById("p1_d5");
const p1_d7 = document.getElementById("p1_d7");
const p1_d8 = document.getElementById("p1_d8");
const p1_d9 = document.getElementById("p1_d9");
console.log(p1_d1);

// get ids
const parent1 = document.querySelector("#p1");
console.log(parent1);
const kids = parent1.children;
console.log(kids)

// game var
let p1_gameCount = 0;
let p1_gameScore = 0;
let p1_diceRoll = 0;

// event listener for new game
restart.addEventListener("click", () => {
  p1_d1.style.backgroundColor = "#2a5a97";
  newGameFunc();
});

// new game function
const newGameFunc = () => {
  p1_gameCount = 0;
  p1_gameScore = 0;
  p1_diceRoll = 0;
  p1_count.textContent = p1_gameCount;
  p1_score.textContent = p1_diceRoll;
  resetDice();
  p1_d5.style.backgroundColor = "#fff";
  textArea.textContent =
    "Score 21 to win! Roll a 1 and game is over! Press New Game to start. Click center of dice to roll.";
};

p1_d5.addEventListener("click", () => {
  resetDice();
  if (p1_gameScore < 21 && p1_diceRoll != 1 && p1_count.textContent != `-`) {
    rollDiceFunc();
  }
});

// random Dice roll function
const diceNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// roll dice function
const rollDiceFunc = () => {
  p1_diceRoll = diceNumber(1, 6);
  diceResult();
  if (p1_diceRoll == 1) {
    oneRolled();
  } else {
    logScore();
  }
};

// oneRolled  function
const oneRolled = () => {
  textArea.textContent = `ROLLED A ${p1_diceRoll} GAME OVER! Press new Game to continue
  `;
};

// next round function
const logScore = () => {
  p1_gameCount += 1;
  p1_count.textContent = p1_gameCount;
  p1_gameScore += p1_diceRoll;
  p1_score.textContent = p1_gameScore;
  if (p1_gameScore > 21) {
    textArea.textContent = `GAME LOST YOU SCORED ${p1_gameScore}! Press new Game to continue`;
  } else {
    if (p1_gameScore == 21) {
      textArea.textContent = `GAME WON YOU SCORED ${p1_gameScore}! Press new Game to continue`;
    }
  }
};

// dice face pattern
const p1_df1 = [p1_d5];
const p1_df2 = [p1_d1, p1_d9];
const p1_df3 = [p1_d3, p1_d5, p1_d7];
const p1_df4 = [p1_d1, p1_d3, p1_d7, p1_d9];
const p1_df5 = [p1_d1, p1_d3, p1_d5, p1_d7, p1_d9];
const p1_df6 = [p1_d1, p1_d2, p1_d3, p1_d7, p1_d8, p1_d9];

const diceFaceList = [p1_df1, p1_df2, p1_df3, p1_df4, p1_df5, p1_df6];

const diceResult = () => {
  resetDice();
  let searchFor = diceFaceList[p1_diceRoll - 1];
  let dItems = searchFor;
  for (let i = 0; i < dItems.length; i++) {
    console.log(dItems[i]);
    dItems[i].style.backgroundColor = "#fff";
  }
};

const resetDice = () => {
  p1_d1.style.backgroundColor = "#2a5a97";
  p1_d2.style.backgroundColor = "#2a5a97";
  p1_d3.style.backgroundColor = "#2a5a97";
  p1_d5.style.backgroundColor = "#2a5a97";
  p1_d7.style.backgroundColor = "#2a5a97";
  p1_d8.style.backgroundColor = "#2a5a97";
  p1_d9.style.backgroundColor = "#2a5a97";
};

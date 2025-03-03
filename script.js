const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", (e) => {
  let human = getHumanChoice(e.target.id);
  let comp = getComputerChoice();
  playRound(human, comp);
});

const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", (e) => {
  let human = getHumanChoice(e.target.id);
  let comp = getComputerChoice();
  playRound(human, comp);
});

const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", (e) => {
 let human = getHumanChoice(e.target.id);
 let comp = getComputerChoice();
 playRound(human, comp);
});

const humanResultContainer = document.getElementById("human-result");
const gameResultContainer = document.getElementById("round-and-game-result");
const computerResultContainer = document.getElementById("computer-result");

const playAgainButton = document.createElement("button");
playAgainButton.innerText = "Play Again";
playAgainButton.addEventListener("click", reset);


function getHumanChoice(choice) {
  humanResultContainer.textContent = `You picked ${choice}`;
  return choice;
}

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    computerResultContainer.innerHTML = "Computer picked rock";
    return "rock";
  } else if (randomNumber === 1) {
    computerResultContainer.innerHTML = "Computer picked paper";
    return "paper";
  } else if (randomNumber === 2) {
    computerResultContainer.innerHTML = "Computer picked scissors";
    return "scissors";
  };
}

function playGame() {
  if (playerScore === 5) {
    gameResultContainer.innerText += "\n You win the game!";
    gameResultContainer.appendChild(playAgainButton);
  } else if (computerScore === 5) {
    gameResultContainer.innerText += "\n You lose the game!"; 
    gameResultContainer.appendChild(playAgainButton);
  }
}


function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    gameResultContainer.innerText = "Draw! No points awarded!"
    humanResultContainer.innerHTML += `<p class="score-style">Human Score: ${playerScore}</p>`;
    computerResultContainer.innerHTML += `<p class="score-style">Computer Score: ${computerScore}</p>`;
  } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
    playerScore++;
    gameResultContainer.innerText = `You win this round! ${humanChoice} beats ${computerChoice}`;
   humanResultContainer.innerHTML += `<p class="score-style">Human Score: ${playerScore}</p>`;
    computerResultContainer.innerHTML += `<p class="score-style">Computer Score: ${computerScore}</p>`;
  } else if (humanChoice === "scissors" && computerChoice === "rock" || humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    gameResultContainer.innerText = `You lose this round! ${computerChoice} beats ${humanChoice}`;
    humanResultContainer.innerHTML += `<p class="score-style">Human Score: ${playerScore}</p>`;
    computerResultContainer.innerHTML += `<p class="score-style">Computer Score: ${computerScore}</p>`;
  } else {
    gameResultContainer.innerText = "no";
  }
  playGame();
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  gameResultContainer.innerText = "";
  humanResultContainer.innerText = "";
  computerResultContainer.innerText = "";
}
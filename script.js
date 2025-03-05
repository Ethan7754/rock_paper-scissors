const buttonContainer = document.getElementById("button-container");
const humanResultContainer = document.getElementById("human-result");
const gameResultContainer = document.getElementById("round-and-game-result");
const computerResultContainer = document.getElementById("computer-result");

function getHumanChoice(choice) {
  humanResultContainer.innerHTML = `<p class="pick-style">You picked ${choice}</p>`;
  return choice;
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    computerResultContainer.innerHTML = `<p class="pick-style">Computer picked rock</p>`;
    return "rock";
  } else if (randomNumber === 1) {
    computerResultContainer.innerHTML = `<p class="pick-style">Computer picked paper</p>`;
    return "paper";
  } else if (randomNumber === 2) {
    computerResultContainer.innerHTML = `<p class="pick-style">Computer picked scissors</p>`;
    return "scissors";
  };
}

const rockButton = document.getElementById("rock");

rockButton.addEventListener("click", (e) => {
  let humanSelection = getHumanChoice(e.target.id);
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
});

const paperButton = document.getElementById("paper");

paperButton.addEventListener("click", (e) => {
  let humanSelection = getHumanChoice(e.target.id);
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
});

const scissorsButton = document.getElementById("scissors");

scissorsButton.addEventListener("click", (e) => {
 let humanSelection = getHumanChoice(e.target.id);
 let computerSelection = getComputerChoice();
 playRound(humanSelection, computerSelection);
});

let playerScore = 0;
let computerScore = 0;

function reset() {
  playerScore = 0;
  computerScore = 0;
  gameResultContainer.innerText = "";
  humanResultContainer.innerText = "";
  computerResultContainer.innerText = "";
  buttonContainer.innerHTML = `
      <button class="btn" id="rock"></button>
      <button class="btn"id="paper"></button>
      <button class="btn" id="scissors"></button>`;
  const rockButton = document.getElementById("rock");
  rockButton.addEventListener("click", (e) => {
    let humanSelection = getHumanChoice(e.target.id);
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  });
  const paperButton = document.getElementById("paper");
  paperButton.addEventListener("click", (e) => {
    let humanSelection = getHumanChoice(e.target.id);
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  });
  const scissorsButton = document.getElementById("scissors");
  scissorsButton.addEventListener("click", (e) => {
    let humanSelection = getHumanChoice(e.target.id);
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  });
}

const playAgainButton = document.createElement("button");
playAgainButton.innerText = "Play Again";
playAgainButton.addEventListener("click", reset);

function playGame() {
  if (playerScore === 5) {
    rockButton.style.display = "none";
    paperButton.style.display = "none";
    scissorsButton.style.display = "none";
    buttonContainer.innerHTML = `<p class="win-style">:)</p>`;
    gameResultContainer.innerHTML = "";
    gameResultContainer.innerHTML += `<p class="win-style">You win the game!</p>`;
    gameResultContainer.appendChild(playAgainButton);
  } else if (computerScore === 5) {
    rockButton.style.display = "none";
    paperButton.style.display = "none";
    scissorsButton.style.display = "none";
    buttonContainer.innerHTML = `<p class="lose-style">:(</p>`;
    gameResultContainer.innerHTML = "";
    gameResultContainer.innerHTML += `<p class="lose-style"> You lose the game!</p>`; 
    gameResultContainer.appendChild(playAgainButton);
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    gameResultContainer.innerHTML = `<p class="round-result-style">Draw! No points awarded!</p>`;
    humanResultContainer.innerHTML += `<p class="score-style">Human Score: ${playerScore}</p>`;
    computerResultContainer.innerHTML += `<p class="score-style">Computer Score: ${computerScore}</p>`;
  } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
    playerScore++;
    gameResultContainer.innerHTML = `<p class="round-result-style">You win this round! ${humanChoice} beats ${computerChoice}</p>`;
    humanResultContainer.innerHTML += `<p class="score-style">Human Score: ${playerScore}</p>`;
    computerResultContainer.innerHTML += `<p class="score-style">Computer Score: ${computerScore}</p>`;
  } else if (humanChoice === "scissors" && computerChoice === "rock" || humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    gameResultContainer.innerHTML = `<p class="round-result-style">You lose this round! ${computerChoice} beats ${humanChoice}</p>`;
    humanResultContainer.innerHTML += `<p class="score-style">Your Score: ${playerScore}</p>`;
    computerResultContainer.innerHTML += `<p class="score-style">Computer Score: ${computerScore}</p>`;
  } 
  playGame();
}
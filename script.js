const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", (e) => {
  let human = getHumanChoice(e.target.innerText);
  let comp = getComputerChoice();
  playRound(human, comp);
});
const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", (e) => {
  let human = getHumanChoice(e.target.innerText);
  let comp = getComputerChoice();
  playRound(human, comp);
});
const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", (e) => {
 let human = getHumanChoice(e.target.innerText);
 let comp = getComputerChoice();
 playRound(human, comp);
});
const humanResultContainer = document.getElementById("human-result");
const gameResultContainer = document.getElementById("round-and-game-result");
const computerResultContainer = document.getElementById("computer-result");

function getHumanChoice(choice) {
  humanResultContainer.textContent = `You picked ${choice}`;
  return choice;
}

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    computerResultContainer.innerText = "Computer picked rock";
    return "rock";
  } else if (randomNumber === 1) {
    computerResultContainer.innerText = "Computer picked paper";
    return "paper";
  } else if (randomNumber === 2) {
    computerResultContainer.innerText = "Computer picked scissors";
    return "scissors";
  };
}

function playGame() {
  if (playerScore === 5) {
    gameResultContainer.innerText = "You win the game!";
  } else if (computerScore === 5) {
    gameResultContainer.innerText = "You lose the game!"; 
  }
}


function playRound(humanChoice, computerChoice) {
  if (humanChoice.toLowerCase() === computerChoice) {
    gameResultContainer.innerText = "Draw! No points awarded!"
  } else if (humanChoice === "Rock" && computerChoice === "scissors" || humanChoice === "Paper" && computerChoice === "rock" || humanChoice === "Scissors" && computerChoice === "paper") {
    playerScore++;
    gameResultContainer.innerText = `You win this round! ${humanChoice} beats ${computerChoice}`;
  } else if (humanChoice === "Scissors" && computerChoice === "rock" || humanChoice === "Rock" && computerChoice === "paper" || humanChoice === "Paper" && computerChoice === "scissors") {
    computerScore++;
    gameResultContainer.innerText = `You lose this round! ${computerChoice} beats ${humanChoice}`
  } else {
    gameResultContainer.innerText = "no";
  }
  playGame();
}


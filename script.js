

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  };
}

getComputerChoice();

console.log("The computer picked " + getComputerChoice() + "!");

getHumanChoice();

function getHumanChoice() {
  let humanPick = window.prompt("What's your pick?").toLowerCase();
  if (humanPick === "rock") {
    return humanPick;
  } else if (humanPick === "paper") {
    return humanPick;
  } else if (humanPick === "scissors")  {
    return humanPick;
  } else {
    return "Please enter a valid choice";
  };
}

console.log("You picked " + getHumanChoice() + "!");

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    return "You lose! Paper beats Rock!";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return "You win! Paper beats rock!";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    return "You lose! Scissors beats Paper!";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return "You win! Scissors beats Paper!";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    return "You lose! Rock beats Scissors!";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return "You win! Rock beats Scissors!";
  } else {
    return "Draw! No points awarded";
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



let humanScore = 0;
let computerScore = 0;


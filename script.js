

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

getHumanChoice();

function getHumanChoice() {
  let humanPick = window.prompt("What's your pick?");
  if (humanPick.toLowerCase() === "rock") {
    return "You picked " + humanPick.toLowerCase();
  } else if (humanPick.toLowerCase() === "paper") {
    return "You picked " + humanPick.toLowerCase();
  } else if (humanPick.toLowerCase() === "scissors")  {
    return "You picked " + humanPick.toLowerCase();
  } else {
    return "Please enter a valid choice";
  };
}

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
    return "You win! ROck beats Scissors!";
  } else {
    return "Draw! No points awarded";
  }
}



let humanScore = 0;
let computerScore = 0;


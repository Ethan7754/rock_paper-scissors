function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    console.log("The computer chose rock!");
    return "rock";
  } else if (randomNum === 1) {
    console.log("The computer chose paper!");
    return "paper";
  } else {
    console.log("The computer chose scissors!");
    return "scissors";
  }
}

function getHumanChoice() {
  let humanPick = window.prompt("What's your pick?").toLowerCase();
  if (humanPick === "rock") {
    console.log("You chose " + humanPick + "!");
  } else if (humanPick === "paper") {
    console.log("You chose " + humanPick + "!");
  } else if (humanPick === "scissors") {
    console.log("You chose " + humanPick + "!");
  } else {
    console.log("Please enter a valid choice");
  }
  return humanPick;
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose this round! Paper beats Rock!");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win this round! Paper beats rock!");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose this round! Scissors beats Paper!");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win this round! Scissors beats Paper!");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose this round! Rock beats Scissors!");
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win this round! Rock beats Scissors!");
    humanScore++;
  } else if (humanChoice === computerChoice) {
    console.log("Draw! No points awarded");
  } else {
    console.log("Human did not input valid choice! No points awarded!")
  }  

 }

  for (let i = 0; i < 4; i++){
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
  }
  
  playRound(humanSelection, computerSelection)

  if (computerScore > humanScore) {
    console.log("You lose the game!");
  } else if (humanScore > computerScore) {
    console.log("You win the game!");
  } else {
    console.log("Tie game!");
  }

}

playGame();


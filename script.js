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
    ++computerScore;
    console.log("You lose! Paper beats Rock!");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    ++humanScore;
    console.log("You win! Paper beats rock!");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    ++computerScore;
    console.log("You lose! Scissors beats Paper!");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    ++humanScore;
    console.log("You win! Scissors beats Paper!");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    ++computerScore;
    console.log("You lose! Rock beats Scissors!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    ++humanScore;
    console.log("You win! Rock beats Scissors!");
  } else if (humanChoice === computerChoice) {
    console.log("Draw! No points awarded");
  } else {
    console.log("Human did not input valid choice! No points awarded!")
  } 
  } 
  
  while (humanScore < 5 && computerScore < 5) {
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
  } 
  
  if (humanScore === 5) {
    console.log("You win the game!"); 
  }

  if (computerScore === 5) {
    console.log("You lose the game!");
  }
}

playGame();
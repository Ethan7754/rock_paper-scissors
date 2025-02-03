const buttonContainer = document.createElement("div");
buttonContainer.style.backgroundColor = "pink";
buttonContainer.style.margin = "0 auto";
buttonContainer.style.width = "50%";
buttonContainer.style.height = "400px";
buttonContainer.style.border = "2px solid black";
buttonContainer.style.display = "flex";
buttonContainer.style.justifyContent = "space-around";
buttonContainer.style.alignItems = "center"
document.body.prepend(buttonContainer);

const rockButton = document.createElement("button");
rockButton.addEventListener("click", playGame);
rockButton.style.backgroundColor = "lightBlue";
rockButton.style.width = "200px";
rockButton.style.height = "100px";
rockButton.textContent = "rock";
buttonContainer.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.addEventListener("click", playGame);
paperButton.style.backgroundColor = "lightBlue";
paperButton.style.width = "200px";
paperButton.style.height = "100px";
paperButton.textContent = "paper";

buttonContainer.appendChild(paperButton);

const scissorsButton = document.createElement("button");
scissorsButton.addEventListener("click", playGame);
scissorsButton.style.backgroundColor = "lightBlue";
scissorsButton.style.width = "200px";
scissorsButton.style.height = "100px";
scissorsButton.textContent = "scissors";
buttonContainer.appendChild(scissorsButton);


const resultsDiv = document.createElement("div");
document.body.appendChild(resultsDiv);








function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    console.log("The computer chose rock!");
    return "rock";
  } else if (randomNum === 1) {
    console.log ("The computer chose paper!");
    return "paper";
  } else {
    console.log("The computer chose scissors!");
    return "scissors";
  }
}

function getHumanChoice() {
  if (humanPick === "rock") {
    resultsDiv.textContent = "You chose " + humanPick + "!";
  } else if (humanPick === "paper") {
    resultsDiv.textContent = "You chose " + humanPick + "!";
  } else if (humanPick === "scissors") {
    resultsDiv.textContent = "You chose " + humanPick + "!";
  } else {
    resultsDiv.textContent = "Please enter a valid choice";
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
   playRound(humanSelection, computerSelection);
}

playGame();
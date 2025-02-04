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
rockButton.addEventListener("click", playRound);
rockButton.style.backgroundColor = "lightBlue";
rockButton.style.width = "200px";
rockButton.style.height = "100px";
rockButton.textContent = "rock";
buttonContainer.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.addEventListener("click", playRound);
paperButton.style.backgroundColor = "lightBlue";
paperButton.style.width = "200px";
paperButton.style.height = "100px";
paperButton.textContent = "paper";

buttonContainer.appendChild(paperButton);

const scissorsButton = document.createElement("button");
scissorsButton.addEventListener("click", playRound);
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

function getHumanChoice(choice) {
  if (choice === "rock") {
    resultsDiv.textContent = "You chose rock!";
  } else if (paperButton.clicked === true) {
    resultsDiv.textContent = "You chose " + humanPick + "!";
  } else if (scissorsButton.clicked === true) {
    resultsDiv.textContent = "You chose " + humanPick + "!";
  } 
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();



  function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    ++computerScore;
    resultsDiv.textContent = "You lose! Paper beats Rock!";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    ++humanScore;
    resultsDiv.textContent = "You win! Paper beats rock!";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    ++computerScore;
    resultsDiv.textContent = "You lose! Scissors beats Paper!";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    ++humanScore;
    resultsDiv.textContent = "You win! Scissors beats Paper!";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    ++computerScore;
    resultsDiv.textContent = "You lose! Rock beats Scissors!";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    ++humanScore;
    resultsDiv.textContent = "You win! Rock beats Scissors!";
  } else if (humanChoice === computerChoice) {
    resultsDiv.textContent = "Draw! No points awarded";
  } else {
    resultsDiv.textContent = "Human did not input valid choice! No points awarded!";
  } 

} 
  



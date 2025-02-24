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
rockButton.addEventListener("click", playRound(humanSelection, computerSelection));
rockButton.style.backgroundColor = "lightBlue";
rockButton.style.width = "200px";
rockButton.style.height = "100px";
rockButton.textContent = "rock";
buttonContainer.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.addEventListener("click", playRound(humanSelection, computerSelection));
paperButton.style.backgroundColor = "lightBlue";
paperButton.style.width = "200px";
paperButton.style.height = "100px";
paperButton.textContent = "paper";
buttonContainer.appendChild(paperButton);

const scissorsButton = document.createElement("button");
scissorsButton.addEventListener("click", playRound(humanSelection, computerSelection));
scissorsButton.style.backgroundColor = "lightBlue";
scissorsButton.style.width = "200px";
scissorsButton.style.height = "100px";
scissorsButton.textContent = "scissors";
buttonContainer.appendChild(scissorsButton);


const resultsDiv = document.createElement("div");
document.appendChild(resultsDiv)


let humanScore = 0;
let computerScore = 0;


function getHumanChoice() {
  return e.target.innerText;
}

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(human, computer) {
  if (human === "rock" && computer === "scissors" || 
      human === "paper" && computer === "rock" ||
      human === "scissors" && computer === "paper") {
      humanScore++;
      }
      
}


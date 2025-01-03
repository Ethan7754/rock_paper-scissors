

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




let humanScore = 0;
let computerScore = 0;


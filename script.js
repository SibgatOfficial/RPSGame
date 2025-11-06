const getComputerChoice = function () {
  let randomChoice = Math.ceil(Math.random() * 3);
  if (randomChoice == 1) {
    return "rock";
  } else if (randomChoice == 2) {
    return "paper";
  } else {
    return "scissor";
  }
};

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanScore <= 5 && computerScore <= 5) {
    if (
      (humanChoice == "paper" && computerChoice == "rock") ||
      (humanChoice == "scissor" && computerChoice == "paper") ||
      (humanChoice == "rock" && computerChoice == "scissor")
    ) {
      humanScore++;
      document.querySelector(
        "div"
      ).textContent = `You won! \n Your score is: ${humanScore}\nComputer Score is: ${computerScore}`;
    } else if (
      (humanChoice == "rock" && computerChoice == "paper") ||
      (humanChoice == "paper" && computerChoice == "scissor") ||
      (humanChoice == "scissor" && computerChoice == "rock")
    ) {
      computerScore++;
      document.querySelector(
        "div"
      ).textContent = `You lose! \n Your score is: ${humanScore}\nComputer Score is: ${computerScore}`;
    } else {
      document.querySelector(
        "div"
      ).textContent = `Draw! \nYour score is: ${humanScore}\nComputer Score is: ${computerScore}`;
    }
  } else {
    if (humanScore == 5) {
      document.querySelector("div").textContent = "You Won!";
    } else {
      document.querySelector("div").textContent = "Computer Won!";
    }
  }
}

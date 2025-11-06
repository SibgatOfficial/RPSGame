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
const getHumanChoice = function () {
  let userChoice = prompt("Enter your choice?").toLowerCase();
  return userChoice;
};
let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissor" && computerChoice == "paper") ||
    (humanChoice == "rock" && computerChoice == "scissor")
  ) {
    humanScore++;
    console.log("You won!");
  } else if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissor") ||
    (humanChoice == "scissor" && computerChoice == "rock")
  ) {
    computerScore++;
    console.log("You Lose!");
  } else {
    console.log("Draw!");
  }
}
function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  console.log(
    `Your score is: ${humanScore}\nComputer Score is: ${computerScore}`
  );
}
playGame();

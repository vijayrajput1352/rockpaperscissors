const choices = ["rock", "paper", "scissors"];
let winners=[];
//play game 
function game() {
  //five rounds
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  document.querySelector("button").textContent = "Play new game";
  score();
}
function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  logRound(playerSelection, computerSelection, winner, round);
}
//input from players
function playerChoice() {
  let input = prompt("Enter Rock, Paper, or Scissors");
  while (input == null) {
    input = prompt("Rock,paper, scissors");
  }
  let check = inputValid(input);
  while (check == false) {
    input = prompt(
      "Empty and wrong value is not available"
    );
    while (input == null) {
      input = prompt("enter Rock, Paper, or Scissors");
    }
    check = inputValid(input);
  }
  return input;
}
//random input from computer
function computerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function inputValid(choice) {
  return choices.includes(choice);
}
//check winner
function checkWinner(Player,Computer) {
  if (Player === Computer) {
    return "Tie";
  } else if (
    (Player === "rock" && Computer == "scissors") ||
    (Player === "paper" && Computer == "rock") ||
    (Player === "scissors" && Computer == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}
//scores of player
function score(){
  let playerWin=winners.filter((item)=>item =="player").length;
  let computerWin=winners.filter((item)=>item =="player").length;
  let ties=winners.filter((item)=>item =="player").length;
}
function logRound(playerChoice, computerChoice, winner, round) {
  console.log(round,"Round");
  console.log(winner, "Winner");
  console.log("Player Chose:", playerChoice);
  console.log("Computer Chose:", computerChoice);
  
}

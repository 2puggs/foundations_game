
console.log("Computer will choose now...");

function getComputerChoice() {
   let choices = ["ROCK", "PAPER", "SCISSORS"];
   let computerChoice = 0;
   computerChoice= Math.floor(Math.random() * (2 - 0 + 1) + 0);
   console.log(choices[computerChoice]);

   computerChoice = choices[computerChoice];
   return computerChoice
   //console.log(computerChoice);
   
}

function playRound(playerSelection,computerSelection) {
   playerSelection = playerSelection.toUpperCase();
   if (playerSelection === computerSelection) {
      console.log("there is a tie, replay this round");
      computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection);
   }
   else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
      console.log("Player wins");
   }
   else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
      console.log("Computer wins");
   }
   else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
      console.log("Player wins");
   }
   else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
      console.log("Computer wins");
   }
   else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
      console.log("Computer wins");
   }
   else {
      console.log("Player wins");
   }
}
/*
let player_input = prompt("Please choose: Rock, Paper, Scissors");
console.log("Player chose, " + input + "!");
player_input = input.toUpperCase();
*/ 
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
// getComputerChoice()
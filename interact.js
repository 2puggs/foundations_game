
console.log("Computer will choose now...");
function getComputerChoice() {
   let choices = ["ROCK", "PAPER", "SCISSORS"];
   let computerChoice = 0;
   computerChoice= Math.floor(Math.random() * (2 - 0 + 1) + 0);
   console.log(choices[computerChoice]);
   console.log(computerChoice);
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

function game() {
   //play the game 5 times 
   rounds = 0;
   playerWins = 0;
   computerWins = 0;
   for (let i =0; i <5; i++) {
      console.log("new round begins");
      const playerSelection = "rock";
      const computerSelection = getComputerChoice();
      output = playRound(playerSelection, computerSelection);
      //console.log(typeOf output);
      if (output === "Player wins") {
         playerWins += 1;
         console.log("player has won " + playerWins + " rounds");
      }
      else {
         computerWins += 1;
         console.log("computer has won " + computerWins + " rounds");
      }
      console.log("round " + rounds + " is over!")
      rounds += 1;
   }
   console.log("total rounds: " + rounds + " computer score: " + computerWins + " player score: " + playerWins);
}
/*
let player_input = prompt("Please choose: Rock, Paper, Scissors");
console.log("Player chose, " + input + "!");
player_input = input.toUpperCase();
*/ 
game()
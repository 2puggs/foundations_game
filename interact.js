console.log("new round begins");
      // Get all clickable images
   const clickableImages = document.querySelectorAll('.clickable');
   console.log(clickableImages);
   clickableImages.forEach((clickableImages)=>{clickableImages.addEventListener('click',()=>{

      playerChoice = clickableImages.id;
      if (playerChoice == "rocks"){
          playerChoiceInt = 0;
      }
      else if (playerChoice == "papers"){
          playerChoiceInt = 1;
      }
      else if (playerChoice == "scissors")
      {
          playerChoiceInt = 2;
      }
      console.log(playerChoiceInt);
      //compChoiceInt = computerPlay(compChoice);
      //playGame();
      })
   });
function getComputerChoice() {
   console.log("Computer will choose now...");
   let choices = ["ROCK", "PAPER", "SCISSORS"];
   let computerChoice = 0;
   computerChoice= Math.floor(Math.random() * (2 - 0 + 1) + 0);
   console.log(choices[computerChoice]);
   console.log(computerChoice);
   computerChoice = choices[computerChoice];

   return computerChoice
   //console.log(computerChoice);
   
}

/*function playRound(playerSelection,computerSelection) {
   playerSelection = playerSelection.toUpperCase();
   if ((playerSelection == 'ROCK' && computerSelection == 'SCISSORS') ||
        (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') ||
        (playerSelection == 'PAPER' && computerSelection == 'ROCK')) {
        //playerScore += 1
        return "Player wins"
   }
   else if (playerSelection == computerSelection) {
      //tie replay the round
      getComputerChoice()
      playRound()
   }
   else {
      return "Computer wins"
   }

   }
   */
 //1)doing the most basic thing, select the rock tile, red border appears around rock tile 
   //2)next step save the rock selection into memory as the player selection
   //3)call the computer selection 
function game() {
   console.log("game function");
      /*function handleClick(event) {
         const altText = event.target.alt;
         console.log('Alt text:', altText); // You can store, manipulate, or use this alt text as needed
       }
      
      clickableImages.forEach(image => {
         image.addEventListener('click', () => {
         // Remove 'selected' class from all images
         clickableImages.forEach(img => img.classList.remove('selected'));
    
         // Add 'selected' class to the clicked image
         image.classList.add('selected');
         });
      });
      */

   }//end game function
   
      /*clickableImages.forEach(image => {
         image.addEventListener('click', handleClick);
       });
*/  
//game()
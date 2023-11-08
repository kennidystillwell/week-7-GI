document.addEventListener('DOMContentLoaded', function() {
  //defines possible choices to be made during game  
  const choices = ["rock", "paper", "scissors"];
    
  //references html elements to display results
    const userChoiceElement = document.getElementById('outcome-text');
    const rockButton = document.getElementById('rock');
    const paperButton = document.getElementById('paper');
    const scissorsButton = document.getElementById('scissors');
    
    //function to generate random computer choice
    function getRandomChoice() {
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }
    
    //function to determine winner of game based on user choice and computer choice arguements
    function determineWinner(userChoice, computerChoice) {
      if (userChoice === computerChoice) {
        return "It's a tie!";
      }
      
      if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
      ) {
        return "You win!";
      } 
      else {
        return "Computer wins!";
      }
    }
    
    //function to play the game when user inputs their choice
    function playGame(userChoice) {
      //gets random choice from computer
      const computerChoice = getRandomChoice();
      //displays the result of the game based on what user and computer chose
      userChoiceElement.textContent = `Computer chose ${computerChoice}. ${determineWinner(userChoice, computerChoice)}`;
    }
    
    //adds click event listeners so the game starts when the user clicks their respective choice
    rockButton.addEventListener('click', () => playGame('rock'));
    paperButton.addEventListener('click', () => playGame('paper'));
    scissorsButton.addEventListener('click', () => playGame('scissors'));
  });
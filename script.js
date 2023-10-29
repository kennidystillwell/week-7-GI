document.addEventListener('DOMContentLoaded', function() {
    const choices = ["rock", "paper", "scissors"];
    
    const userChoiceElement = document.getElementById('outcome-text');
    const rockButton = document.getElementById('rock');
    const paperButton = document.getElementById('paper');
    const scissorsButton = document.getElementById('scissors');
    
    function getRandomChoice() {
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }
    
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
    
    function playGame(userChoice) {
      const computerChoice = getRandomChoice();
      userChoiceElement.textContent = `Computer chose ${computerChoice}. ${determineWinner(userChoice, computerChoice)}`;
    }
    
    rockButton.addEventListener('click', () => playGame('rock'));
    paperButton.addEventListener('click', () => playGame('paper'));
    scissorsButton.addEventListener('click', () => playGame('scissors'));
  });
// This is a Rock, Paper, Scissors game!
// Created by Nicole Carman on Codecademy


// First, let's get the user's choice
const getUserChoice = (userInput) => {

  // Make all input lowercase to account for
  // different capitalizations (i.e. rock, Rock)
  userInput = userInput.toLowerCase();

  // Make sure the user enters a valid choice
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
    return userInput;
  } else {
    console.log('Whoops! Please enter either rock, paper, or scissors as your choice!');
  }
};



// Time for the computer's choice
function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
      break;
      
    case 1:
      return "paper";
      break;
      
    case 2:
      return "scissors";
      break;
      
    default:
      "Error.";
  }
}



// Time to determine the winner
function determineWinner(userChoice, computerChoice) {

  // If userChoice = computerChoice, the game is tied
  if (userChoice === computerChoice) {
    return "The game is a tie!";
  }

  // If userChoice = rock
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won! Paper covers rock.";
    } else {
      return "You won!";
    }
  }



  // If userChoice = paper
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won! Scissors cuts paper.";
    } else {
      return "You won!";
    }
  }



  // If userChoice = scissors
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won! Rock crushes scissors.";
    } else {
      return "You won!";
    }
  }



  // if the user equals a super secret cheat code
  if (userChoice === "bomb") {
    if (computerChoice === "rock" || computerChoice === "paper" || computerChoice === "scissors") {
      return "You won! How did you know about the secret code?!";
    }
  }
}



// Testing
// Should output that the computer wins
// console.log(determineWinner('paper', 'scissors'));

// Should output that the game is a tie
// console.log(determineWinner('paper', 'paper'));

// Should output that the user one
// console.log(determineWinner('paper', 'rock'));



// Time to start the game and log the results
function playGame() {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();

  console.log("You choise " + userChoice);
  console.log("The computer chose " + computerChoice);

  // Determine and print who won by calling the determineWinner function
  console.log(determineWinner(userChoice, computerChoice));
}



// Start the game
playGame();



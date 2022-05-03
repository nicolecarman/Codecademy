// This is a number guesser game where you play against the computer to see who gets closest to the target number
// Written by Nicole Carman on Codecademy


let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;



// Generate a random number that isn't a decimal
let generateTarget = () => {
    return Math.floor(Math.random() * 10);  
};



// Compare user guess with the computer's guess
let compareGuesses = (human, computer, target) => {
    const userG = Math.abs(target - human);
    const computerG = Math.abs(target - computer);
    return userG <= computerG;

    /*if (userG <= computerG) {
        updateScore('human');
    } else {
        updateScore('computer');
    }*/
};



// Who wins?
let updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
};



// Advance the round (increment up by one)
function advanceRound() {
    currentRoundNumber += 1;
};

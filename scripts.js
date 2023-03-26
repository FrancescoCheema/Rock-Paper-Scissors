// Create Array to choose choices from
let choices = ['rock', 'paper', 'scissors']
let playerScore = 0;
let computerScore = 0;

// Create function for computer to play
function getComputerChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

// Create function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {

    // Tie
    if (playerSelection === computerSelection) {
        return "it's a tie! try again!";
    
    // Rock beats scissors
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
        playerScore++;
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. You won.`;
        } else {
            computerScore++;
            return `You chose ${playerSelection} and the computer chose ${computerSelection}. You lost.`;
        }
    }
    // Paper beats Rock
    else if (playerSelection === "paper") { 
        if (computerSelection === "rock") {
        playerScore++;
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. You won.`;
        } else {
            computerScore++;
            return `You chose ${playerSelection} and the computer chose ${computerSelection}. You lost.`;
        }
    }
    // Scissors cut Paper
    else if (playerSelection === "scissors") { 
        if (computerSelection === "paper") {
        playerScore++;
        return `You chose ${playerSelection} and the computer chose ${computerSelection}. You won.`;
        } else {
            computerScore++;
            return `You chose ${playerSelection} and the computer chose ${computerSelection}. You lost.`;
        }
    }

};

// Create a 5 round game that keeps score and reports a winner or loser at the end

function game() {
    for (var i  = 0; i < 5; i++) {
        playRound();
    }
}

let playerSelection = prompt("Choose your weapon: ")
let computerSelection = getComputerChoice();
//console.log(`You selected: "${playerSelection}"`);
//console.log(`Computer selected: "${computerSelection}"`);
console.log(playRound(playerSelection, computerSelection));
console.log(playerScore, computerScore);



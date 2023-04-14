// Create Array to choose choices from
let choices = ['rock', 'paper', 'scissors']
let playerScore = 0;
let computerScore = 0;

const weaponsBtn = document.querySelectorAll('div.weapons button')
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

weaponsBtn.forEach(button => { button.addEventListener("click", getPlayerChoice) });

// Create function for player's choice

function getPlayerChoice() {
    let playerSelection = (e.target.id);
    getPlayerChoice = e.target.textContent;
    playRound(playerSelection, getComputerChoice())
}

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
        return `You chose ${playerSelection} and the computer chose ${computerSelection}.`;
        } else {
            computerScore++;
            return `You chose ${playerSelection} and the computer chose ${computerSelection}.`;
        }
    }
    // Paper beats Rock
    else if (playerSelection === "paper") { 
        if (computerSelection === "rock") {
        playerScore++;
        return `You chose ${playerSelection} and the computer chose ${computerSelection}.`;
        } else {
            computerScore++;
            return `You chose ${playerSelection} and the computer chose ${computerSelection}.`;
        }
    }
    // Scissors cut Paper
    else if (playerSelection === "scissors") { 
        if (computerSelection === "paper") {
        playerScore++;
        return `You chose ${playerSelection} and the computer chose ${computerSelection}.`;
        } else {
            computerScore++;
            return `You chose ${playerSelection} and the computer chose ${computerSelection}.`;
        }
    }

};

// Create a 5 round game that keeps score and reports a winner or loser at the end

function game() {
    for (let i  = 0; i < 5; i++) {
        playRound();
        //let playerSelection = prompt("Choose your weapon: ");
        //playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Your score is ${playerScore}\nComputer's Score is ${computerScore}`);
    }
    // in case player wins
    if (playerScore > computerScore) {
        return 'You win!';
    // in case player loses
    } else if(playerScore < computerScore) {
        return 'You lose!';
    // in case of tie
        } else if (playerScore == computerScore) {
            return "it's a tie! Try again.";
    }
};

console.log(game());



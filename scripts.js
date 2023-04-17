// Create Array to choose choices from
let choices = ['Rock','Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;

let rockBtn = document.querySelector('.rock-btn');
let paperBtn = document.querySelector('.paper-btn');
let scissorsBtn = document.querySelector('.scissors-btn');
let playerChoice = document.querySelector('#player-choice');
let computerSelection = document.querySelector('#computer-choice');
let playerScoreBoard = document.querySelector("#player-score");
let compScoreBoard = document.querySelector("#comp-score");
let textDesc = document.querySelector('.text-desc');
const playAgainBtn = document.querySelector('#playagain-btn')

rockBtn.addEventListener("click", (e) => {
    playerSelection = "Rock";
    playerChoice.innerHTML = `${playerSelection}`;
    playRound(playerSelection);
});
paperBtn.addEventListener("click", (e) => {
    playerSelection = 'Paper';
    playerChoice.innerHTML = `${playerSelection}`;
    playRound(playerSelection);
});
scissorsBtn.addEventListener("click", (e) => {
    playerSelection = "Scissors";
    playerChoice.innerHTML = `${playerSelection}`;
    playRound(playerSelection);
});

playAgainBtn.addEventListener("click", playAgain)

// Create function for computer to play

function getComputerChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    computerSelection.innerHTML = `${choice}`;
    return choice;
}

// Create function that plays a 5 round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    // Tie
    if (playerSelection === computerSelection) {
        textDesc.innerHTML = "it's a tie! try again!";

    // Rock beats scissors
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
        playerScore++;
        playerScoreBoard.innerHTML = `${playerScore}`;
        textDesc.innerHTML = `You chose ${playerSelection} and the computer chose ${computerSelection}.`;
        } else {
            computerScore++;
            compScoreBoard.innerHTML = `${computerScore}`;
            textDesc.innerHTML = `You chose ${playerSelection} and the computer chose ${computerSelection}.`;
        }
    }
    // Paper beats Rock
    else if (playerSelection === "Paper") { 
        if (computerSelection === "Rock") {
        playerScore++;
        playerScoreBoard.innerHTML = `${playerScore}`;
        textDesc.innerHTML = `You chose ${playerSelection} and the computer chose ${computerSelection}.`;
        } else {
            computerScore++;
            compScoreBoard.innerHTML = `${computerScore}`;
            textDesc.innerHTML =`You chose ${playerSelection} and the computer chose ${computerSelection}.`;
        }
    }
    // Scissors cut Paper
    else if (playerSelection === "Scissors") { 
        if (computerSelection === "Paper") {
            playerScore++;
            playerScoreBoard.innerHTML = `${playerScore}`;
            textDesc.innerHTML = `You chose ${playerSelection} and the computer chose ${computerSelection}.`;
        } else {
            computerScore++;
            compScoreBoard.innerHTML = `${computerScore}`;
            textDesc.innerHTML = `You chose ${playerSelection} and the computer chose ${computerSelection}.`;
        }
    }  
    checkWinner();
};

function checkWinner() {
    if (playerScore === 5) {
        textDesc.innerHTML = 'You won!';
        rockBtn.setAttribute("disabled", 1);
        paperBtn.setAttribute("disabled", 1);
        scissorsBtn.setAttribute("disabled", 1);
    // in case player loses
    } else if(computerScore === 5) {
        textDesc.innerHTML = 'You lost!';
        rockBtn.setAttribute("disabled", 1);
        paperBtn.setAttribute("disabled", 1);
        scissorsBtn.setAttribute("disabled", 1);
    // in case of tie
    } else if (playerScore === 5 && computerScore === 5) {
        textDesc.innerHTML = "it's a draw! You can start a new game.";
        rockBtn.setAttribute("disabled", 1);
        paperBtn.setAttribute("disabled", 1);
        scissorsBtn.setAttribute("disabled", 1);
    }
};

function playAgain() {
    playerScore = 0;
    computerScore = 0;
    choice = "";
    playerSelection = "";
    playerChoice.innerHTML = "?";
    computerSelection.innerHTML = "?";
    playerScoreBoard.innerHTML = 0;
    compScoreBoard.innerHTML = 0;
    textDesc.innerHTML = "";
    rockBtn.removeAttribute("disabled", 1);
    paperBtn.removeAttribute("disabled", 1);
    scissorsBtn.removeAttribute("disabled", 1);
}
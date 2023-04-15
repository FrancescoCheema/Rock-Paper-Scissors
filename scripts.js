// Create Array to choose choices from
let choices = ['Rock','Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;

let rockBtn = document.querySelector('.rock-btn');
let paperBtn = document.querySelector('.paper-btn');
let scissorsBtn = document.querySelector('.scissors-btn');
let playerChoice = document.querySelector('#player-choice');
let computerSelection = document.querySelector('#computer-choice');
let textDesc = document.querySelector('.text-desc');

rockBtn.addEventListener("click", (e) => {
    playerSelection = "Rock";
    playerChoice.innerHTML = `${playerSelection}`
    playRound(playerSelection);
});
paperBtn.addEventListener("click", (e) => {
    playerSelection = 'Paper';
    playerChoice.innerHTML = `${playerSelection}`
    playRound(playerSelection);
});
scissorsBtn.addEventListener("click", (e) => {
    playerSelection = "Scissors";
    playerChoice.innerHTML = `${playerSelection}`
    playRound(playerSelection);
})

// Create function for computer to play

function getComputerChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    computerSelection.innerHTML = `${choice}`;
    return choice;
}

// Create function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();

    // Tie
    if (playerSelection === computerSelection) {
        textDesc.innerHTML = "it's a tie! try again!";
    // Rock beats scissors
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
        playerScore++;
        textDesc.innerHTML = `You chose ${playerSelection} and the computer chose ${computerSelection}.`;
        } else {
            computerScore++;
            textDesc.innerHTML = `You chose ${playerSelection} and the computer chose ${computerSelection}.`;
        }
    }
    // Paper beats Rock
    else if (playerSelection === "Paper") { 
        if (computerSelection === "Rock") {
        playerScore++;
        textDesc.innerHTML = `You chose ${playerSelection} and the computer chose ${computerSelection}.`;
        } else {
            computerScore++;
            textDesc.innerHTML =`You chose ${playerSelection} and the computer chose ${computerSelection}.`;
        }
    }
    // Scissors cut Paper
    else if (playerSelection === "Scissors") { 
        if (computerSelection === "Paper") {
            textDesc.innerHTML = `You chose ${playerSelection} and the computer chose ${computerSelection}.`;
        } else {
            computerScore++;
            textDesc.innerHTML = `You chose ${playerSelection} and the computer chose ${computerSelection}.`;
        }
    }

};

// Create a 5 round game that keeps score and reports a winner or loser at the end

function game() {
    for (let i  = 0; i < 5; i++) {
        playRound();

        playerSelection.textContent = 
        playerSelection = playerSelection.toLowerCase();
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

//Create Array to choose choices from
let choices = ['rock', 'paper', 'scissors']
//Create function for computer to play
function getComputerChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}
//Create function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "it's a tie";
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        return ("You win! Rock beats scissors");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return ("You lose! Paper beats rock");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return ("You win! Paper beats rock");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return ("You lose! Scissors beat paper");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return ("You win! Scissors beat paper");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return ("You lose!Rock beats scissors");
    }
}

let computerSelection = getComputerChoice();
let playerSelection = prompt("Choose your weapon: ")
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
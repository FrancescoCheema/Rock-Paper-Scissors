//Create Array to choose choices from
const choices = ['Rock', 'Paper', 'Scissors']
//Create function for computer to play
function getComputerChoice(choices) {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

console.log(getComputerChoice(choices));
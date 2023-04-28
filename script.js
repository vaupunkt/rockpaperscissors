const words = ["Rock", "Paper", "Scissors"];
let computerSelection;
let playerSelection;
var count = 0;
let output;

function getComputerSelection() {
    var word = words[Math.floor(Math.random()*words.length)];
    computerSelection = word;
    return computerSelection;

}

function getPlayerSelection() {
    
 /* 
    var choice = prompt("Rock, Paper, Scissors!\nWhat is your choice?");
    var input = choice.toLowerCase().charAt(0).toUpperCase()+choice.slice(1).toLowerCase();
    while (input != words[0] && input != words[1] && input != words[2]) {
        var choice = prompt("Please choose again! ROCK, PAPER or SCISSORS");
        var input = choice.toLowerCase().charAt(0).toUpperCase()+choice.slice(1).toLowerCase();
    } 
*/

    playerSelection = input;
}

function playRound(playerSelection) {
    let result = "Computer: "+computerSelection+" | Player: "+playerSelection;
    let text ="";
    if (playerSelection==computerSelection) {
        text = "It's a draw";
    } else if (playerSelection==words[0]&&computerSelection==words[1]) {
        text = "You loose! Paper beats Rock";
    } else if (playerSelection==words[0]&&computerSelection==words[2]) {
        text = "You win! Rock beats Scissors";
    } else if (playerSelection==words[1]&&computerSelection==words[0]) {
        text = "You win! Paper beats Rock";
    } else if (playerSelection==words[1]&&computerSelection==words[2]) {
        text = "You loose! Scissors beat Paper";
    } else if (playerSelection==words[2]&&computerSelection==words[0]) {
        text = "You loose! Rock beats Scissors";
    } else if (playerSelection==words[2]&&computerSelection==words[1]) {
        text = "You win! Scissors beat Paper";
    }
    output = result+"<br>"+text;
    return output;
}

function game(playerSelection) {
    getComputerSelection();
    playRound(playerSelection);
    let message = "Round "+(count+1)+"<br>"+output;
    console.log(output);
    count += 1;
    const textparagraph = document.querySelector('#resultMessage');
    textparagraph.classList.add('textparagraph');
    textparagraph.innerHTML = message;

}
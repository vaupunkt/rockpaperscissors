const words = ["Rock", "Paper", "Scissors"];
let computerSelection;
let playerSelection;
var countPlayer = 0;
var countComputer = 0;
var count = 0;
const resetButton = document.getElementById("resetButton");
const buttons = document.getElementById('buttons');
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
        countComputer++;
    } else if (playerSelection==words[0]&&computerSelection==words[2]) {
        text = "You win! Rock beats Scissors";
        countPlayer++;
    } else if (playerSelection==words[1]&&computerSelection==words[0]) {
        text = "You win! Paper beats Rock";
        countPlayer++;
    } else if (playerSelection==words[1]&&computerSelection==words[2]) {
        text = "You loose! Scissors beat Paper";
        countComputer++;
    } else if (playerSelection==words[2]&&computerSelection==words[0]) {
        text = "You loose! Rock beats Scissors";
        countComputer++;
    } else if (playerSelection==words[2]&&computerSelection==words[1]) {
        text = "You win! Scissors beat Paper";
        countPlayer++;
    }
    output = result+"<br>"+text;
    
    return output;
}

function game(playerSelection) {
    const counterPlayer = document.querySelector("#counterPlayer");
    const counterComputer = document.querySelector("#counterComputer");
    if (countPlayer < 5 | countComputer < 5) {
        getComputerSelection();
        playRound(playerSelection);
        count++;
        counterPlayer.classList.add('counterPlayer');
        counterComputer.classList.add('counterPlayer');
        counterPlayer.textContent = countPlayer;
        counterComputer.textContent = countComputer;
        if (countComputer == 5) {
            let winner = "The Computer won!"
            output = output+"<br><br>"+winner;
        }
        if (countPlayer == 5) {
            winner = "YOU WON!";
            output = output+"<br><br>"+winner;
        }
        let message = "Round "+(count)+"<br>"+output;
        const textparagraph = document.querySelector('#resultMessage');
        textparagraph.classList.add('textparagraph');
        textparagraph.innerHTML = message;
        if (countPlayer == 5 | countComputer == 5) {
            buttons.style.display = "none";
            resetButton.style.display = "inline";
            resetButton.addEventListener("click", () => {
                countPlayer = 0;
                countComputer = 0;
                count = 0;
                counterComputer.textContent = countComputer;
                counterPlayer.textContent = countPlayer;
                textparagraph.textContent ="";
                resetButton.style.display = "none";
                buttons.style.display = "inline";
            });
        }
    }
}
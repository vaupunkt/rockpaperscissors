# rockpaperscissors

Welcome to my Rock Paper Scissors game! In this game, the user plays against the computer in a classic game of Rock Paper Scissors. In this README file, I will explain how I created the game, including the code and how to play.

To create this game, I followed the instructions provided in The Odin Project's "Foundations: Rock Paper Scissors" lesson. The instructions provided a basic outline of the game and required the use of JavaScript.

I started by creating a basic HTML file that included buttons for the user to select their choice of rock, paper, or scissors. I also created a JavaScript file that contained the functions necessary to run the game.

The first step was to create a function that randomly generates the computer's choice. I used the Math.random() function to generate a random number between 0 and 2, which corresponded to the computer's choice of rock, paper, or scissors.

Next, I created a function that determines the winner of the game. This function takes in both the user's choice and the computer's choice as parameters, compares them, and determines the winner. If the user chooses rock and the computer chooses scissors, the user wins, and so on. If both the user and the computer choose the same option, the game is a tie.

After creating the functions to generate the computer's choice and determine the winner, I added event listeners to the HTML buttons for the user to make their selection. Once the user has made their choice, the computer's choice is generated, and the winner is determined. The game then displays the winner and prompts the user to play again.

Finally, I added some additional features to the game to make it more interactive. For example, I added a score tracker to keep track of the user's wins and losses. I also added a reset button that allows the user to reset the game and start over.

Overall, creating this game was a fun and challenging project. It required the use of JavaScript to generate random numbers and compare user input to the computer's choice. With the addition of a CSS file, the game could be made more visually appealing and engaging.
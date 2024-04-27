
const MAX_ROUNDS = 10;
let remainingRounds = MAX_ROUNDS;
let wins = 0;

function playRound() {
    const guessInput = document.getElementById("guess_input");
    const resultDisplay = document.getElementById("result");
    const guess = parseInt(guessInput.value);

    if (guess < 1 || guess > 6) {
        resultDisplay.innerText = "Please enter a number between 1 and 6.";
    }

    const secretNumber = Math.ceil(Math.random() * 6);

    if (guess === secretNumber) {
        wins++;
        resultDisplay.innerText = "You guessed correctly!";
    } else {
        resultDisplay.innerText = "Sorry, the secret number was " + secretNumber;
    }

    remainingRounds--;

    if (remainingRounds === 0) {
        if (wins >= 3) {
            resultDisplay.innerText += " You win the game!";
            resultDisplay.className = "green";
        } else {
            resultDisplay.innerText += " You lose the game.";
            resultDisplay.className = "red";
        }
        document.getElementById("btn").disabled = true;
    } else {
        guessInput.value = "";
        resultDisplay.innerText += "You have " + remainingRounds + "round(s) left.";
    }
}
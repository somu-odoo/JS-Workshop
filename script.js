// to generate random number we use random method
var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = [];
var count = 0;
var message = "";
var guessInput = document.getElementById("guess");
var messageDisplay = document.getElementById("message");
var guessesDisplay = document.getElementById("guesses");

function guessNumber() {
	// Get the player's guess
	var guess = Number(guessInput.value);

	// Add the guess to the guesses array and increment the guess count
	guesses.push(guess);
	count++;

	// Check if the guess is correct
	if (guess === randomNumber) {
		message = "Correct! It took you " + count + " guesses.";
		messageDisplay.style.color = "green";
	}else if ((guess-randomNumber) > 10) {
		message = "Very High";
		messageDisplay.style.color = "red";
	} 
    else if (guess > randomNumber) {
		message = "High";
		messageDisplay.style.color = "red";
	}else if ((guess-randomNumber) < -10) {
		message = "Very Low";
		messageDisplay.style.color = "red";
	}  
    else {
		message = "Low";
		messageDisplay.style.color = "red";
	}

	// Display the message and the guesses
	messageDisplay.innerHTML = message;
	guessInput.value = "";
	guessesDisplay.innerHTML = "Guesses: " + guesses.join(", ");
}

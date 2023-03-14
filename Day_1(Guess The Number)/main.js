const randomNumber = Math.floor(Math.random() * 100) + 1;
const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const message = document.getElementById("message");
const guessesLeft = document.getElementById("guesses-left");
const totalGuesses = 5;

let guessCount = 0;
submitButton.addEventListener("click", checkGuess = (e) => {

    const userGuess = Number(guessInput.value);
    guessCount++;
    const guessesRemaining = totalGuesses - guessCount;
    guessesLeft.innerHTML = `Guesses left: ${guessesRemaining}`;
    if (guessCount !== totalGuesses) {

        if (userGuess === randomNumber) {
            message.innerHTML = `Congratulations! You guessed Right`;
            guessInput.disabled = true;
            submitButton.disabled = true;
        } else if (userGuess < randomNumber) {
            message.innerHTML = "Too low. Try again.";
        } else if (userGuess > randomNumber) {
            message.innerHTML = "Too high. Try again.";
        }
    } else {
        message.innerHTML = `The number was ${randomNumber}.`;
        guessInput.disabled = true;
        submitButton.disabled = true;
        alert('Sorry, you ran out of guesses.')
    }

    guessInput.value = "";
});


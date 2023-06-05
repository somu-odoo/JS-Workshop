var randomNumber = Math.floor(Math.random() * 100) + 1;
var guessCount = 0;

    function checkGuess() {
      var guess = parseInt(document.getElementById("guess-input").value);

      if (isNaN(guess)) {
        document.getElementById("result").innerHTML = "Please enter a valid number.";
        return;
      }

      guessCount++;

      if (guess < randomNumber) {
        document.getElementById("result").innerHTML = "HIGH";
        document.getElementById("result").style.color="red";
      } else if (guess > randomNumber) {
        document.getElementById("result").innerHTML = "LOW";
        document.getElementById("result").style.color="yellow";
      } else {
        document.getElementById("result").innerHTML = "Correct guess - " + guessCount + " Trials";
        document.getElementById("result").style.color="green";
      }
    }
var guess = 0;
document.getElementById("submitguess").onclick = function(){

    // number guessed by user    
      var x = document.getElementById("guessField").value;
      var y = Math.floor(Math.random() * 10 + 1);
      if(x == y)
      {
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
              + guess + " GUESS ");
        guess = 0;

      }
      else if(x > y) /* if guessed number is greater than actual number*/
      {
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
      }
      else
      {
        guess++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER")
      }
  }
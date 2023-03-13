var guess = 1;
document.getElementById("submit_num").onclick = function(){   
    let k = document.getElementById("guess_num").value;
    let n = Math.random() * 10 + 1;

    if(k == n)
    {    
      alert("CONGRATULATIONS!!! YOU GUESSED IT"
            + guess + " GUESS ");
      guess = 0;
    }
    else if(k > n) /* if guessed number is greater than actual number*/
    {    
      alert("TRY A SMALLER NUMBER");
      guess++;
    }
    else
    {
      alert("TRY A GREATER NUMBER")
      guess++;
    }
    console.log(guess);
}

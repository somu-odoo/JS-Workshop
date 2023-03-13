
let num = Math.floor((Math.random() * 50) + 1);

let outputText = document.getElementById("result");
let count = 0;
let btnClick = document.getElementById("btn")
let cnt = document.getElementById("count_tries")

btnClick.addEventListener("click", function(e){
    let user_input = document.getElementById("guess").value;
    count++;
    if(user_input > num)
    {
   
        outputText.innerText = "Guess a lower number"
    }
    else if(user_input < num)
    {

        outputText.innerText = "Guess a Higher number"
    }
    else 
    {
  
        outputText.innerText = "Correct!!!!"
        cnt.innerText = count

    }

});




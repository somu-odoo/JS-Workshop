let computer_number = Number(Math.floor
(Math.random()*101))
let button = document.getElementById("guess")
let total_guess = 0
button.addEventListener("click",()=>{
    let guessed_number = document.getElementById("numberInput").value;
    let suggestion_box = document.getElementById("suggestion_text");
    total_guess++;

    document.getElementById("total_guesses").innerHTML = total_guess;

    if(total_guess>10){

        document.getElementById("bandkar").style.display = "block"
        document.getElementById("oncemore").style.display = "none"
    }
    else{
        document.getElementById("oncemore").style.display = "block"
    }
    if(guessed_number<computer_number){
        // alert("Low")
        suggestion_box.innerHTML = "LOW"
        suggestion_box.style.color = "orange"
    }
    else if(guessed_number>computer_number){
        // alert("High")
        suggestion_box.innerHTML = "HIGH"
        suggestion_box.style.color = "red"
    }
    else{
        document.getElementById("bandkar").style.display = "none";
        document.getElementById("oncemore").style.display = "none";
        document.getElementById("dimag").style.display = "block";
        suggestion_box.innerHTML = "CORRECT";
        suggestion_box.style.color = "green";
    }

    
})
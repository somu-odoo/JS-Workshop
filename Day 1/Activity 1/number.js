let num = Math.floor(Math.random()*100)+1;
const button = document.getElementById("submitbtn");
let inputbox = document.getElementById("numInput");
let guess = 1;

const checkGuess = () => {
    let input = inputbox.value;
    let answer = document.getElementById("guess");
    let tries = document.getElementById("tries");
    if(input==num){
        answer.innerHTML= "Correct Answer in : " +guess+" tries.";
        guess = 0;
        num = Math.floor(Math.random()*100)+1;
        tries.innerHTML = "";
    }
    else if(input<num){
        answer.innerHTML="Higher";
        tries.innerHTML = "Number of tries : "+guess;
        guess+=1;
    }
    else{
        answer.innerHTML = "Lower";
        tries.innerHTML = "Number of tries : "+guess;
        guess+=1;
    }
}

const checkNum = () => {
    let input = inputbox.value;
    if(input<1 || input>100){
        button.innerText = "Incorrect Value";
        button.disabled = true;
    }
    else{
        button.innerText = "Submit";
        button.disabled = false;
    }
    
}

inputbox.addEventListener("change",checkNum);
button.addEventListener("click",checkGuess);






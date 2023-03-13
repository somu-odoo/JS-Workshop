let num = Math.floor(Math.random()*100)+1;
const button = document.getElementById("submitbtn");
let guess = 1;

const checkGuess = () => {
    let input = document.getElementById("numInput").value;
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

button.addEventListener("click",checkGuess);






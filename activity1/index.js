let randomNumber = 0;
let attempt = 1;
var num = document.getElementById('guessvalue');
var el = document.getElementById('btn');
var eli = document.getElementById('guessbtn');
var msg = document.getElementById('msg')

el.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 50) + 1
    num.value = "";
    msg.innerHTML = "";
    console.log(randomNumber)
});

eli.addEventListener('click', () => {
    if(num.value < randomNumber) {
        msg.innerHTML = "Guess High Number";
        attempt++;
    }

    else if(num.value > randomNumber) {
        msg.innerHTML = "Guess Low Number";
        attempt++;
    }

    else{
        msg.innerHTML = "You Guess the Right Number Yayyy !!!";
        console.log("attempt = ", +attempt)
    }
    
})
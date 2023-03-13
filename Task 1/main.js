let randomno = Math.floor(Math.random()*10);
let guessno = document.getElementById('num');

console.log(randomno)
var count = 0;
btn.addEventListener("click",()=>{
    count++;
        if (guessno.value == randomno)
        {
            document.getElementById('status').innerHTML="Congrats you took "+count+ " trails"
        }
        else if(guessno.value < randomno)
        {
            document.getElementById('status').innerHTML="lower"
        }
        else if(guessno.value > randomno)
        {   
            document.getElementById('status').innerHTML="higher"
        }
})
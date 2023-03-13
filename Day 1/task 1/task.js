const g = document.getElementById("sub");
const y = Math.floor(Math.random() * 21);

g.addEventListener("click",guessFun)
var count = 0;
flag = false;

if(flag === false ){
    document.getElementById("totalGuess").style.display = "none";
}

function guessFun(){
    const x = document.getElementById("guess").value;    
    if(x==y){
        document.getElementById("result").style.color="green";
        document.getElementById("result").innerHTML = "Game over :)";
        document.getElementById("totalGuess").innerHTML += count;
        document.getElementById("totalGuess").style.display = "block";
        document.getElementById("form").style.display = "none";
        flag = true;
    }
    else if(x<y){
        document.getElementById("result").innerHTML = "Guess is lower :(";
        count += 1;
    }
    else{
        document.getElementById("result").innerHTML = "Guess is higher :(";
        count += 1;
    }
}
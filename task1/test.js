let newnum = Math.floor((Math.random()*10) + 1)
function checkguess(){
    let number = document.getElementById("guess").value;
    console.log(newnum);
        if (number == newnum){
            document.getElementById("showanswer").innerHTML = "Your Guess is correct"
        }
        else if(number > newnum){
            alert("Try smaller number")
        }
        else{
            alert("Try Big Number")
        }
    }


    
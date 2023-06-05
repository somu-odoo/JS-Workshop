var count=1;
var number =Math.floor(Math.random()* 100);
console.log(number)
function game(){
    var guess = document.getElementById("guess_number").value;
    var result=document.getElementById("result")

    if (guess>number){
        result.innerHTML="<h3>HIGH</h3>"
    }
    else if(guess<number){
        result.innerHTML="<h3>LOW</h3>"
    }
    else {
        result.innerHTML = "<h3>CORRECT ATTEMPT - " + count + " Trials</h3>";
    }
    count++;

}
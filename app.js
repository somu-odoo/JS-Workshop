var randomnumber = Math.floor(Math.random() * 100);
console.log(randomnumber);
var count = 1;

const btnclick = document.getElementById("checkbtn");
btnclick.addEventListener("click", checknum=()=>{
    var uservalue = document.getElementById("Number").value;
    var text=document.getElementById('getanswer');
    if(uservalue){

        if (uservalue > randomnumber) {
            text.innerHTML = 'HIGH';
            text.style.color='blue'
        }
        else if (uservalue < randomnumber) {
            text.innerHTML = 'LOW';
            text.style.color='red'
        }
        else {
            text.innerHTML = `CORRECT GUESS - ${count} Trials`;
            text.style.color='green'
        }
        count++;
    }
    else{
        text.innerHTML = 'please enter number';
        text.style.color='red'
    }
})

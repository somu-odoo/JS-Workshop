btn = document.getElementById("check");
input = document.getElementById("data");
output = document.getElementById("result");
trials = document.getElementById("trials");

let count = 5;
const comp = Math.floor(Math.random()*10)+1;
console.log(comp);

btn.addEventListener('click', () => {
    trials.innerHTML = "No. of trials remaining : " + (count-1);

    if(comp == input.value){
        output.innerHTML = "CORRECT!";
        trials.innerHTML = '';
    }
    else if(comp > input.value){
        output.innerHTML = "LOW";
        count--;
    }
    else{
        output.innerHTML = "HIGH";
        count--;
    }

    input.value = '';
    if(count<1){
        btn.style.display = 'none';
        trials.innerHTML += "<br/><br/>Correct answer was : " + comp;        
    }
})
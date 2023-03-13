const btn = document.getElementById("btn");
const inputVal = document.getElementById("textBox");
let randomNum = Math.floor(Math.random() * 5);
let count = 0;

btn.addEventListener('click', () => {
    count++
    if(!inputVal.value){
        content.textContent = `Enter a number`
    }
    else if(inputVal.value == randomNum){
        content.textContent = `Correct Value is ${randomNum} and Total Trials ${count}`;
        content.textContent = result;
    } else if(inputVal.value > randomNum){
        content.textContent = `Enter Lower Number`;
    } else {
        content.textContent = `Enter Higher Number`;
    }
})
let randomNumber, counter = 0
let result = document.getElementById("result")
let h1 = document.getElementById("number")
let inputField = document.getElementById("input")

const btn = document.getElementById("btn")

function guessNumber() {
    h1.innerHTML = ""
    randomNumber = Math.floor(Math.random() * 10)
}

function checkNumber() {
    
    let inputValue = inputField.value
    h1.innerHTML = inputValue
    if(inputValue){
        counter++
        if(randomNumber < inputValue) {
            h1.innerHTML = "Guessed number is greater"
        }
        else if(randomNumber > inputValue){
            h1.innerHTML = "Guessed number is smaller"
        }
        else{
            h1.innerHTML = `Number matched! </br>Number of trials: ${counter}`
            btn.innerHTML = "Restart"
            counter = 0
        }
        
    }
    
}



btn.addEventListener("click",guessNumber)
inputField.addEventListener("input",checkNumber)
let trials = document.getElementById("trial-span")
let trialsNum = trials.textContent
let btn = document.getElementById("submit-btn")
let ans = document.getElementById("answer")
let resetbtn = document.getElementById("resetbtn");
let randomNum = Math.floor(Math.random() * 10) + 1;

console.log("Random number: ", randomNum);
btn.addEventListener('click', () => {
    let num = document.getElementById("number-input").value
    if (num != "") {
        if (trialsNum > 0) {
            if (num == (randomNum + 1) || num == (randomNum - 1)) {
                ans.innerText = "Guessed too close, try again!";
            }
            else if (num == randomNum) {
                ans.innerText = "Yay! Guessed correctly";
                resetbtn.style.display = "block";
                resetbtn.addEventListener('click', () => {
                    trialsNum = 5;
                    trials.innerText = trialsNum;
                    ans.innerText = "";
                    num.value = "";
                    resetbtn.style.display = "none";
                    randomNum = Math.floor(Math.random() * 10) + 1;
                    console.log(randomNum);
                })
            }
            else {
                ans.innerText = "Try again!";
            }
            trialsNum--;
            trials.innerText = trialsNum;
        }
        else {
            alert("No trials left please click on reset!");
            resetbtn.style.display = "block";
            resetbtn.addEventListener('click', () => {
                trialsNum = 5;
                trials.innerText = trialsNum;
                ans.innerText = "";
                num.value = "";
                resetbtn.style.display = "none";
                randomNum = Math.floor(Math.random() * 10) + 1;
                console.log(randomNum);
            })
        }
    }
    else {
        alert("Please enter a number");
    }

})
let randomNum = Math.floor((Math.random() * 10) + 1);
let count = 0;

function getValue() {
    let guessNum = document.getElementById("num").value;

    if(guessNum < randomNum) {
        count++;
        alert('Generated number is greater than your guess number');
    }
    else if(guessNum > randomNum) {
        count++;
        alert('Generated number is lesser than your guess number');
    }
    else {
        count++;
        alert('Correct guess with ' + count + ' trails');
        count = 0;
        randomNum = Math.floor((Math.random() * 10) + 1);
    }
}
var btn = document.getElementById("btn");
var number_guesed = Math.floor(Math.random() * 10)
var tried = 0

btn.addEventListener('click', () => {

    let num = document.getElementById('input_box').value
    let result = document.getElementById('result')
    tried++;

    if (num > number_guesed) {
        result.innerText = num + " is to high."
    } else if (num < number_guesed) {
        result.innerText = num + " is to low."
    } else {
        result.innerText = "You got it in " + tried + " Tried !!"
    }

    document.getElementById('input_box').value = ""

})
let num = Math.floor(Math.random() * 11);
console.log(num);
let btnChecks = document.getElementsByTagName("button")[0];
let orderLog = document.getElementById("orderLog");



let count = 0
btnChecks.addEventListener("click", function (e) {
    e.preventDefault();
    let input_field = document.getElementById("guess");
    let input_num = input_field.value;
    input_field.innerHTML = "";
    count++;
    const node = document.createElement("li");
    if (input_num > num) {
        const textnode = document.createTextNode("You went far, guess a lower number");
        node.appendChild(textnode);
        orderLog.appendChild(node);
    }
    else if (input_num == num) {
        const textnode = document.createTextNode(`Congratulations, You guessed it right !!!!!!!!! \n It took you ${count} attempts.`);
        node.appendChild(textnode);
        orderLog.appendChild(node);
    }
    else {
        const textnode = document.createTextNode(`Too low, please go higher`);
        node.appendChild(textnode);
        orderLog.appendChild(node);
    }
});




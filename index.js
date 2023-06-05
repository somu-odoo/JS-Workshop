const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

const output = document.getElementById("output");

let trial = 0;

function checkNumber() {
  trial += 1;
  let number = document.getElementById("num").value;
  if (number) {
    const ans =
      randomNumber < number
        ? ((output.innerHTML = `Number is high.`),
          (output.style.color = "red"))
        : randomNumber > number
        ? ((output.innerHTML = `Number is low.`),
          (output.style.color = "red"))
        : ((output.innerHTML = `Correct guess - ${trial} Trials.`),
          (output.style.color = "green"));
    document.getElementById("num").value = "";
  } else {
    output.innerHTML = "Please enter the number.";
    output.style.color = "red";
  }
}

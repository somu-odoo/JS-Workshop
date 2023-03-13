var btn = document.getElementById('btn');
let x = Math.floor((Math.random() * 100) + 1);
let count = 1;

btn.addEventListener('click', () => {
    console.log(x)
    var val = document.getElementById('val');
    if (x > val.value) {
        crossOriginIsolated.log("Guess high number");
        count++;
    }
    else if (x < val.value) {
        console.log("guess low number");
        count++;
    }
    else {
        console.log("correct and trials = ", count);

    }
})







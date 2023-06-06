const user_input = document.getElementById("user")
const suggester = document.getElementById("suggester")
const submit = document.getElementById("submit")
const counters = document.getElementById("counter")
const random_number_generator = ()=> Math.ceil (Math.random()*10)

const x=random_number_generator()
flag = false
let count = 0

const counter = (e)=>{
    e.preventDefault()
    if(x>user_input.value){
        suggester.innerText = "enter a greater number"
        count++
        counters.innerText = `${count} times`
    }
    else if(x<user_input.value){
        suggester.innerText = "enter a smaller number"
        count++
        counters.innerText = `${count} times`
    }
    else{
        suggester.innerText = "right guess"
        count++
        counters.innerText = `${count} times`
        flag = true
        submit.remove()    
    }
    if(flag===true){
        setTimeout(()=>{
            location.reload()
        }, 10000)
    }  
}
submit.addEventListener('click', counter)



















// var Count=1;
// var random = Math.floor(Math.random() * 100);
// console.log(random);
// function task(){
//     var guess = document.getElementById("guess").value;
//     var result = document.getElementById("result");

//     if (guess > random) {
//         result.innerHTML = "<h3>HIGH</h3>";
//     } else if (guess < random) {
//         result.innerHTML = "<h3>LOW</h3>";
//     } else {
//         result.innerHTML = "CORRECT GUESS - " + Count + " Trials";
//     }

//     Count++;
// }





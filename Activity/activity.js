let num = document.getElementById("num")
const r = Math.floor((Math.random()*10)+1);
console.log(r);
let a = 0;
num.addEventListener('change',() => {
    n1 = num.value;
    let random = document.getElementById("random");
    let tryn = document.getElementById("try");
    if(n1 < r){
        random.innerHTML = "To Much Lower";
    }
    else if(n1 >r){
        random.innerHTML = "To Much Higher";
    }
    else{
        random.innerHTML = "Perfect Match";
    }
    tryn.innerHTML =(a+=1);
})


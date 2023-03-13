let num = document.getElementById("num")
const guess=Math.floor((Math.random()*10)+1);
console.log(guess);
var x=0;
num.addEventListener('change',() => {
    nval=num.value;
    let pval=document.getElementById("ncheck");
    let tryn=document.getElementById("tryno");
    if(nval>guess){
        pval.innerHTML="guess lower";
    }
    else if(nval<guess){
        pval.innerHTML="guess higher";
    }
    else{
        pval.innerHTML="match";
        pval.setAttribute("style","color:green;font-size:50px;")
        num.setAttribute("readonly","True");
    }
    tryn.innerHTML=(x+=1);
})

var num=document.getElementById('num')
var btn = document.getElementById('btn1');
let x=Math.floor((Math.random()*10))
let gus=0
console.log(x)

btn.addEventListener("click",()=>{

    gus+=1
     console.log(num);
        if(num.value==x){
            document.getElementById('status').innerHTML="CORRECT GUESSS: "+gus+" Trials <br>";

        }
        if(num.value>x){
            document.getElementById('status').innerHTML="HIGH<br>";
        }
        if(num.value<x){
            document.getElementById('status').innerHTML="LOW<br>"
        }
    
})
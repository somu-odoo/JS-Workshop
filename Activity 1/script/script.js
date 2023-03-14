let butn = document.getElementById("btn");
rand = Math.floor(Math.random() *6);
let output = document.querySelector('#out');
console.log(rand);
let left=0;

element = document.createElement('p');

if(butn){
    butn.addEventListener("click", () =>{
        left++;
        let data = document.querySelector('#data').value;
        if(!data){ 
            alert("must enter number");
        }
        else if(data>rand){
            output.textContent = "Wrong.. its more less";
        }
        else if(data<rand){
            output.textContent = "Wrong.. it's greater than this number";
        }
        else{
            output.textContent = `Congrats it's ${rand}, guess it in ${left} attempts`;
        }
        
    });
}



// let val = undefined;

// if(val){
//     console.log('no');
// }
// else{
//     console.log('Yeahhh');
// }



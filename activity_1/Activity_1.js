let random_num = Math.floor(Math.random()*100)+1
let trails = 0


function getvalue(){
    let userguessnum = document.getElementById("guessinput").value;
    if(userguessnum > random_num){
        trails++;
        alert("it is too big think for smaller");
        
    }
    else if (userguessnum < random_num) {
        trails++;
        alert("it is too small think for a greater number");
        
    }
    else {
        trails++;
        alert(`yayy you are correct and you take a ${trails} trails`);
        trails=0;
        random_num = Math.floor(Math.random()*100)
        console.log(random_num)//check

    }
}
console.log(random_num)//check

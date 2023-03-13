var count = 0
const a = Math.floor(Math.random() * 11);
function myFunction() {
    count = count + 1
    const input = document.getElementById('input').value
    const num = parseInt(input)
   

    
        if (num<a) {
            c = a - num
            console.log("HIGH BY" + c)
            document.getElementById('answer').innerHTML="HIGH"
           
            
        }
        else if (num > a) {
            v = num - a
            console.log("LOW BY" + v)
            document.getElementById('answer').innerHTML="LOW"
        }
        else {  
            console.log("correct guess")
            document.getElementById('answer').innerHTML="CORRECT"
        }
    document.getElementById("trials").innerHTML=count


   





}
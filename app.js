// // document.getElementById("p").innerHTML = "Java Script.";
// // document.getElementsBy.innerHTML("p").textContext="Java Script:"

// function myFunction() {
//     document.getElementById("demo").innerHTML = "Paragraph changed.";
// } 
// function myFunction1() {
// const myImage = document.getElementById("demo1");
// // myImage.src = "https://images.unsplash.com/photo-1525673812761-4e0d45adc0cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmljZSUyMHBob3RvfGVufDB8fDB8fHww&w=1000&q=80";
// console.log(myImage.src)
// if (myImage.src == "file:///home/odoo/Downloads/trail.jpeg")
// {
//     myImage.src = "https://images.unsplash.com/photo-1525673812761-4e0d45adc0cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmljZSUyMHBob3RvfGVufDB8fDB8fHww&w=1000&q=80"
// }
// else
// {
//     myImage.src = "file:///home/odoo/Downloads/trail.jpeg"
// }
// }
// const demo2 = document.getElementById("demo");
// demo.style.color = "red";
// const newParagraph = document.createElement("p");
// newParagraph.textContent = "Practice 1!";
// document.body.appendChild(newParagraph);
// // const newParagraph  = document.getElementById("p");
// // newParagraph.parentNode.removeChild(newParagraph );
// // let person = {
// //     name: 'John',
// //     sayHi: function() {
// //         console.log('Hi, my name is ' + this.name);
// //     }
// //   }
// //   person.sayHi(); 



// ---------------------------------------------------------------------------------------------
// guess the number:



let random = Math.floor((Math.random() * 100) + 1);
const id3 = document.getElementById("id3"); 
const id4 = document.getElementById("id4");
var trails = 5;
  
function restartValue()
{
    document.getElementById("demo").value = "";
    trails = 5;
    random = Math.floor((Math.random() * 100) + 1);
}
function checkValue() {
    if(document.getElementById("demo").value!="" && trails > 0) {
        
    const value = parseInt(document.getElementById("demo").value);
    console.log (typeof value)
    if (value === random) {
            id3.textContent="Your guess was correct";
            id4.textContent="You won";
            return;
        } 
    else if (value > random) {
            id3.textContent="Your guess is high"; 
              
        }
    else{
            id3.textContent="Your guess is low";
        
        }
        trails --;
        
        if(trails==0){
            id4.innerHTML=`You lost!!! <br> the number is ${random}`;

        }
        else{
            id4.textContent="You still have " + trails + " guesses left";
        }


} 
}



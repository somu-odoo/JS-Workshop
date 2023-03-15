const btnCheck = document.getElementById('btnCheck');

let count = 0;
let randomNumber = Math.floor(Math.random() * 10);
let newText="";

btnCheck.addEventListener("click",()=>{
	const no = document.getElementById("inputNumber").value;
	var txt = document.getElementById("txtresult");
	count = count+1;
	
	if(no>randomNumber){
		txt.innerHTML = "Number is greater then random number";
	}
	else if(no<randomNumber){
		txt.innerHTML = "Number is less then random number";
	}
	else if(no == randomNumber){
		console.log(count);
		newText = "Number is correct with "+count+" trials";
		alert(newText);
		txt.innerHTML = ""
		count = 0;
		randomNumber = Math.floor(Math.random()*10);
	}
	
})
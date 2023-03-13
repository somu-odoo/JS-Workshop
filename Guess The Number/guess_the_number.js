let submit=document.getElementById("btn1");
const Cmp_number=Math.floor(Math.random() * 100);
var Total_guess=5;

submit.addEventListener("click",check_the_guess = (e) =>{
        e.preventDefault();
        let number=document.getElementById("no").value;
        console.log(Cmp_number);
        if(Total_guess!=0)
        {
            if(number > Cmp_number)
            {
                document.getElementById("Status").textContent="Lower";
                Total_guess-=1;
                document.getElementById("Total_guess").textContent=Total_guess;                
            }
            else if(number < Cmp_number)
            {
                document.getElementById("Status").innerHTML="Higher";
                Total_guess-=1;
                document.getElementById("Total_guess").textContent=Total_guess;
            }
            else if(number == Cmp_number)
            {
                document.getElementById("Status").innerHTML="Correct You Win !!!!!";
                Total_guess-=1;
                document.getElementById("Total_guess").textContent=Total_guess;
                document.getElementById("btn1").disabled = true;
            }
        }
        else
        {
            document.getElementById("Status").innerHTML="Sorry You Lose";
            document.getElementById("btn1").disabled = true;
            window.alert("No Was : ",Cmp_number)
        }
    }
)


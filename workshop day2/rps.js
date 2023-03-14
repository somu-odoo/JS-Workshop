const {Component , mount , xml , useState, useEnv, reactive} = owl;

let guesses = 5;
let userWinCount = 0;
let computerWinCount = 0;

const finalData = () => {
    const guess = useEnv();
    return useState(guess.store);
}

class Input extends Component {
    static template = xml`
    <div>Hint</div>
    <div>1:Rock</div>
    <div>2:Paper</div>
    <div>3:Scissors</div>
    <input type="text" id="data" placeholder="Enter 1 or 2 or 3"/>`
    ;

    getInput(){
        const input = document.getElementById("data").value;
        console.log("You: "+input);
        return input;
    }
    

}

class Root extends Component {
    static template = xml`
    <h1>Guess the Case</h1>
    <Input />
    <div></div><br/>
    <button t-on-click="check">Enter!</button>
    <div/><br/>
    <div id="display"></div><br/>
    <div id="wincount"></div>`
    ;


    static components = { Input };

    setup(){
        this.user = finalData();
    }

    check(){

        const randomNumber = Math.floor(Math.random()*3)+1;
        console.log("Computer generated: "+randomNumber)
        let userInputNumber = this.user.getInput()

        if((userInputNumber==1 & randomNumber==3 ) | (userInputNumber==2 & randomNumber==1) | (userInputNumber==3 & randomNumber==2)){
            console.log("You Win!");
            display.innerHTML = "You win";
            userWinCount++;
            console.log("You have won "+userWinCount+" time out of 5");

        }
        else if((userInputNumber==2 & randomNumber==3 ) | (userInputNumber==3 & randomNumber==1) | (userInputNumber==1 & randomNumber==2)){
            console.log("Computer Wins!");
            display.innerHTML = "Computer wins";
            computerWinCount++;
            console.log("Computer have won "+computerWinCount+" time out of 5");        
            // wincount.innerHTML(computerWinCount);
        }
        else{
            console.log("Draw");
            display.innerHTML = "Draw";
        }

        guesses--;

        if(guesses==0){setTimeout(() => {
            console.log("Game over")
            document.getElementById("data").disabled = true;
            if(userWinCount==computerWinCount){
                console.log("Match drawn")
            }
            else if(userWinCount>computerWinCount){
                display.innerHTML = "User won the game"
            }
            else{
                display.innerHTML = "Computer won the game"
            }
            
        }, 3000);
            
        }
    }
}

const createData = () => {
    return reactive(new Input);
}

const env = {store : createData()};

mount(Root,document.body,{dev: true,env});
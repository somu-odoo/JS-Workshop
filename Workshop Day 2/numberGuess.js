const {Component , mount , xml , useState, useEnv, reactive} = owl;

const rand = Math.floor(Math.random()*10)+1;
let guesses = 3;
let flag=0;

const finalData = () => {
    const guess = useEnv();
    return useState(guess.store);
}

class Input extends Component {
    static template = xml`
    <input type="text" id="data" placeholder="Enter number b/w 1 to 10"/>
    `;

    getInput(){
        const input = document.getElementById("data").value;
        console.log(input);
        return input;
    }
    
}

class Root extends Component {
    static template = xml`
    <h1>Guess the Number</h1>
    <p>Guess a number between 1 to 10 : </p>
    <Input />
    <div></div><br/>
    <button t-on-click="check">Guess!</button>
    `;

    
    static components = { Input };

    setup(){
        this.user = finalData();
    }

    check(){

        let no = this.user.getInput()

        console.log('clicked');
        
        console.log('co'+rand);

        if(no > rand){
            console.log("High");
        }
        else if(no < rand){
            console.log("Low");
        }
        else{
            console.log("Correct");
            document.getElementById("data").disabled = true;
            flag=1;
        }

        guesses--;

        if(guesses==0 && flag==0){
            console.log("Game over. The correct number was " + rand + "!!")
            document.getElementById("data").disabled = true;
        }
    }
}

const createData = () => {
    return reactive(new Input);
}

const env = {store : createData()};

mount(Root,document.body,{dev: true,env});
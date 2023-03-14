const {Component , mount , xml , useState, useEnv, reactive} = owl;

const randomNumber = Math.floor(Math.random()*100)+1;
let count = 5;

const finalData = () => {
    const guess = useEnv();
    return useState(guess.store);
}

class Input extends Component {
    static template = xml`
    <input type="text" id="data" placeholder="Enter number between 1 to 100"/>`
    ;

    getInput(){
        let input = document.getElementById("data").value;
        return input;
    }
}

class Root extends Component {
    static template = xml`
    <Input />
    <div/><br/>
    <button t-on-click="check">Guess!</button>
    <div/><br/>
    <div id="display"></div>`
    ;

    static components = { Input };

    setup(){
        this.user = finalData();
    }

    check(){
        console.log(randomNumber);
        const display = document.getElementById("display");
        let guess = this.user.getInput();

        if(randomNumber == guess){
            display.innerHTML = "Correct";
            document.getElementById("data").disabled = true;
        }
        else if ((guess-randomNumber) > 10){
          display.innerHTML = "Very High"
          count--;
        }
        else if ((guess-randomNumber) < -10){
          display.innerHTML = "Very Low"
          count--;
        }
        else if(randomNumber > guess){
            display.innerHTML = "Low";
            count--;
        }
        else{
            display.innerHTML = "High";
            count--;
        }

        display.innerHTML += "<br/><br/>No. of trials remaining : " + count;
        guess = '';

        if(count==0) {
          display.innerHTML += "<br/><br/>Correct answer was : " + (randomNumber);
          document.getElementById("data").style.display='none';
      }
        
      }
    }


const createData = () => {
    return reactive(new Input);
}

const env = {store : createData()};

mount(Root,document.body,{dev: true,env});
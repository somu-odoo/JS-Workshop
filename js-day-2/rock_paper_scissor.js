const {Component , mount , xml , useState, useEnv, reactive} = owl;

let count=0,uPoints=0,cPoints=0;

const finalData = () => {
    const guess = useEnv();
    return useState(guess.store);
}

class Output extends Component {
    static template = xml`
    <div id="result"></div>
    `;
}

class Input extends Component {
    static template = xml`
    <button t-on-click="play(1)" value="1">Rock</button><span>  </span>
    <button t-on-click="play(2)" value="2">Paper</button><span>  </span>
    <button t-on-click="play(3)" value="3">Scissor</button>
    `;

    input=0;
    play(x){
        input = x;
    }

    getInput(){
        return input;
    }
}

class Root extends Component {
    static template = xml`
    <Input />
    <div/><br/>
    <button id="btn" t-on-click="check">Play!</button>
    <div/><br/>
    <Output /> 
    `;

    static components = { Input, Output };

    setup(){
        this.user = finalData();
    }

    check(){
        count++;
        const computer = Math.floor(Math.random()*3)+1;        
        console.log(comp);
        const result = document.getElementById("result");
        let userData = this.user.getInput();

        //1:Rock, 2:Paper, 3:Scissor
        if(comp == userData){
            result.innerHTML = "Round Draw";
        }
        else if(userData == '1' & comp == '3'){
            result.innerHTML = "Point to User";
            uPoints++;
        }
        else{
            result.innerHTML = "Point to User";
            cPoints++;
        }

        if(count == 3){
            if(uPoints > cPoints){
                result.innerHTML = "User Wins";
            }
            else if(uPoints == cPoints){
                result.innerHTML = "Game Draw";
            }
            else{
                result.innerHTML = "Computer Wins";
            }
        }
    }
}

const createData = () => {
    return reactive(new Input);
}

const env = {store : createData()};

mount(Root,document.body,{dev: true,env});
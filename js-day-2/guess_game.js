const {Component , mount , xml , useState, useEnv, reactive} = owl;

const comp = Math.floor(Math.random()*10)+1;
let count = 5;

const finalData = () => {
    const guess = useEnv();
    return useState(guess.store);
}

class Input extends Component {
    static template = xml`
    <input type="text" id="data" placeholder="Enter number b/w 1 to 10"/>
    `;

    getInput(){
        let input = document.getElementById("data");
        return input;
    }
}

class Root extends Component {
    static template = xml`
    <Input />
    <div/><br/>
    <button id="btn" t-on-click="check">Guess!</button>
    <div/><br/>
    <div id="display"></div>
    `;

    static components = { Input };

    setup(){
        this.user = finalData();
    }

    check(){
        console.log(comp);
        const display = document.getElementById("display");
        let userData = this.user.getInput();

        if(comp == userData.value){
            display.innerHTML = "Correct";
        }
        else if(comp > userData.value){
            display.innerHTML = "Low";
            count--;
        }
        else{
            display.innerHTML = "High";
            count--;
        }

        display.innerHTML += "<br/><br/>No. of trials remaining : " + (count);
        userData.value = '';

        if(count<1) {
            display.innerHTML += "<br/><br/>Correct answer was : " + (comp);
            document.getElementById("btn").style.display='none';
        }
    }
}

const createData = () => {
    return reactive(new Input);
}

const env = {store : createData()};

mount(Root,document.body,{dev: true,env});

































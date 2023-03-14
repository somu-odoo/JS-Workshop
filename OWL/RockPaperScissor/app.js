const{Component,mount,xml,reactive,useState,useEnv} = owl;


const finalData = () =>{

    const data = useEnv();

    return useState(data.store);
}
class WriteText{

    computerGuess = Math.floor((Math.random()*3) + 1);
    userInput = "";
    result = ""
    userWon = 0;
    computerWon = 0;
    random = "";

   updateUser()
   {
    this.userWon++;
   }

   getUser()
   {
     return this.userWon;
   }

   updateComputer()
   {
    this.computerWon++;
   }

   getComputer()
   {
    return this.computerWon
   }

}

class First extends Component{

    static template = xml `
    <div id="first">
    <b> Select Your Choice </b> <br/><br/>
    <div id="btn">
    <button id ="in-btn" type="button" class="btn btn-dark" t-on-click = "clickRock">Rock</button>
    <button id ="in-btn" type="button" class="btn btn-dark" t-on-click = "clickPaper" >Paper</button>
    <button id ="in-btn" type="button" class="btn btn-dark" t-on-click = "clickScissor" >Scissor</button>
    </div>
    </div>
    `;

    clickRock()
    {   
        this.first.userInput = "Rock"

        if(this.first.computerGuess == 1){
            this.first.result = "You Won!!!"
            this.first.updateUser();
        }
        else{
            this.first.result = "You Lose!!!"
            this.first.updateComputer();
        }
        
        console.log(this.first.computerGuess);
    }

    clickPaper()
    {   
        this.first.userInput = "Paper"

        if(this.first.computerGuess == 2){
            this.first.result = "You Won!!!"
            this.first.updateUser();

        }
        else{
            this.first.result = "You Lose!!!"
            this.first.updateComputer();

        }
    }

    clickScissor()
    {   
        this.first.userInput = "Scissor"

        if(this.first.computerGuess == 3){
            this.first.result = "You Won!!!"
            this.first.updateUser();

        }
        else{
            this.first.result = "You Lose!!!"
            this.first.updateComputer();
        }

    }


    setup(){

        this.first = finalData();

    }

}

class Second extends Component{

    static template = xml `
     <div id="second">
        <b id="txt"><t t-esc = "this.second.userInput"/></b>
        <b id="txt"><t t-esc = "this.second.result"/></b>
     </div>
    `;

    
    setup(){

        this.second = finalData();

            if(this.second.computerGuess == 1)
                this.random = "Rock";
            else if(this.second.computerGuess == 2)
                this.random = "Paper";
            else
                this.random = "Scissor";

    }

}

class Root extends Component{
    static template = xml `
    <div id="container">
    <b>Rock Paper Scissor</b> <br/><br/>
    <First />
    <Second />
    <div>
        <b>score-card <t t-esc = "this.root.getUser()"/> <t t-esc = "this.root.getComputer()"/></b>
    </div>
    </div>
    `;


    setup(){

        this.root = finalData();

    }

    static components = {First,Second};
}


const createData = () =>{

    return reactive(new WriteText);
}

const env = {
    store:createData()
}
mount(Root,document.body,{dev:true,env})
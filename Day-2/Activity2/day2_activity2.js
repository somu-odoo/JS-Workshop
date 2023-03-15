const{Component,mount,xml,reactive,useEnv,useState}=owl;

const finalData=()=>{
    const counter=useEnv();
    return useState(counter.store);
}

class Datalist{
    count=0;user_score=0;comp_score=0;
    updateCount(){this.count++;}
    getCount(){return this.count;}
    updateUser_score(){this.user_score++;}
    getUser_score(){return this.user_score;}
    updateComp_score(){this.comp_score++;}
    getComp_score(){return this.comp_score;}
}

class Score extends Component{
    static template=xml`
        <h3> Your Score:
        <t t-esc="this.score.getUser_score()"/><br/>
        Computer Score:
        <t t-esc="this.score.getComp_score()"/></h3>
        <h3> Rounds=
        <t t-esc="this.score.getCount()"/>/5</h3>
        
    `;
    setup(){
        this.score=finalData();
    }
}

class Result extends Component{
    static template=xml`
    <h3 id="result"></h3>  
    `;
}

class UserInput extends Component{
    static template=xml`
    <div>
    <h1> Rock-Paper-Scissor </h1>
    <h3>Enter your choice<br/>
        1.Rock<br/>
        2.Paper<br/>
        3.Scissor<br/>
    </h3> 
    <input type="number" id="number" t-on-change="checknumber"/>
    <Score/>
    <Result/>
    </div>
    `;
    setup(){
        this.count=finalData();
    }

    checknumber(ev){
        this.count.updateCount()
        let user_input=ev.target.value;
        console.log(user_input)
        let comp_input=Math.floor((Math.random()*3) +1);
        console.log(comp_input)
        let result=document.getElementById("result")
        if(user_input==comp_input){
            result.innerHTML=("Game is draw!!")
        }
        else if(user_input==1 && comp_input==2){
            result.innerHTML=("Computer wins!!")
            this.count.updateComp_score()
        }
        else if(user_input==1 && comp_input==3){
            result.innerHTML=("You win!!")
            this.count.updateUser_score()
        }
        else if(user_input==2 && comp_input==1){
            result.innerHTML=("You win!!")
            this.count.updateUser_score()
        }
        else if(user_input==2 && comp_input==3){
            result.innerHTML=("Computer wins!!")
            this.count.updateComp_score()
        }
        else if(user_input==3 && comp_input==1){
            result.innerHTML=("Computer wins!!")
            this.count.updateComp_score()
        }
        else if(user_input==3 && comp_input==2){
            result.innerHTML=("You win!!")
            this.count.updateUser_score()
        }
        else{
            alert("Please enter valid input")
        }

        if(this.count.getCount()>5){
            if(this.count.getUser_score()>this.count.getComp_score()){
                alert("Congratulations!!You Win!!")
                this.count.count=0;this.count.user_score=0;this.count.comp_score=0;
            }
            else if(this.count.getUser_score()<this.count.getComp_score()){
                alert("Computer Wins!!!Better Luck next time!!")
                this.count.count=0;this.count.user_score=0;this.count.comp_score=0;
            }
            else{
                alert("Game is Draw!!Try Again..")
                this.count.count=0;this.count.user_score=0;this.count.comp_score=0;
            }
        }    
    }
    static components={ Score, Result};
}

const createData=()=>{
    return reactive(new Datalist())
}
const env={store:createData()}
mount(UserInput,document.body,{dev:true,env});
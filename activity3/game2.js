const {Component,mount,xml,useState,useEnv,reactive}=owl

const finalData=()=>{
     const counter=useEnv();
     return useState(counter.store)
}

class dataList{
    count=0;
    updateCount(){ this.count++; }
    getCount(){ return this.count; }
}

class Third extends Component{
    static template=xml`
    <h2>ROCK PAPER SCISSORS</h2>

    `;
    

}
class Second extends Component{
    static template=xml`
    <t t-esc="props.x.x"/><br/>
    <b>Please choose one: </b>
    <div class="buttons">
    <button id="rock" value="rock" t-on-click="check">Rock</button>
    <button id="paper" value="paper" t-on-click="check">Paper</button>
    <button id="scissor" value="scissor" t-on-click="check">Scissor</button>
    </div>
    <h2 id="result"></h2>
    <p id="trials">No. of trials<t t-esc="counter.getCount()"/></p>
    `;
    static props=["x"]

    setup(){
        this.counter=finalData();
    }
    check(evt){
        this.counter.updateCount();
        const userval=evt.target.value;
        let result=document.getElementById("result")

        // const rock=document.getElementById("rock").value 
        // const paper=document.getElementById("paper").value
        // const scissor=document.getElementById("scissor").value 
        const computerOptions = ['rock','paper','scissor'];
        const x=this.props.x.x;
        const computerChoice = computerOptions[x];
        console.log(x)
        console.log(computerChoice)
        console.log(userval)
 
        if(userval == computerChoice){
          result.innerHTML="TIE"
        }
        else if(userval == 'rock'){
            if(computerChoice == 'paper'){
                result.innerHTML="Computer Won"
            }
            else{
                result.innerHTML="Player Won"
            }
        }
        else if(userval == 'scissor'){
            if(computerChoice=='rock'){
                result.innerHTML="Computer Won"
            }
            else{
                result.innerHTML="Player Won"
            }
        }
        else if(userval == 'paper'){
            if(computerChoice=='scissor'){
                result.innerHTML="Computer Won"
            }
            else{
                result.innerHTML="Player Won"
            }
        }



    //     let result=document.getElementById("result")
    //     if(num <x){
    //         result.innerHTML="LOWER THAN GUESS";      
    //     }
    //     else if(num >x){
    //         result.innerHTML="HIGHER THAN GUESS";
    //     }
    //     else{
    //         result.innerHTML="CORRECT GUESS";
    //         result.style.color='green'
    //     }  
    //     document.getElementById("trials").innerHTML=this.counter.getCount();
      
    }

     
}

class Root extends Component{
    static template=xml`<h1>Computer Guess:</h1>
    <Third />
    <Second x="data"/>
   
    
   `;
    setup(){
    let x = Math.floor(Math.random() * 3);
    console.log(x)
    this.data=useState({x:x})

    }

    static components={Second,Third};

}
const createData=()=>{
    return reactive(new dataList);
}

const env={store:createData()}
mount(Root,document.body,{dev:true,env});
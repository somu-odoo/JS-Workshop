
const {Component,mount,xml,useState,useEnv,reactive}=owl
const finalData=()=>{
    const counter=useEnv();
    return useState(counter.store)
}


class dataList{
    computer=0;
    player=0;
    moves=10;
    updateMoves(){ this.moves--;}
    getMoves(){return this.moves;}
    updateComputer(){ this.computer++; }
    updatePlayer(){  this.player++; }
    getComputer(){ return this.computer; }
    getPlayer(){ return this.player;}
}


class Third extends Component{
    static template=xml`
    <h2>Rock, Paper and Scissor game</h2>
        `;
    
}
class Second extends Component{
    static template=xml`
    
    <div class="buttons">
    <p><t t-esc="props.st.st"/></p>
    <p  id="cguess"></p>
    <b>Please choose one: </b><br/>
    <button id="rock" style="" value="rock" t-on-click="check">Rock</button>
    <button id="paper" value="paper" t-on-click="check">Paper</button>
    <button id="scissor" value="scissor" t-on-click="check">Scissor</button>
    <h2 id="result" style="color:blue;"></h2>
    <p>Computer Score: </p>
    
    <p id="c"></p>
    <p>Player Score: </p>
    <p id="p"></p>
    <h2 id="final" style="color:green;"></h2>
    </div>

    `;
    
    static props=["st"]
    setup(){
        this.counter=finalData();
    }
    

    
    check(evt){

       
        
        const userval=evt.target.value;
        let result=document.getElementById("result")
        let x = Math.floor(Math.random() * 3);
        
        const computerOptions = ['rock','paper','scissor'];
        const computerChoice = computerOptions[x];
        document.getElementById("cguess").innerHTML=computerChoice;


        
        this.counter.updateMoves();
        if(this.counter.getMoves() >=1)
        {

        
        if(userval == computerChoice){
          result.innerHTML="TIE"
        }
        else if(userval == 'rock'){
            if(computerChoice == 'paper'){
                result.innerHTML="Computer Won";
                this.counter.updateComputer();
            }
            else{
                result.innerHTML="Player Won";
                this.counter.updatePlayer();
            }
        }
        else if(userval == 'scissor'){
            if(computerChoice=='rock'){
                result.innerHTML="Computer Won"
                this.counter.updateComputer();

            }
            else{
                result.innerHTML="Player Won";
                this.counter.updatePlayer();

            }
        }
        else if(userval == 'paper'){
            if(computerChoice=='scissor'){
                result.innerHTML="Computer Won";
                this.counter.updateComputer();

            }
            else{
                result.innerHTML="Player Won"
                this.counter.updatePlayer();

            }
        }
        }
        else{
            result.innerHTML="Game Over"

            if(this.counter.getComputer() > this.counter.getPlayer()){
                document.getElementById("final").innerHTML="Finally Computer has won !!!"

            }
            else if(this.counter.getComputer() < this.counter.getPlayer()){
                document.getElementById("final").innerHTML="Finally Player has won !!!"

            }
            else{
                document.getElementById("final").innerHTML="The match tied !!!"

            }
        }
      document.getElementById("c").innerHTML=this.counter.getComputer();
      document.getElementById("p").innerHTML=this.counter.getPlayer();     
          
    }

     
}

class Root extends Component{
    static template=xml`
    <Third/>
    <Second st="st"/>
     
   `;
    setup(){
        this.st=useState({st:"Computer Guess:"})
    }
    static components={Second,Third};

}
const createData=()=>{
    return reactive(new dataList);
   
    
}


const env={store:createData()}
mount(Root,document.body,{dev:true,env});
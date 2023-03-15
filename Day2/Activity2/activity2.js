const{Component , mount ,xml,useState,useEnv,reactive}=owl
let val;
let r;
function guessgame(){
    let n=Math.floor((Math.random()*3)+1);
    if(n==1){
        return "rock";
    }
    else if(n==2){
        return "paper";
    }
    else{
        return "sessior";
    }
}
const finalData=()=>{
    const apple=useEnv();
    return useState(apple.store);
}
const finalWin=()=>{
    const app=useEnv();
    return useState(app.tries);
}
class userWin{
    win=0;
    updateWin(){this.win++};
    getWin(){return this.win};
}
class dataList{
    count=5;
    updateCount(){this.count--};
    getCount(){return this.count};
}

class Third extends Component{
    static template=xml`<br/><b><span id="result" style="color:red">Chooes Random Number</span></b><br/><br/>
    <label style="color:blue">Win:</label><b style="color:blue"><t t-esc="this.res.getWin()"/></b>
    `
    setup(){
        
        this.res=finalWin();  
   
    }
    
}

class Second extends Component{
    static template=xml`<button value="rock" id="rock" t-on-click="check" style="background-color:grey">rock</button>
    <button value="paper" id="paper" t-on-click="check">paper</button>
    <button value="scissor" id="sci" t-on-click="check" style="background-color:yellow">scissors</button><br/><br/>
    <Third/>
    
    ` 
    setup(){
       this.data;
       this.cap=finalData();
       this.wap=finalWin();
    }
    check(ev){
        
        if(this.cap.getCount()!=0){
        
        this.cap.updateCount();
        
        const guess=guessgame();
        console.log(guess);
        val=ev.target.value;
        
        console.log(val);
        if(guess=="rock"){
            if(val=="paper"){
                this.data="user win";
                document.getElementById("result").innerHTML="User Win";
                console.log(this.data);
                this.wap.updateWin();
            }
            else if(val=="scissor"){
                this.data="computer win";
                document.getElementById("result").innerHTML="Computer Win";
                console.log(this.data);
                
            }
            else{
                this.data="tie";
                document.getElementById("result").innerHTML="Tie";
                console.log(this.data);
            }
        }
        else if(guess=="paper"){
            if(val=="scissor"){
                this.data="user win";
                document.getElementById("result").innerHTML="User Win";
                console.log(this.data);
                this.wap.updateWin();
            }
            else if(val=="rock"){
                this.data="computer win";
                document.getElementById("result").innerHTML="Computer Win";
                console.log(this.data);
            }
            else{
                this.data="tie";
                document.getElementById("result").innerHTML="Tie";
                console.log(this.data);
            }    
        }
        else{
            if(val=="rock"){
                this.data="user win";
                document.getElementById("result").innerHTML="User Win";
                console.log(this.data);
                this.wap.updateWin();
            }
            else if(val=="paper"){
                this.data="computer win";
                document.getElementById("result").innerHTML="Computer Win";
                console.log(this.data);
            }
            else{
                this.data="tie";
                document.getElementById("result").innerHTML="Tie";
                console.log(this.data);
            }  
        }  
        }
        
    }
    
    static components={Third};
    
}
class Root extends Component{
    static template=xml`
    <Second/>`
    setup(){
        this.cap=finalData();
        this.wap=finalWin();
    }
    static components={ Second };
}
const createData=()=>{
    return reactive(new dataList());
}
const resWin=()=>{
    return reactive(new userWin());
}
const env={store:createData(),tries:resWin()};
mount(Root,document.body,{dev:true,env});
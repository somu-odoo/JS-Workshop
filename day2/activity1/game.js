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
    static template=xml`<br/><b><span id="result">guess</span></b><br/>
    <spam >Win:</spam><b><t t-esc="this.res.getWin()"/></b>
    `
    setup(){
        
        // console.log(this.res.getWin())
        this.res=finalWin();
        
        
    }
    
}

class Second extends Component{
    static template=xml`<button value="rock" id="rock" t-on-click="check">rock</button>
    <button value="paper" id="paper" t-on-click="check">paper</button>
    <button value="scissor" id="sci" t-on-click="check">scissors</button><br/><br/>
    <Third/>
    
    ` 
    setup(){
       this.data;
       this.cap=finalData();
       this.wap=finalWin();
    }
    check(ev){
        
        if(this.cap.getCount()!=0){
            // console.log(this.cap.getCount());
            // document.getElementById("rock").setAttribute("disable","True");
        
        this.cap.updateCount();
        
        const guess=guessgame();
        console.log(guess);
        val=ev.target.value;
        
        console.log(val);
        if(guess=="rock"){
            if(val=="paper"){
                this.data="user win";
                document.getElementById("result").innerHTML="user win";
                console.log(this.data);
                this.wap.updateWin();
            }
            else if(val=="scissor"){
                this.data="computer win";
                document.getElementById("result").innerHTML="computer win";
                console.log(this.data);
                
            }
            else{
                this.data="tie";
                document.getElementById("result").innerHTML="tie";
                console.log(this.data);
            }
        }
        else if(guess=="paper"){
            if(val=="scissor"){
                this.data="user win";
                document.getElementById("result").innerHTML="user win";
                console.log(this.data);
                this.wap.updateWin();
            }
            else if(val=="rock"){
                this.data="computer win";
                document.getElementById("result").innerHTML="computer win";
                console.log(this.data);
            }
            else{
                this.data="tie";
                document.getElementById("result").innerHTML="tie";
                console.log(this.data);
            }    
        }
        else{
            if(val=="rock"){
                this.data="user win";
                document.getElementById("result").innerHTML="user win";
                console.log(this.data);
                this.wap.updateWin();
            }
            else if(val=="paper"){
                this.data="computer win";
                document.getElementById("result").innerHTML="computer win";
                console.log(this.data);
            }
            else{
                this.data="tie";
                document.getElementById("result").innerHTML="tie";
                console.log(this.data);
            }  
        }  
        }
        
    }
    
    static components={Third};
    
}
class Root extends Component{
    static template=xml`<h3>total round:</h3>
    <b><t t-esc="this.cap.getCount()"/></b><br/><br/>
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
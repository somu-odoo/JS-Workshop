const {Component,useEnv,useState,reactive,mount,xml}=owl;

const finalData = ()=>{
    const apple=useEnv()
    return useState(apple.store)
} 
class Scoreboard extends Component{
    static template=`<table>
    <thead>
        <tr>
            <th>User</th>
            <th>Computer</th>
            <th>Result</th>
        </tr>
    </thead>
</table>`
    score(x,out){
        let obj={0:"rock",1:"paper",2:"scissor"}
        console.log(x)
        if(out==obj[x]){
        
            console.log("Draw")
        }else if(out=='rock' && x==2 ||out=='paper' && x==0|| out=='scissor' && obj[x]==1){
            console.log("You win")
            
        }
        else{
            console.log("You Lose")
        }
    }
   
}

class Root extends Component{
    static template=xml`<input type="text" id="act" placeholder="Enter rock paper and scissor"/>
    <button t-on-click="click">Play</button><br/><Scoreboard`
    click(){
        // this.obj.sol()
        this.x=Math.floor((Math.random()*3));
        let out=document.getElementById("act").value
        this.obj.score(this.x,out)
    }
    setup(){
        this.obj=finalData()
    }
    static components=[Scoreboard]
}

const createDatalist=  ()=>{
    return reactive(new Scoreboard)
}
const env={store:createDatalist()}
mount(Root,document.body,{dev:true,env});

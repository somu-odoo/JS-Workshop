const{Component,mount,xml,useEnv,useState,reactive} = owl;
let num;
const finalData=()=>{
    const counter=useEnv();
    return useState(counter.store);
}

class Datalist{
    count=0;
    updateCount(){
        this.count++;
    }
    getCount(){
        return this.count;
    }
}

class Second extends Component{
static template=xml`
    <h3> Total Number of trials:</h3>
    <t t-esc="this.trialcount.getCount()"/>
`;
setup(){
    this.trialcount=finalData()
}

}

class Root extends Component{
    static template=xml`
        <h1>Guess the Number</h1>
        <input type="number" id="guessnumber" t-on-change="checknumber"/>
        <h3 id="result"></h3>
        <Second/>
        
    `;
    setup(){
        this.trial=finalData();
    }
    checknumber(ev){        
        console.log()
        this.trial.updateCount()
        let x = Math.floor((Math.random() * 10) + 1);
        console.log(x)
        num = ev.target.value;
        console.log(num)
        let result=document.getElementById("result")
        if (num>x){
            result.innerHTML="The guessed number is greater";}
        else if(num<x){
            result.innerHTML="The guessed number is smaller";}
        else{
            result.innerHTML="Correct Number";
            result.style.color='green';}
    }
    static components={ Second };
}

const createData=()=>{
    return reactive(new Datalist())
}
const env={store:createData()}
mount(Root,document.body,{dev:true,env});
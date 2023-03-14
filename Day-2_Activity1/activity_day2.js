
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


class Second extends Component{
    static template=xml`
    <t t-esc="props.x.x"/><br/>
    <b>Please Guess the number: </b>
    <input type="text" t-on-change="check" id="guess"/>
    <h2 id="result" style="color:red;"></h2>
    <p>No. of Trials:</p>
    <p id="trials"></p>
    `;
    static props=["x"]

    setup(){
        this.counter=finalData();
    }
    check(evt){
        this.counter.updateCount();

        let num=evt.target.value;
        let x=this.props.x.x;
        let result=document.getElementById("result")
        if(num <x){
            result.innerHTML="LOWER THAN GUESS";      
        }
        else if(num >x){
            result.innerHTML="HIGHER THAN GUESS";
        }
        else{
            result.innerHTML="CORRECT GUESS";
            result.style.color='green'
        }  
        document.getElementById("trials").innerHTML=this.counter.getCount();
      
    }

     
}

class Root extends Component{
    static template=xml`<b>Computer Guess:</b>
    <Second x="data"/>
    
   `;
    setup(){
    let x = Math.floor((Math.random() * 10) + 1);
    console.log(x)
    this.data=useState({x:x})

    }

    static components={Second};

}
const createData=()=>{
    return reactive(new dataList);
}

const env={store:createData()}
mount(Root,document.body,{dev:true,env});
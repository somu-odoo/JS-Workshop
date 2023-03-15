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
    <t t-esc="props.r.r"/><br/>
    <input type="text" t-on-change="clickMe"/>
    <h2 id="result"></h2>
    <p>Trials</p>
    <p id="trials"></p>
    `;
    static props=["r"]

    setup(){
        this.counter=finalData();
    }
    clickMe(ev){
        this.counter.updateCount();

        let num=ev.target.value;
        let r=this.props.r.r;
        let result=document.getElementById("result")
        if(num <r){
            result.innerHTML="Too Much Lower";      
        }
        else if(num >r){
            result.innerHTML="Too Much Higher";
        }
        else{
            result.innerHTML="Perfect Match";
        }  
        document.getElementById("trials").innerHTML=this.counter.getCount();
      
    }

     
}

class Root extends Component{
    static template=xml`
    <Second r="data"/>
   `;
    setup(){
    let r = Math.floor((Math.random() * 10) + 1);
    console.log(r)
    this.data=useState({r:r})

    }

    static components={Second};

}
const createData=()=>{
    return reactive(new dataList);
}

const env={store:createData()}
mount(Root,document.body,{dev:true,env});
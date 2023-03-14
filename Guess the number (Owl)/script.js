const { Component, mount, xml, reactive, useEnv, useState } = owl;
const rand = Math.floor(Math.random() *10);
console.log(rand);
class Datalink{
    count=0;
    updCount(){
        this.count++;
    }
    getCount(){
        return this.count;
    }
}
const FinalData = ()=>{
    const list = useEnv();
    return useState(list.store);
};
const createData = () =>{
    return reactive(new Datalink)
};
class Data extends Component{
    static template = xml`
    <p t-esc="props.data" id="show" class =" mt-2 text-center h1 text-primary"></p>
    `;
    
    static props = ['data'];
    setup(){
        this.assi = FinalData();
    }
}

class Main extends Component{
    static template = xml`
    <input type="text" placeholder="Number" id="input" class="form-control w-25 m-auto"/>
    <button t-on-click="clickme" class="btn bg-primary text-white mt-4">Submit</button>
    <Data  data="out"/>
    `;

    setup(){
        this.assi = FinalData();
        this.out= '';
    }

    clickme(){
    this.assi.updCount();
     this.val = document.getElementById('input').value;

     if(!this.val){
        alert("You must need to pass a Number");}
    else if(this.val<rand){ 
            this.out = "Wrong ! it's more larger number "; 
            }
    else if(this.val>rand){ 
            this.out = "Wrong ! it's lesser";
        }
    else{
        this.out=`Congrats you guess the right Number in ${this.assi.count} attempts`;
        console.log(this.out);
    }

    }
    static components = {Data};
}

const env = {store:createData()};
mount(Main, document.getElementById('root'),{dev:true,env});



const{Component , mount , xml,useState,reactive,useEnv} = owl;

const guess=Math.floor((Math.random()*10)+1);
console.log(guess);

let num;

const finalData=()=>{
    const apple=useEnv();
    return useState(apple.store);
}
const finalguess=()=>{
    const ap=useEnv();
    return useState(ap.st);
}
class guesslist{
    lab="..."
    updateguess(){if(num>guess){
        this.lab="lower";
        console.log(this.lab);
    }
    else if(num<guess){
        this.lab="higher";
        console.log(this.lab);
    }
    else{
        
        this.lab="match";
        console.log(this.lab);
    }};
    getguess(){return this.lab};
}
class dataList{
    count=0;
    updateCount(){this.count++};
    getCount(){return this.count};
}
class Second extends Component{
    static template=xml`<b><t t-esc="this.labl.getguess()"/></b><br/><t t-esc="this.tries.getCount()"/>`
    setup(){
        this.labl=finalguess();
        this.tries=finalData();
    }
    
}
class Root extends Component{
    static template=xml`<input type="text" placeholder="enter a number" id="num" t-on-change="getnum"/><br/><br/>
    
    <Second />`
    setup(){
        this.vnum=finalguess();
        this.cap=finalData();
    }
    getnum(event){
        
        num=event.target.value;
        this.cap.updateCount();
        this.vnum.updateguess();
        
        
        console.log("onchange");
          
    }
    
    static components={ Second };
}
const createData=()=>{
    return reactive(new dataList());
}
const guessdata=()=>{
    return reactive(new guesslist());
}
const env={store:createData(),st:guessdata()};
mount(Root,document.body,{dev:true,env});
const{Component , mount , xml, onWillRender, onWillStart,onMounted,onWillPatch,onWillUnmounted,onWillDestroy,onError,onPatched,useState,reactive,useEnv}= owl;
let num;
const guess=Math.floor(Math.random() * 11);
console.log(guess);
const finalData=()=>{
    const apple=useEnv();
    return useState(apple.store);
}
const finalGuess=()=>{
    const mango=useEnv();
    return useState(mango.st);
}
class dataList{
    count=0;
    updateCount(){this.count++;}
    getCount(){return this.count}
}
class guessList{
    lab=" "
    updateGuess(){
        if(num>guess){
            this.lab="LOW"
            console.log("LOW")
        }else if(num<guess){
            this.lab="HIGH"
            console.log("HIGH")
        }else{
            this.lab="CORRECT"
            console.log("correct")
        }
    }
    getGuess(){return this.lab}
}
class Second extends Component{
    static template=xml`<button t-on-click="clickMe">Click Me</button>
                        <t t-esc="cap.getCount()"/>
                        <t t-esc="bottle.getGuess()"/>
                        `;
    setup(){
        this.cap=finalData()
        this.bottle=finalGuess()

    }
    clickMe(){

        this.cap.updateCount();
        this.bottle.updateGuess();
        console.log('clicked');
    }
    
    
}
class Root extends Component{
    static template=xml`<h1>Guess the number</h1>
                        <input type="number" id="input" t-on-change="change"></input>
                
                        
                       
                        <Second />`;
   
    change(event){
        num=event.target.value
        /* this.vnum.updateGuess() */
        
        

    }
   static components={Second}

   



}
const createData=()=>{
    return reactive(new dataList)


}
const createGuess=()=>{
    return reactive(new guessList)
}
const env={store:createData(),st:createGuess()}
mount(Root,document.body,{dev:true,env});
const{Component , mount , xml, onWillRender, onWillStart,onMounted,onWillPatch,onWillUnmounted,onWillDestroy,onError,onPatched,useState,reactive,useEnv}= owl;
let num;
let guess=Math.floor(Math.random()*3);
console.log(guess)
let score=0;
const finalPlay=()=>{
    const mango=useEnv();
    return useState(mango.store);
}
class playList{
    updateGuess(){
        lab="..."
        if(num>guess){
            this.lab="WIN"
            console.log("WIN")
        }else if(num<guess){
            this.lab="LOOSE"
            console.log("LOSSE")
        }else{
            this.lab="DRAW"
            console.log("draw")
        }
    }
    getGuess(){
        return this.lab
    }
     
     


}
class Second extends Component{
    static template=xml`<b> <button t-on-click="clickMe">Click</button></b>
                        <t t-esc="cap.getGuess()"/>
                   `;
    clickMe(){
        this.cap.updateGuess()
    }
    setup(){
        this.cap.finalPlay()
    }

}
class Third extends Component{
    static template=xml`<b>count</b>`;

}
class Root extends Component{
    static template=xml`<h1>Rock paper scissor</h1>
    <input type="number" t-on-change="change"></input>
    <Second/>
    <Third/>`;
    change(event){
        num=event.target.value;
        console.log(num)
        this.vnum.updateGuess()
        
        

    }
    static components={Second,Third}


}
const createPlayData=()=>{
    return reactive(new playList)

}
const env={store:createPlayData()}

mount(Root,document.body)
const {Component,mount,xml,reactive,useEnv,useState}=owl;
const callEn=()=>{
    const alt=useEnv()
    return useState(alt.cay)
}
class cls{
    count=0
    status=""
    setCount(){
        this.count+=1
    }
    getCount(){
        return this.count
    }
}
class Status extends Component{
    static template=xml`<p t-esc="this.po.status"/>
    <p>Trials <t t-esc="this.po.getCount()"/></p>`
    
    setup(){
        this.po=callEn()
    }
}
class Root extends Component{

    static template=xml`<b>Guess Game</b>
    <p><input type="text" id="num" placeholder="Enter number"/></p>
    <button t-on-click="oncheck" id="check">check</button>
    <Status/>`
    
    static components={Status}
    oncheck(){
        this.obj.setCount()
        let y=document.getElementById('num').value
        
        if(y==this.x){
            this.obj.status="Congo !! Correct Guess"
            const btn=document.getElementById('check')
            btn.disabled=true;
            
        }
        if(y>this.x){
            this.obj.status="Go Lower"
        }
        if(y<this.x){
            this.obj.status="Go Higher"

        }
    }
    setup(){
        this.obj=callEn()
        this.x=Math.floor((Math.random()*10));
        console.log(this.x)
        
    }

}
const createCount= ()=>{
    return reactive(new cls)
}
const env={cay:createCount()}
mount(Root,document.body,{dev:true,env})
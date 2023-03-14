
const{ Component, mount , xml,useState,reactive,useEnv, onWillRender,onWillStart,onMounted,onWillPatch,onPatched,onRendered,onWillUnmount,onWillDestroy,onError} = owl;

const finalData = () =>{
    const apple = useEnv();
    return useState(apple.store);
}
class dataList{
    count = 0;
    updateCount(){this.count++}
    getCount(){return this.count}
}
class Second extends Component
{
    static template = xml`
        <b>I'm Second</b><br/>
        
        <t t-esc = "this.point.getCount()"/>
    `;
    setup(){
        this.point=finalData()
    }
    static props=["fruit"];
}
class Root extends Component{
    static template = xml`
        <b>Hello</b><br/>
        <Second fruit="cafe"/>
        <button t-on-click="onclick">Click</button>
    `;
    abc = "apple";
    onclick()
    {
        this.cap.updateCount();
        console.log("Clicked");
        
    }
    setup()
    {
        onWillStart(()=>{
            console.log("on will Start")
        })
        onMounted(()=>{
            console.log("on Mounted")
        })
        onWillRender(()=>{
            console.log("on will Render")
        })
        onWillPatch(()=>{
            console.log("on will Patch")
        })
        onPatched(()=>{
            console.log("on patched")
        })
        onRendered(() => console.log("onRendered"));
        onWillUnmount(() => console.log("onWillUnmount"));
        onWillDestroy(() => console.log("onWillDestroy"));
        onError(() => console.log("onError"));
        this.cafe = useState({ tea:3 , coffee: 4});
        this.cap = finalData();

    }
    static components = {Second};
}
const createData = () =>{

    return reactive(new dataList)
}
const env={store:createData()}
mount(Root, document.body,{dev:true,env});
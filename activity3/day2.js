


const{Component , mount , xml, onWillRender, onWillStart,onMounted,onWillPatch,onWillUnmounted,onWillDestroy,onError,onPatched,useState,reactive,useEnv}= owl;

const finalData=()=>{
    const apple=useEnv();
    return useState(apple.store);
}
class dataList{
    count=0;
    updateCount(){this.count++;}
    getCount(){return this.count}
}
class Second extends Component{
    static template=xml`<b>Second</b>
    <t t-esc="props.fruit.getCount()"/>`;

    static props=["fruit"];
}
class Root extends Component{
    static template= xml`<b>Hello</b>
                            <Second fruit="cap"/>
                            <button t-on-click="clickMe">Click</button>`;
    abc=12;
    setup()
    {
        /* onWillRender(()=>console.log("on will rende rcalled"))
        onWillStart(()=>console.log("on will start rcalled"))
        onMounted(()=>console.log("on mountedrcalled"))
        onWillPatch(()=>console.log("on patch"))
        onPatched(()=>console.log("on patch"))
       

        onWillUnmounted(()=>console.log("on will unmount rcalled")) */
        onWillRender(()=> console.log("will render called"));
        this.cafe=useState({tea:3,coffee:4});
        this.cap=finalData();
    }

    clickMe(){
        this.cap.updateCount();
        console.log('clicked');
    }
    static components={Second};

}
const createData=()=>{
    return reactive(new dataList);

}
const env={store:createData()}
mount(Root, document.body,{dev:true,env});
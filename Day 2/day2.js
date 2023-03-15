const {Component,reactive,useEnv,useState,mount,xml,onWillRender,onWillStart,onMounted,onWillPatch,onPatched,onRendered,onWillUnmount,onWillDestroy,onError}=owl;
const finalData = ()=>{
    const apple=useEnv()
    return useState(apple.store)
} 
class datalist{
    count=0;
    updateCount(){
        this.count+=1
    }
    getCount(){
        return this.count 
    }
}

class Second extends Component{
    static template=xml`<b>I am second </b>
                        <t t-esc="this.point.getCount()"/>`;
                        setup(){
                            this.point=finalData()
    }
    static props=["fruit"];
}
class Root extends Component{
    static template=xml`<b>Hello</b><br/>
    <Second fruit="cafe"/>
    <button t-on-click="onclk">CLick me</button>`;

    setup(){

    onWillStart(() => console.log("onWillStart"));
    onMounted(() => console.log("onMounted"));
    onWillPatch(() => console.log("onWillPatch"));
    onPatched(() => console.log("onPatched"));
    onWillRender(() => console.log("onWillRender"));
    onRendered(() => console.log("onRendered"));
    onWillUnmount(() => console.log("onWillUnmount"));
    onWillDestroy(() => console.log("onWillDestroy"));
    onError(() => console.log("onError"));
    this.cafe=useState({tea:3,coffee:4});
    this.cap=finalData();
    }
    onclk(){
        this.cap.updateCount();
        console.log("Clicked");
    }
    abc="apple";
    static components={Second};
}
const createDatalist=  ()=>{
    return reactive(new datalist)
}
const env={store:createDatalist()}
mount(Root,document.body,{dev:true,env});
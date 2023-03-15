const { Component, mount, xml ,onWillRender,onWillStart,onMounted,onWillPatch,onPatched, onRendered, onWillUnmount, onWillDestroy,onError,useState,reactive,useEnv} = owl;
//useEnv is used to get the environment
// xml supprot the Q-web template
// mount is used to get the data in a browser
// always the Component name first letter is capital except it is not mount

const finalData = ()=>{
    const apple =useEnv();
    return useState(apple.store);  

}
class dataList{
    count = 0;
    updateCount(){
        this.count++;
    }
    getCount(){
        return this.count
    }
    // update in this reactive will know and the update is there then it is rerendered

}
 // <t t-esc="props.fruit"/>
class Second extends Component{
    static template =xml`
    <b>I'M second</b> <br/>
    <t t-esc="this.bottle.getCount()"/>
    `;
    setup(){
        // final data is actualy our env accesing
        this.bottle = finalData();
    }
    static props =["fruit"];
};
class Root extends Component {
    static template = xml`<b>Hello</b> <br/>
    <Second fruit="cafe"/> <br/>
    <button t-on-click="clickMe">Click!!</button>
    `;
    // <Second abc="abc"/>  we can use the same variable name also 
    abc="apple";
    //setup is constructor for this
    // onwillrender call before the ui is come
    setup(){
        //9 Lifecycle Hooks
        onWillRender(()=>{
            console.log("onWillRender");
        })
        onWillStart(()=>{
            console.log("onWillstart");
        })
        onMounted(()=>{
            console.log("onMounted");
        })
        onWillPatch(()=>{
            console.log("onWillPatch");
        })
        onPatched(()=>{
            console.log("onPatched");
        })
        onRendered(()=>{
            console.log("onRendered");
        })
        onWillUnmount(()=>{
            console.log("onWillUnmount");
        })
        onWillDestroy(()=>{
            console.log("onWillDestroy");
        })
        onError(()=>{
            console.log("onError");
        })
        this.cafe = useState({ tea: 4, coffee: 5});
        this.cap = finalData();
    }
    clickMe(){
        this.cap.updateCount();
        console.log("clicked!!");
    }
    static components = {Second};  //bind the second component in the root means gather all information about tem[late and all that how to display in the ui

    // acces through multiple data
    // u can use localstorage to store the data so thats why we make a long setup

}
const createData = ()=>{
    return reactive(new dataList);
}
const env = {
    store : createData()
    // store is key and createdta is method
    // reactive means monitoring th changes by this we can read the changes so we add this in our environment
};
mount(Root,document.body,{dev:true,env});
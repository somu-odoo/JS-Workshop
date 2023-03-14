    const { Component, mount, xml, onWillStart, onMounted, onWillPatch, onPatched, onWillRender, onRendered, onWillUnmount, onWillDestroy, onError, useState, reactive, useEnv} = owl;

const finalData = () => {
    const apple = useEnv();
    return useState(apple.store);
}
class dataList {
    count = 0;
    updatecount(){
        this.count++;
    }
    getcount(){
        return this.count
    }
}
class Second extends Component {
    static template = xml`
        <b>My name is </b>
        <b><t t-esc="this.bottle.getcount()" /></b>`;

        static props = ["name"];
        setup(){
            this.bottle = finalData();
        }    
};
class Root extends Component {
    static template = xml`
        <b>Hello, </b>
        <Second name="age" />
        <div><button t-on-click="clickMe">Click</button></div>`;

    var1 = "Jain";

    setup(){
        // onWillStart(() => {console.log("will start")});
        // onWillRender(() => { console.log("Will Render")});
        onWillPatch(() => { console.log("Will Patch") });
        onPatched(() => {console.log("Patched")});
        // onRendered(() => {console.log("rendered")});
        // onWillUnmount(() => {console.log("will unmount")});
        // onMounted(() => {console.log("onmounted")});
        // onWillDestroy(() => {console.log("will destroy")});
        // onError(() => {console.log("error")});
        this.age = useState({young: 21, old: 60});
        this.cap = finalData()
    }

    clickMe()
    {
        this.cap.updatecount();
        console.log("clicked")
    }
    static components = {Second}
}
const createData = () => {
    return reactive(new dataList);
}
const env = {store: createData()};

mount(Root, document.body,{dev:true,env});
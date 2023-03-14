const {Component, mount , xml ,useEnv ,reactive,useState,onWillStart,onMounted,onWillPatch,onPatched,onWillRender,onRendered,onWillUnmount,onWillDestroy,onError} = owl;

const finalData = () => {
    const apple =useEnv();
    return useState(apple.store);
}

class dataList{
    count = 0;
    updateCount(){this.count++; }
    getCount(){return this.count}
}

class Second extends Component{
    static template = xml`
    <div>I'm Second</div>
    <t t-esc="this.bottle.getCount()"/>  
  
    `;

    setup(){
        this.bottle = finalData();
    }

    static props = ["fruit"];
};

class Root extends Component{
    static template = xml`
    <div>Hello</div>
    <Second fruit="cafe" /><br/>
    <button t-on-click="clickMe">Click!</button>
    `;

    abc = "Apple";

    setup(){
        onWillStart(()=> console.log("Will Start"));
        onMounted(()=> console.log("Mounted"));
        onWillPatch(()=> console.log("Will Patch"));
        onPatched(()=> console.log("Patched"));
        onWillRender(()=> console.log("Will Render"));
        onRendered(()=> console.log("Rendered"));
        onWillUnmount(()=> console.log("Will Unmount"));
        onWillDestroy(()=> console.log("Will Destroy"));
        onError(()=> console.log("Error"));

        this.cafe = useState({tea: 3, coffee: 4});
        this.cap = finalData();

    }

    clickMe(){
        this.cap.updateCount();
        console.log('Clicked');
    }

    static components = { Second };
}

const createData = () => {
    return reactive(new dataList);
}

const env = { store: createData() };

mount(Root,document.body,{dev: true, env });
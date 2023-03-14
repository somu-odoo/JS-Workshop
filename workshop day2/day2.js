const {Component , mount , xml , onWillRender , onWillStart , onMounted , onWillPatch , onPatched , onRendered , onWillUnmount , onWillDestroy , onError , useState , reactive , useEnv} = owl;

const finalData = () => {
    const apple = useEnv();
    return useState(apple.store);
}

class Datalist{
    count = 0;
    updateCount() {this.count++;}
    getCount() {return this.count}

}

class Second extends Component{
    static template = xml`<b> I am Second</b>
    <t t-esc="this.bottle.getCount()"/>`;

    setup(){
        this.bottle = finalData();
    }

    static props = ["fruit"];
};

class Root extends Component{
    static template = xml`
    <b>Hello Aman Patel</b>
    <Second fruit="cafe"/>
    <button t-on-click="clickMe">CLICK</button>
    `;
    abc = " apple";

    setup(){
        onWillRender(() => console.log("onWillRender called"))
        onWillStart(() => console.log("onWillStart called"))
        onMounted(() => console.log("onMounted called"))
        onRendered(() => console.log("onRendered called"))
        onWillPatch(() => console.log("onWillPatch called"))
        onPatched(() => console.log("onPatched called"))
        // onWillUnmount(() => console.log("onWillUnmount called"))
        // onWillDestroy(() => console.log("onWillDestroy called"))
        // onError(() => console.log("onError called"))

        this.cafe = useState({tea:3,coffee:4});
        this.cap = finalData();
    }

    clickMe(){
        this.cap.updateCount();
        console.log("Button is clicked");
    }
    static components = { Second };

}
const createData = () => {
    return reactive(new Datalist);
}
const env = {store: createData() };

mount(Root , document.body , { dev: true , env});
const {Component , mount , xml , useState, reactive, useEnv, onWillRender , onWillStart , onMounted , onWillPatch , onPatched , onRendered , onWillUnmount , onWillDestroy , onError} = owl;

const finalData = () => {
    const apple = useEnv();
    return useState(apple.store);
}

class Datalist{
    count = 0;
    updateCount(){this.count++;}
    getCount(){return this.count;}
}

class Second extends Component {
    static template = xml`
    <b>Second 
    <t t-esc = "props.drink.tea + ' '" /> 
    <t t-esc = "props.fruit + ' '" /> 
    <t t-esc = "'Count : ' + this.bottle.getCount()" /></b>
    `;

    static props = ["fruit","drink"];

    setup(){
        this.bottle = finalData();
    }
}

class Root extends Component {
    static template = xml`
    <b>Hello</b><br/>
    <Second fruit="abc" drink="cafe"/><br/>
    <button t-on-click="clickMe">Click!</button>
    `;

    abc = "apple";
    static components = { Second };

    setup(){
        onWillStart(() => console.log("onWillStart Called..."));
        onWillRender(() => console.log("onWillRender Called..."));
        onMounted(() => console.log("onMounted Called..."));
        onRendered(() => console.log("onRendered Called..."));
        onWillPatch(() => console.log("onWillPatch Called..."));
        onPatched(() => console.log("onPatched Called..."));
        // onWillUnmount(() => console.log("onWillUnmount Called..."));
        // onWillDestroy(() => console.log("onWillDestroy Called..."));
        // onError(() => console.log("onError Called..."));

        this.cafe = useState({tea: 3,coffee: 4});
        this.cap = finalData();
    }

    clickMe(){
        this.cap.updateCount();
        console.log("Button is clicked!");
    }
}

const createData = () => {
    return reactive(new Datalist);
}

const env = {store : createData()};

mount(Root,document.body,{dev: true,env});
const { Component, mount, xml, onWillRender, onRendered, onWillStart, onMounted, onWillPatch, onPatched, onWillUnmount, onWillDestroy, onError, useState, reactive, useEnv } = owl;

const finalData = () => {
    const apple = useEnv();
    return useState(apple.store)

}

class datalist {
    
    count = 0;
    updateCount() {
        this.count++;
    }
    getCount() {
        return this.count;
    }

}

class Second extends Component {
    static template = xml`<b>This is second module created by </b>
    <br/>
    <div t-esc="this.bottle.getCount()"/>`;

    setup(){
        this.bottle = finalData();
    }
    static props = ["name"]

}

class Root extends Component {

    static template = xml`
    <b>Hello</b>
    <br/> 
    <Second name="cafe"/>
    <br/>
    <button t-on-click="onclick">Click!!</button>
    `;

    abc = "Divyesh"

    setup() {

        onWillStart(() => console.log("start"))
        // onWillRender(()=>console.log("Component is going to render"))
        // onRendered(()=>console.log("Component Rendered"))
        // onWillPatch(()=>console.log("component is going to patch"))
        // onPatched(()=>console.log("Component is patched"))
        // onMounted(()=>console.log("component Mounted"))
        // onWillDestroy(()=>console.log("destroyed"))

        this.cafe = useState({
            tea: 3,
            cofee: 4
        })

        this.cap = finalData();

    }

    onclick() {
        this.cap.updateCount();
        console.log("clicked");
    }
    static components = { Second };
}


const createData = () => {
    return reactive(new datalist)
}

const env = {
    store:createData()
}

mount(Root, document.body, { dev: true, env });
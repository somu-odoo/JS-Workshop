const {Component, mount, xml, onWillRender, onWillStart, onMounted, onWillPatch, onRendered, onPatched, onError,
        onWillUnmount, onWillDestroy, useState, reactive, useEnv} = owl;

const finalData = () => {
    const apple = useEnv();
    return useState(apple.store);
}

class dataList {
    count = 0;
    updateCount() { this.count++; }
    getCount(){ return this.count; }
}

class Second extends Component{
    static template = xml`
        <b>Second</b><br/>
        <t t-esc = "props.fruit"/><br/>
        <t t-esc = "props.cafe.tea"/><br/>
        <t t-esc = "this.bottle.getCount()"/><br/>
    `;

    static props = ["fruit","cafe"];

    setup(){
        this.bottle = finalData();
    }
}

class Root extends Component{

    static template = xml`
            <b>Hello</b><br/>
            <Second fruit="abc" cafe="cafe"/>
            <button t-on-click="clickMe">Click!</button>
        `;

    abc = "apple";

    setup(){
        onWillRender(() => console.log("Will Render"));
        onWillStart(() => console.log("Will Start"));
        onMounted(() => console.log("Mounted"));
        onWillPatch(() => console.log("Will Patch"));
        onPatched(() => console.log("Patched"));
        onRendered(() => console.log("Rendered"));
        onWillUnmount(() => console.log("Will Unmount"));
        onWillDestroy(() => console.log("Will Destroy"));
        onError(() => console.log("Error"));

        this.cafe = useState({tea:3, cofee:4});
        this.cap = finalData();

    }

    clickMe(){
        console.log("Clicked");
        this.cap.updateCount();
    }

    static components = {Second};
}

const createData = () => {
    return reactive(new dataList);
}

const env = { store : createData() }

mount(Root, document.body, {dev : true, env});


//2 components, guess and user input

// const {Component, mount, xml} = owl;

// class Second extends Component{
//     static template = xml`
//         <b>Second</b><br/>
//         <t t-esc = "props.fruit"/><br/>
//         <t t-esc = "props.veggies"/>
//     `;

//     static props = ["fruit","veggies"];
// }

// class Root extends Component{

//     static template = xml`
//             <b>Hello</b><br/>
//             <Second fruit="abc" veggies/>
//         `;

//     abc = "apple";

//     static prop = ["veggies"]
//     static components = {Second};
// }

// class Veg extends Component{
//     static template = xml`
//             <Root veggies="tomato"/>
//         `;
//     static components = {Root};
// }

// mount(Root, document.body);
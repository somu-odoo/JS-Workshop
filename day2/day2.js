const { Component, mount, xml, onWillRender, onWillStart, 
        onWillPatch, onPatched,onRendered, onWillUnmount, 
        onError,onMounted, useState,reactive, useEnv } = owl;

const finalData = () => {
    const apple = useEnv();
    return useState(apple.store);

}
class dataList {
    count = 0;
    updateCount() { this.count++;}
    getCount(){ return this.count;}
}       

class Second extends Component {
    static template = xml`
            <b>Second</b>
            <h2><t t-esc="props.fruit.tea"/></h2>
            <t t-esc="this.bottle.getCount()"/>
    `;
    static props=['fruit']
    setup(){
        this.bottle = finalData();
    }
};
class Root extends Component {
    static template = xml`
        <b>Hello</b><br />
        <Second fruit="cap"/>
        <button t-on-click="ClickMe">Click</button>
    `; 
    abc="banana";
    setup(){
        onWillRender(() => console.log("Will rendered"))
        this.cafe=useState({tea:3,coffee:5})
        this.cap= finalData();
    }
    ClickMe(){
        this.cap.updateCount();
        console.log("Clicked!!");
    }
    static components={Second}
};

const createData = () => {
    return reactive(new dataList);
}
// declare env
const env = { store: createData() }
mount(Root,document.body,{dev:true,env});
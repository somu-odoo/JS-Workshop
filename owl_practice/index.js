const { Component, mount, xml, useState, reactive, useEnv} = owl;

class DataList {
        count = 0;
        updateCount(){
            this.count++;
        }
        getCount(){
           return this.count; 
        }
    }

const finalData = () => {
    global = useEnv();
    return useState(global.store);
}

const createData = () => {
    return reactive(new DataList);
} 

class Second extends Component{
    static template = xml`
    <div>In second</div><br/>
    <t t-esc="props.fruits.tea" /><br/>
    `
    setup() {
        onMounted(() => {console.log('will mounted')});
        this.state = finalData();
    }


    static props = ["fruits"];
}
class Root extends Component{
    static template = xml`
        <div>Hello</div><br/>
        <t t-esc="this.state.getCount()" />
        <button t-on-click="clickMe">Click!!</button>`
    
    static components = {Second}

    setup() {
        this.state = finalData();
    }

    clickMe() {
        this.state.updateCount();
        console.log('clicked');
    }
}


const env = {store: createData()};

mount(Root, document.body, { dev: true, env });

const { Component, mount, xml, reactive, useEnv, onWillStart, onMounted, onWillPatch, onPatched, onWillRender, onRendered, onWillUnmount, onWillDestroy, onError, useState } = owl;

const finalData = () => {
    const apple = useEnv();
    return useState(apple.store);
}

class dataList {
    count = 0;
    updateCount() { this.count++ };
    getCount() { return this.count };
}

class Second extends Component {
    static template = xml`
        <b>Second</b><br/>
        <t t-esc="this.bottle.getCount()" /><br/>
    `;

    setup(){
        this.bottle = finalData();
    }

    static props = ["fruit"];
}

class Root extends Component {
    static template = xml`
        <b>Hello</b><br/>
        <Second fruit="cafe" />
        <button t-on-click="click">Click</button>
    `;

    test = "apple";

    setup() {
        onWillStart(() => console.log('on will start'));
        onMounted(() => console.log('on mounted'));
        onWillPatch(() => console.log('on will patch'));
        onPatched(() => console.log('on patched'));
        onWillRender(() => console.log('on will render'));
        onRendered(() => console.log('on rendered'));
        onWillUnmount(() => console.log('on will unmount'));
        onWillDestroy(() => console.log('on will destroy'));
        onError((e) => console.log('on error',e));

        this.cafe = useState({ tea: 3, coffee: 4 });
        this.cap = finalData();
    }

    click(){
        this.cap.updateCount();
        console.log('clicked');
    };

    static components = { Second };
}

const createData = () => {
    return reactive(new dataList)
}

const env = { store: createData() }

mount(Root, document.body, { dev: true, env })
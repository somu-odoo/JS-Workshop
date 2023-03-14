const { Component, mount, xml, onWillRender, onMounted, onWillPatch, onPatched, onWillStart, onRendered, onWillUnmount, onWillDestroy, onError, useState, reactive, useEnv } = owl;

const finalData = () => {
    const apple = useEnv();
    return useState(apple.store);
}

class dataList {
    count = 0;
    updateCount() { this.count++; }
    getCount() { return this.count }
}

class Second extends Component {
    static template = xml`
        <b>Duniya !!</b><br />
        <t t-esc="this.bottle.getCount()" />
    `;

    setup() {
        this.bottle = finalData();
    }

    static props = ["fruit"];
};

class Root extends Component {
    static template = xml`
        <b>Hello </b>
        <Second fruit="cricket" /><br /><br />
        <button t-on-click="clickMe">Click!!</button>
    `;
    abc = "apple";
    static components = { Second };

    setup() {

        onMounted(() => {
            console.log("On mounted");
        })

        onWillPatch(() => {
            console.log("On will patch");
        })

        onPatched(() => {
            console.log("On patched");
        })

        onRendered(() => {
            console.log("On rendered");
        })

        onWillUnmount(() => {
            console.log("On will amount");
        })

        onWillDestroy(() => {
            console.log("On will destroy");
        })

        onWillRender(() => {
            console.log("On will render");
        })

        onWillStart(() => {
            console.log("On will start");
        })

        onError(() => {
            console.log("On error");
        })
        this.cricket = useState({ bat: 3, ball: 4});
        this.cap = finalData();
    }

    clickMe() {
        this.cap.updateCount();
        console.log("Clicked");
    }
}

const createData = () => {
    return reactive(new dataList);
}

const env = { store : createData() };

mount(Root, document.body, { dev: true, env });
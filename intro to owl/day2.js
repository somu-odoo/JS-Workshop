const { Component, mount, xml, onWillStart, onMounted, onWillPatch, onPatched, onWillRender, onRendered, onWillUnmount, onWillDestroy, onError, useState, reactive, useEnv } = owl;

const finalData = () => {
    const apple = useEnv();
    return useState(apple.store);
}


class DataList {
    count = 0;
    updateCount() { this.count++; }
    getCount() { return this.count }
}


class Second extends Component {
    static template = xml`
    <b>Second Component</b><br/>
    <t t-esc="props.fruit"/><br/>
    <t t-esc="props.cafeItems.tea"/><br/>
    <t t-esc="this.bottle.getCount()" /><br/>`;

    setup() {


        // onWillStart(
        //     () => console.log("onWillStart2"));
        onMounted(
            () => console.log("onMounted2"));
        // onWillPatch(
        //     () => console.log("onWillPatch2"));
        // onPatched(
        //     () => console.log("onPatched2"));
        // onWillRender(
        //     () => console.log("onWillRender2"));
        // onRendered(
        //     () => console.log("onRendered2"));
        // onWillUnmount(
        //     () => console.log("onWillUnmount2"));
        // onWillDestroy(
        //     () => console.log("onWillDestroy"));
        // onError(
        //     (e) => console.log("onError", e.cause));

        this.bottle = finalData();
    }

    static props = ["fruit", "cafeItems"];
}
class Root extends Component {
    static template = xml`
    <h1>Hello World!</h1>
    <Second fruit = "x" cafeItems = "cafe"/><br/>
    <button t-on-click="clickMe">Clickk</button>`;

    test = "apple"
    x = "banana";

    setup() {
        onWillStart(
            () => console.log("onWillStart"));
        onMounted(
            () => console.log("onMounted"));
        onWillPatch(
            () => console.log("onWillPatch"));
        onPatched(
            () => console.log("onPatched"));
        onWillRender(
            () => console.log("onWillRender"));
        onRendered(
            () => console.log("onRendered"));
        onWillUnmount(
            () => console.log("onWillUnmount"));
        onWillDestroy(
            () => console.log("onWillDestroy"));
        onError(
            (e) => console.log("onError", e.cause));
        this.cafe = useState(
            { tea: 3, coffee: 4 });
        this.cap = finalData();
    }


    clickMe() {
        this.cap.updateCount();
        console.log("CLICKED!!!")
    }
    static components = { Second };

}

const createData = () => {
    return reactive(new DataList)
}

const env = { store: createData() }
mount(Root, document.body, { dev: true, env });
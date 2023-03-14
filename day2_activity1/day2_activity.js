const { Component, mount, xml, reactive, useEnv, useState } = owl;

let x = Math.floor((Math.random() * 100) + 1);

const finalData = () => {
    const xyz = useEnv();
    return useState(xyz.store);
}

const newData = () => {
    return reactive(new dlist)
}

class dlist {
    count = 0;
    updateCount() { this.count++; }
    getCount() { return this.count }
}

class Show extends Component {
    static template = xml`<t t-esc="props.details"/>  `
    static props = ["details"]
}


class Inp extends Component {
    static template = xml`<input type="text" value="" id="num"/>
    <button t-on-click="checkMe">Check</button>
    <Show details="data" />
    `
    setup() {
        this.data = '';
        this.cap = finalData();

    }
    checkMe() {
        console.log(x)
        this.cap.updateCount();
        let val = num.value;
        if (val > x) {
            this.data = "Guess low number !"
        }
        else if (val < x) {
            this.data = "Guess High number !"
        }
        else {
            this.data = `Correct Number, trial =  ${this.cap.getCount()}`
        }

    }

    static components = { Show };
}

const env = { store: newData() };

mount(Inp, document.body, { dev: true, env })
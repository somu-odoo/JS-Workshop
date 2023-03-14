const { Component, mount, xml, onWillStart, onMounted, onWillPatch, onPatched, onWillRender, onRendered, onWillUnmount, onWillDestroy, onError, useState, reactive, useEnv } = owl;
let num = Math.floor(Math.random() * 11);
console.log(num);

const finalData = () => {
    const apple = useEnv();
    return useState(apple.store);
}


class index {
    count = 0;
    updateCount() { this.count++; };
    getCount() { return this.count };
}


class Second extends Component {
    static template = xml`
    <t t-esc="this.counter.getCount()" /><br/>`;

    setup() {
        this.counter = finalData();
    }

}


class Root extends Component {
    static template = xml`
    <h1>Guessing Game</h1>
    <p>
    <input type="number" placeholder="Enter a number here..." id = "guess"/>
    <p>
    <Second/>
    </p>
    </p>
    <p id = "display"></p>
    <button t-on-click="clickMe">Check</button>`;

    setup() {
        this.key = finalData();
    }

    static components = { Second };

    clickMe() {
        this.key.updateCount();
        let input_field = document.getElementById("guess");
        let input_num = document.getElementById("guess").value;
        let display = document.getElementById("display");
        input_field.value = "";
        input_field.focus();
        if (input_num > num) {
            display.innerHTML = "Go lower!";
        }
        else if (input_num == num) {
            display.innerHTML = `Congratulations!! Sahi Jawab! <br/> It took you ${this.key.count} attempts`;
        }
        else {
            display.innerHTML = "Too low, please go higher!";
        }
    }
}

const createData = () => {
    return reactive(new index)
}

const env = { store: createData() }
mount(Root, document.body, { dev: true, env });
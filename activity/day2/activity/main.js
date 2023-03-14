const { Component, mount, xml, reactive, useEnv, useState } = owl;

const finalData = () => {
    const data = useEnv();
    return useState(data.store);
}

class Count{
    count = 0;
    updateCount() { this.count++ };
    getCount() { return this.count };
}

class Second extends Component {
    static template = xml`
        <input type="number" id="textBox"/>
    `;

    setup(){
        this.count = finalData();
    }
}

class Root extends Component{
    static template = xml`
        <Second />
        <button t-on-click="click">Click</button>
        <div id="content"></div>
    `;

    setup(){
        this.data = finalData();
    }

    randomNum = Math.floor(Math.random() * 5);

    click(){
        this.data.updateCount();
        console.log(this.randomNum)
        const inputVal = document.getElementById("textBox");
        const content = document.getElementById("content");
        if(!inputVal.value){
            content.textContent = `Enter a number`;
        }
        else if(inputVal.value == this.randomNum){
            content.textContent = `Correct Value and Total Trial ${this.data.getCount()}`
        }
        else if(inputVal.value > this.randomNum){
            content.textContent = `Enter Lower Number`;
        } else {
            content.textContent = `Enter Higher Number`;
        }
    }

    static components = { Second };
}

const createData = () => {
    return reactive(new Count)
}

const env = { store: createData() }

mount(Root, document.body, { dev: true, env })
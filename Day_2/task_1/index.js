const { Component, mount, xml, reactive, useState, useEnv } = owl


const data = () => {
    const res = useEnv();
    return useState(res.store)
}

class Result {
    tried = 0;
    status = "None"
    getCount() {
        return this.tried;
    }
    updateCount() {
        this.tried++;
    }
}

class Trials extends Component {
    static template = xml`
    <div>
    <span>Status : </span>
    <span t-esc ="this.trial.status"/>
    </div>
    <br/>
    <div>
    <span> Trial count : </span>
    <span t-esc="this.trial.getCount()"/>
    </div>
    `

    setup() {
        this.trial = data();
    }
}
class Data extends Component {
    static template = xml`
    <br/>
        <button type="button" id="btn" t-on-click="check"> Enter </button>
        <br/>
        <Trials/>
    `
    check() {
        const num = document.getElementById("num")

        if (num.value == this.props.randomNum) {
            this.trial.status = "You got it!!"
            const btn = document.getElementById('btn')
            num.disabled = false;
            btn.disabled = true;

        } else if (num.value > this.props.randomNum) {
            this.trial.status = "To high"
        } else if (num.value < this.props.randomNum) {
            this.trial.status = "To low"

        }
        this.trial.updateCount();
    }

    setup() {
        this.trial = data();
    }

    static props = ["randomNum"]
    static components = { Trials }
}

class Root extends Component {
    static template = xml`<div class="data_container">    
    <h1 class="title"> Guess the Number </h1>
        <input type="number" id="num" name="num"/>
        <Data randomNum = "this.randomNum"/>
        </div>
        `;

    setup() {
        this.randomNum = Math.floor(Math.random() * 10);
    }

    static components = { Data };
}

const createData = () => {
    return reactive(new Result)

}

const env = { store: createData() }

mount(Root, document.body, { env })
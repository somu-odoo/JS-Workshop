const { Component, mount, xml, reactive, useEnv, useState } = owl;


// 1 = stone , 2 = Paper,  3 = Scissors
const finalData = () => {
    const xyz = useEnv();
    return useState(xyz.store);
}

const newData = () => {
    return reactive(new dlist)
}

class dlist {
    uscore = 0;
    cscore = 0;
    updateUscore() { this.uscore++; }
    getUscore() { return this.uscore }
    updateCscore() { this.cscore++; }
    getCscore() { return this.cscore }
}

class Score extends Component {
    static template = xml`<t t-esc="props.details"/>  `
    static props = ["details"]
    setup() {
        this.data='';
        this.cap = finalData();
    }
}

class Display extends Component {
    static template = xml`<button t-on-click="game" id="1">Stone</button> 
    <button t-on-click="game" id="2">Paper</button> 
    <button t-on-click="game" id="3">Scissors</button>
    <Score details="data" />`;

    setup() {
        this.data = '';
        this.cap = finalData();

    }

    game(event) {
        var x = Math.floor(Math.random() * 3 + 1)
        console.log(x)
        var uinput = event.target.id;
        if (uinput == x) {
            console.log("Tie")
        }
        else if (uinput == 1) {
            if (x == 2) {
                this.data = "cpu win";
                this.cap.updateCscore();
            }
            else {
                this.data = "user win";
                this.cap.updateUscore();
            }
        }
        else if (uinput == 2) {
            if (x == 1) {
                this.data = "user win";
                this.cap.updateUscore();
            }
            else {
                this.data = "cpu win";
                this.cap.updateCscore();

            }
        }
        else {
            if (x == 1) {
                this.data = "cpu win";
                this.cap.updateCscore();

            }
            else {
                this.data = `user win${this.cap.getUscore()}`;
                this.cap.updateUscore();
            }
        }
    }
    static components = { Score };
}

const env = { store: newData() };

mount(Display, document.body, { dev: true, env })
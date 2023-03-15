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
    tscore = 0;
    updateUscore() { this.uscore++; }
    updateTscore(){ this.tscore++; }
    getUscore() { return this.uscore }
    updateCscore() { this.cscore++; }
    getCscore() { return this.cscore }
}

class Score extends Component {
    static template = xml`<t t-esc="props.details"/> <br/> User: <t t-esc="props.det1"/> <br/> CPU: <t t-esc="props.det2"/> `
    static props = ["details", "det1", "det2"]
    setup() {
        this.data = '';
        this.d1 = '';
        this.d2 = '';
        this.cap = finalData();
    }
}

class Display extends Component {
    static template = xml`<button t-on-click="game" id="1">Stone</button> 
    <button t-on-click="game" id="2">Paper</button> 
    <button t-on-click="game" id="3">Scissors</button>
    <Score details="data" det1="d1" det2="d2" />`;

    setup() {
        this.data = '';
        this.d1 = '';
        this.d2 = '';
        this.cap = finalData();

    }

    game(event) {
        var x = Math.floor(Math.random() * 3 + 1)
        console.log(x)
        var uinput = event.target.id;
        if (uinput == x) {
            this.data = "Tie";
            this.cap.updateTscore()
        }
        else if ((uinput != x) && (uinput == 1)) {
            if (x == 2) {
                this.data = "cpu win";
                this.cap.updateCscore();
                this.d2 = `${this.cap.getCscore()}`;
            }
            else {
                this.data = "user win";
                this.cap.updateUscore();
                this.d1 = `${this.cap.getUscore()}`;
            }
        }
        else if (uinput == 2) {
            if (x == 1) {
                this.data = "user win";
                this.cap.updateUscore();
                this.d1 = `${this.cap.getUscore()}`;
            }
            else {
                this.data = "cpu win";
                this.cap.updateCscore();
                this.d2 = `${this.cap.getCscore()}`;
            }
        }
        else if (uinput == 3) {
            if (x == 1) {
                this.data = "cpu win";
                this.cap.updateCscore();
                this.d2 = `${this.cap.getCscore()}`;
            }
            else {
                this.data = "user win";
                this.cap.updateUscore();
                this.d1 = `${this.cap.getUscore()}`;
            }
        }
    }
    static components = { Score };
}

const env = { store: newData() };

mount(Display, document.body, { dev: true, env })
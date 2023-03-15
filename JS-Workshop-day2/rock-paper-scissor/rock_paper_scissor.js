const { Component, mount, xml, useEnv, useState, reactive } = owl;

const finalData = () => {
    const number = useEnv();
    return useState(number.store);
}
class countnumbers {
    count = 0
    updateCount() { this.count++ }
    getCount() { return this.count }
}

class Root extends Component {
    static template = xml`
    <h1>yay!! Try your luck</h1>
    <button t-on-click="click1" id='rock' value="">Rock</button>
    <button t-on-click="click2" id='paper' value="1">paper</button>
    <button t-on-click="click3" id='scissor' value="2">scissor</button><br/>
    <br/>
    <button t-on-click="getResult" id='getresult'>Check Result</button>
    <p>Trails:<t t-esc = "this.count.getCount()"/></p>
    <label>Current Result</label><p id = "result"></p>
    <label>Final Result</label>
    <p id = "finalresult">
    <label>System</label>
    <t t-esc = "this.system"/>
    <label>User</label><t t-esc = "this.user"/></p>
    `;

    click1() {
        if (this.count.getCount() < 3) {
            this.count.updateCount();
            this.guess = Math.floor(Math.random() * 3)
            console.log(this.guess)
            if (this.guess == rock.value) {
                document.getElementById('result').innerHTML = "Tie"

            }
            else if (this.guess == paper.value) {
                document.getElementById('result').innerHTML = "Lost"
                this.system++
            }
            else {
                document.getElementById('result').innerHTML = "You Won"
                this.user++
            }
            console.log("user" + this.user)
            console.log("System" + this.system)
        }
    }
    click2() {
        if (this.count.getCount() < 3) {

            this.count.updateCount();
            this.guess = Math.floor(Math.random() * 3)
            console.log(this.guess)
            if (this.guess == paper.value) {
                document.getElementById('result').innerHTML = "Tie"
            }
            else if (this.guess == scissor.value) {
                document.getElementById('result').innerHTML = "Lost"
                this.system++
            }
            else {
                document.getElementById('result').innerHTML = "You Won"
                this.user++
            }
            console.log("user" + this.user)
            console.log("System" + this.system)
        }
    }
    click3() {
        if (this.count.getCount() < 3) {

            this.count.updateCount();
            this.guess = Math.floor(Math.random() * 3)
            console.log(this.guess)
            if (this.guess == scissor.value) {
                document.getElementById('result').innerHTML = "Tie"
            }
            else if (this.guess == rock.value) {
                document.getElementById('result').innerHTML = "Lost"
                this.system++
            }
            else {
                document.getElementById('result').innerHTML = "You Won"
                this.user++
            }
            console.log("User" + this.user)
            console.log("System" + this.system)
        }
    }
    getResult(){
        if(this.count.getCount() == '3') {
            if (this.system > this.user) {
                document.getElementById('finalresult').innerHTML = "Final Result : You lost";
            }
            else if (this.system < this.user) {
                document.getElementById('finalresult').innerHTML = "Final Result : You won";
            }
            else {
                document.getElementById('finalresult').innerHTML = "Final Result : Tie!!!!";
            }
        }
        else {
            document.getElementById('finalresult').innerHTML = "Result will be displayed when you complete 3 trails";
        }
    }
    setup() {
        this.count = finalData();
        this.system = 0;
        this.user = 0;
    }
}
const count = () => {
    return reactive(new countnumbers)
}
const env = { 
    store: count() 
}
mount(Root, document.body, { dev: true, env });
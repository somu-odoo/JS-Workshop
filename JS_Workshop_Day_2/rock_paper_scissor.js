const { Component, mount, xml, useEnv, useState, reactive } = owl;

const finalData = () => {
    const num = useEnv();
    return useState(num.store);
}
class countnumbers {
    count = 0;
    updateCount() { this.count++; }
    getCount() { return this.count; }
}

class Root extends Component {
    static template = xml`
    <div class="container">
        <button t-on-click="onclick" id='rock' value="1">Rock</button>
        <button t-on-click="onclick2" id='paper' value="2">paper</button>
        <button t-on-click="onclick3" id='scissor' value="3">scissor</button><br/><br/>
        <button t-on-click="getResult" id="final">Result</button>
        <p>Trails:<t t-esc = "this.count.getCount()"/></p>
        <label>Current Result : <span id = "result"></span></label>
        <p id = "finalresult"></p>
    </div>
    `;

    onclick() {
        if (this.count.getCount() < 3) {
            this.count.updateCount();
            this.guess = Math.floor(Math.random() * 3) + 1;
            console.log(this.guess);

            if (this.guess == rock.value) {
                document.getElementById('result').innerHTML = "Tie";
            }
            else if (this.guess == paper.value) {
                document.getElementById('result').innerHTML = "Lost";
                this.system++;
            }
            else {
                document.getElementById('result').innerHTML = "You Won";
                this.user++
            }
            console.log("user" + this.user);
            console.log("System" + this.system);
        }
    }
    onclick2() {
        if (this.count.getCount() < 3) {

            this.count.updateCount();
            this.guess = Math.floor(Math.random() * 3) + 1;
            console.log(this.guess);
            if (this.guess == paper.value) {
                document.getElementById('result').innerHTML = "Tie";
            }
            else if (this.guess == scissor.value) {
                document.getElementById('result').innerHTML = "Lost";
                this.system++;
            }
            else {
                document.getElementById('result').innerHTML = "You Won";
                this.user++;
            }
            console.log("user" + this.user);
            console.log("System" + this.system);
        }
    }
    onclick3() {
        if (this.count.getCount() < 3) {

            this.count.updateCount();
            this.guess = Math.floor(Math.random() * 3) + 1;
            console.log(this.guess);
            if (this.guess == scissor.value) {
                document.getElementById('result').innerHTML = "Tie";
            }
            else if (this.guess == rock.value) {
                document.getElementById('result').innerHTML = "Lost";
                this.system++;
            }
            else {
                document.getElementById('result').innerHTML = "You Won";
                this.user++;
            }
            console.log("User" + this.user);
            console.log("System" + this.system);
        }
    }
    getResult() {
        if(this.count.getCount() == '3') {
            if (this.system > this.user) {
                document.getElementById('finalresult').innerHTML = "Final Result : You lost";
            }
            else if (this.system < this.user) {
                document.getElementById('finalresult').innerHTML = "Final Result : You won";
            }
            else {
                document.getElementById('finalresult').innerHTML = "Final Result : tie";
            }
        }
        else {
            document.getElementById('finalresult').innerHTML = "Result will be displayed after 3 trails";
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
const env = { store: count() }
mount(Root, document.body, { dev: true, env });
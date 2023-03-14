const { Component, mount, xml, useState, reactive, useEnv } = owl;

let randomNumber =  Math.floor((Math.random() * 10) + 1 );

class dataList {
    count = 0;
    updateCount() { this.count++; }
    getCount() { return this.count; }
}

const finalData = () => {
    checkNum = useEnv();
    return useState(checkNum.store);
}

class Display extends Component {
    static template = xml`
    <t t-esc="props.output"></t>
    `;
    static props = ['output']
}

class Root extends Component{
    static template = xml`
        <div>
            <h1>Guess The Number</h1><br/>
            <center><input type="number" id="num" placeholder="Enter number "/><br/><br/>
            <button t-on-click="check">Check</button>
            <button t-on-click="reset">Reset</button></center><br/><br/>
            <center><Display output="message"/></center>
        </div>
    `;
    setup(){
        this.message="";
        this.cap = finalData();
    }
    check() {
        console.log(num.value);
        this.cap.updateCount();
        if(num.value < randomNumber) {
            this.message = " Generated number is higher than guessed higher number";
        }

        else if(num.value > randomNumber) {
            this.message = " Generated number is lower than guessed higher number";
        }

        else {
            this.message = ` Correct guess !! with ${this.cap.getCount()} trails`;
        }
    }

    reset() {
        this.cap.count = 0;
        randomNumber = Math.floor((Math.random() * 10) + 1 );
        num.value = 0; 
    }
    static components = { Display };
}

const outputMessage = () => {
    return reactive(new dataList);
} 

const env = {store: outputMessage()};

mount(Root, document.body, {env});
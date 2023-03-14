const { Component, mount, xml, useState, reactive, useEnv } = owl;

let randomNumber =  Math.floor((Math.random() * 10) + 1 );

class DataList {
    count = 0;
    updateCount(){
        this.count++;
    }
    getCount(){
       return this.count; 
    }
}

const finalData = () => {
    naman = useEnv();
    return useState(naman.store);
}

const opMsg = () => {
    return reactive(new DataList);
} 

class Show extends Component {
    static template = xml`
    <t t-esc="props.op"></t>
    `;
    static props = ['op']
}

class Root extends Component{
    static template = xml`
    <center>
    <h1><b>Guess The Number</b></h1><br/>
    <input type="number" id="num"/>
    <button t-on-click="clickMe">Check</button>
    <Show op="msg"/>
    </center>
    `;
    setup(){
        this.msg="";
        this.cap = finalData();
    }
    clickMe() {
        this.cap.updateCount();
        console.log(randomNumber);
        console.log(num.value);
        if(num.value < randomNumber) {
            this.msg = "Guess High Number";
        }
    
        else if(num.value > randomNumber) {
            this.msg = "Guess Low Number";
        }
    
        else{
            this.msg = `You Guess the Right Number Yayyy !!!
            trial = ${this.cap.getCount()}`;
        }
    }
    static components = { Show };
}

const env = {store: opMsg()};
mount(Root, document.body, {env});
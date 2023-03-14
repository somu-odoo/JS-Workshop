
const {Component, mount, xml, useState, reactive, useEnv } = owl;

const finalData = () => {
    const counter = useEnv();
    return useState(counter.store);
}

class DataList{
    count=0;
    updateCount(){ this.count++; }
    getCount(){ return this.count;}  
}
class Second extends Component{
    static template=xml`
    <t t-esc="props.randomNumber.x"/><br/>
    <b>Please Guess the number: </b>
    <input type="text" id="guess" t-on-change="checkMe"/>
    <p id="result"><t t-esc="result"/></p>
    `;

    setup(){
        this.counter = finalData();
    }

    static props=["randomNumber"];
    checkMe(ev){
        let no = ev.target.value;
        let newText = "";
        this.counter.updateCount();
        console.log(this.props.randomNumber.randomNumber,"random no");
        console.log(no, "user no");
        console.log(this.counter.getCount(), "counter value");

        if(no>this.props.randomNumber.randomNumber){
            newText = "Number is greater then random number";
        }
        else if(no<this.props.randomNumber.randomNumber){
            newText = "Number is less then random number";
        }
        else if(no == this.props.randomNumber.randomNumber){
            console.log(this.counter.count);
            newText = "Number is correct with "+this.counter.getCount()+" trials";
            this.counter.count = 0;
            this.props.randomNumber.randomNumber = Math.floor(Math.random()*10);
        }
        alert(newText);
        console.log(ev.target.value);
    }

    
}

class Root extends Component{
    static template=xml`<b>Computer Guess:</b>
        <Second randomNumber="data"/>
    `;
    setup(){
        let x = Math.floor((Math.random() * 10) + 1);
        console.log(x)
        this.data=useState({randomNumber:x})

    }
    static components={Second};

}

const createData = () => {
    return reactive(new DataList());
}

const env = { store: createData() };

mount(Root,document.body,{dev: true, env});
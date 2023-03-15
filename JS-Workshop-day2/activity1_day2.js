const { Component, mount, xml, onWillStart, useState, reactive, useEnv } = owl;
let randomNum = Math.floor(Math.random() * 100) + 1;
// console.log(randomNum)
const finalData =()=>{
    game =useEnv();
    return useState(game.store)
}
class dataList{
    count=0;
    updateCount(){
        this.count++;
    }
    getCount(){
        return this.count;
    }
}
class Second extends Component {
    static template = xml`
        <t t-esc="props.output"></t>
    `;
    static props=['output']
    // props do not change the data dynamically it send data single side

}

class Root extends Component {
    static template = xml`
        <div class="title">
            <h1>Guess The Number</h1>
            <h2>From 1 to 100 !!</h2>
        </div>
        <div>
            <input type="text" placeholder="Enter Your Number" class="input-field" id="number"/>
        </div>
        <br/>
        <div>
            <button t-on-click="check" class="check" id="submit-btn">Check</button>
            <button t-on-click="reset" class="reset">Reset</button>
        </div>
        <Second output="msg"/>
    `;
    setup(){
        this.msg="";
        this.cap=finalData();
    }
    check(){
        this.cap.updateCount();
        console.log(number.value);
        if(number.value <randomNum){
            this.msg = "it is too small think for a greater number"
        }
        else if(number.value > randomNum){
            this.msg="it is too big think for smaller"
        }
        else{
            this.msg=`yayy you are correct and you take a ${this.cap.getCount()} trails`

        }
}
    reset() {
    this.cap.count = 0;
    randomNum = Math.floor(Math.random() * 100) + 1;
    // console.log(randomNum)
    number.value=0
}
    static components = { Second };
}
const createData = ()=>{
    return reactive(new dataList);
}
const env = {
    store: createData()
};

mount(Root, document.body,{env});
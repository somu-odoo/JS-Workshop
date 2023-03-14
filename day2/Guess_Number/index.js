const { Component, mount, xml, useEnv, reactive, useState} = owl;

const finalData = () => {
    const numbers = useEnv();
    return useState(numbers.store);
}
class trials {
    count = 0
    updateCount(){
        this.count++
    }
    getCount(){
        return this.count
    }
}
class Second extends Component {
    static template = xml`
    <p>trials:<t t-esc = "this.data.getCount()"/></p>
    <p id="show"></p>`

    setup(){
        this.data = finalData()
    }
}
class Root extends Component {
    static template = xml`
    <input type="text" id='check_number'/>
    <button t-on-click="clickme">Click</button>
    <Second/>
   `;

    clickme()
    {
        console.log(this.r_number);
        this.con.updateCount();
        if (check_number.value == this.r_number){
            document.getElementById('show').innerHTML = "Correct Guess"
        }
        else if (check_number.value < this.r_number){
            document.getElementById('show').innerHTML = "guess lower"
        }
        else if (check_number.value > this.r_number){
            document.getElementById('show').innerHTML = "guess higher"
        }
    }

    setup()
    {
        this.r_number = Math.floor(Math.random()*10)
        this.con = finalData()
    }
    static components = {Second}
}
const Guess = () => {
    return reactive(new trials)
}
const env = {store:Guess()}
mount(Root, document.body,{dev:true,env});
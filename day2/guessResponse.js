const{Component, mount, xml, reactive, useEnv, useState} = owl;

const finalData = () =>{
    const number = useEnv();
    return useState(number.store);
}
class counttrials{
    count=0
    updateCount(){this.count++}
    getCount(){return this.count}
}
class Root extends Component{
    static template = xml
    `<input type="text" id='guessno'/>
    <button t-on-click="onclick">Click</button>
    <p id='status'></p>
    <p>Trails:<t t-esc = "this.con.getCount()"/></p>`;

    onclick()
    {
        this.con.updateCount();
        console.log(this.randomno)
        if (guessno.value == this.randomno)
        {
            document.getElementById('status').innerHTML="Congrats"
        }
        else if(guessno.value < this.randomno)
        {
            document.getElementById('status').innerHTML="lower"
        }
        else if(guessno.value > this.randomno)
        {
            document.getElementById('status').innerHTML="higher"
        }
    }

    setup()
    {
        this.randomno = Math.floor(Math.random()*10)
        this.con = finalData();
    }
}
const Countguess = () =>{
    return reactive(new counttrials)
}
const env={store:Countguess()}
mount(Root, document.body,{dev:true,env});
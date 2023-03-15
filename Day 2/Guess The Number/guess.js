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
class Second extends Component
{
    static template = xml` <p>Trails:<t t-esc = "this.point.getCount()"/></p>`
    setup(){
        this.point=finalData()
    }
}
class Root extends Component{
    static template = xml`
    <input type="text" id='guessno'/>
    <button t-on-click="onclick" id='check'>Click</button>
    <p id='status'></p>
    <Second/>
    `;

    onclick()
    {
        this.con.updateCount();
        console.log(this.randomno)
        // let x =document.getElementById('guessnum').value;
        if (guessno.value == this.randomno)
        {
            const btn = document.getElementById('check')
            btn.disabled=true
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
    static components = {Second};
}
const Countguess = () =>{
    return reactive(new counttrials)
}
const env={store:Countguess()}
mount(Root, document.body,{dev:true,env});
const { Component, mount, xml, useEnv, reactive, useState} = owl;

const finalData = () => {
    const results = useEnv();
    return useState(results.store);
}

class trials{
    count = 0
    updateCount(){
        this.count++
    }
    getCount(){
        return this.count
    }
}
class Second extends Component{
    static template = xml`
    <p id="r_answer"></p><p id="answer"></p>`;
    setup(){
        this.value = finalData()
    }
}

class Third extends Component{
    static template = xml`
    <p>trial:<t t-esc = "this.value.getCount()"/></p>`;
    setup(){
        this.value = finalData()
    }
}
class Root extends Component {
    static template = xml`
    <h1>Rock Paper Scissor Game</h1>
    <button t-on-click="rock">Rock</button>
    <button t-on-click="paper">Paper</button>
    <button t-on-click="scissor">Scissor</button>
    <Second />
    <Third />`;

    setup(){
        this.value = finalData()
    }
    rock(){
        this.value.updateCount();
        this.r_number = Math.floor(Math.random()*3)
        document.getElementById('r_answer').innerHTML = this.r_number
        if (this.r_number == 0){
            document.getElementById('answer').innerHTML = "Draw"
        }
        else if(this.r_number == 1){
            document.getElementById('answer').innerHTML = "You lose"
        }
        else if(this.r_number == 2){
            document.getElementById('answer').innerHTML = "You Win"
        }
    }
    paper(){
        this.value.updateCount();
        this.r_number = Math.floor(Math.random()*3)
        document.getElementById('r_answer').innerHTML = this.r_number
        if (this.r_number == 1){
            document.getElementById('answer').innerHTML = "Draw"
        }
        else if(this.r_number == 0){
            document.getElementById('answer').innerHTML = "You Win"
        }
        else if(this.r_number == 2){
            document.getElementById('answer').innerHTML = "You lose"
        }
    }
    scissor(){
        this.value.updateCount();
        this.r_number = Math.floor(Math.random()*3)
        document.getElementById('r_answer').innerHTML = this.r_number
        if (this.r_number == 2){
            document.getElementById('answer').innerHTML = "Draw"
        }
        else if(this.r_number == 0){
            document.getElementById('answer').innerHTML = "You Win"
        }
        else if(this.r_number == 1){
            document.getElementById('answer').innerHTML = "You lose"
        }
    }
    static components = {Second, Third}
}
const Game = () =>{
    return reactive(new trials)
}

const env = {store:Game()}
mount(Root, document.body,{dev:true,env});
const { Component, mount, xml, useEnv, reactive, useState} = owl;
const finalData = () => {
    const results = useEnv();
    return useState(results.store);
}
class trials{
    count = 0
    win = 0
    updateWin(){
        this.win++
    }
    getWin(){
        return this.win
    }
    updateCount(){
        this.count++
    }
    getCount(){
        return this.count
    }
}
class Third extends Component {
    static template = xml`
    <b><p id="answer"></p></b>
    <p>trial:<t t-esc = "this.value.getCount()"/></p>
    <p>Total Wins:<t t-esc = "this.value.getWin()"/></p>
   `
   setup()
   {
        this.value = finalData()
   }
}
class Second extends Component {
    static template = xml`
    <p>Computer : <b><span id="r_select"></span></b></p>
    <p>Human : <b><span id="h_select"></span></b></p>
    `

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
    <Second/>
    <Third/>`

    setup(){
        this.value = finalData()
    }
    rock(){
        document.getElementById('h_select').innerHTML = "Rock"
        this.value.updateCount();
        this.r_number = Math.floor(Math.random()*3)
        if (this.r_number == 0){
            document.getElementById('answer').innerHTML = "Draw"
            document.getElementById('r_select').innerHTML ="Rock"
        }
        else if(this.r_number == 1){
            document.getElementById('answer').innerHTML = "You lose"
            document.getElementById('r_select').innerHTML ="Paper"
        }
        else if(this.r_number == 2){
            this.value.updateWin();
            document.getElementById('answer').innerHTML = "You Win"
            document.getElementById('r_select').innerHTML ="Scissor"
        }
    }
    paper(){
        document.getElementById('h_select').innerHTML = "Paper"
        this.value.updateCount();
        this.r_number = Math.floor(Math.random()*3)
        if (this.r_number == 0){
            this.value.updateWin();
            document.getElementById('answer').innerHTML = "You Win"
            document.getElementById('r_select').innerHTML ="Rock"
        }
        else if(this.r_number == 1){
            document.getElementById('answer').innerHTML = "Draw"
            document.getElementById('r_select').innerHTML ="Paper"
        }
        else if(this.r_number == 2){
            document.getElementById('answer').innerHTML = "You lose"
            document.getElementById('r_select').innerHTML ="Scissor"
        }
    }
    scissor(){
        document.getElementById('h_select').innerHTML = "Scissor"
        this.value.updateCount();
        this.r_number = Math.floor(Math.random()*3)
        if (this.r_number == 0){
            document.getElementById('answer').innerHTML = "You lose"
            document.getElementById('r_select').innerHTML ="Rock"
        }
        else if(this.r_number == 1){
            this.value.updateWin();
            document.getElementById('answer').innerHTML = "You Win"
            document.getElementById('r_select').innerHTML ="Paper"
        }
        else if(this.r_number == 2){
            document.getElementById('answer').innerHTML = "Draw"
            document.getElementById('r_select').innerHTML ="Scissor"
        }
    }
    static components = {Second,Third}
}
const Game = () =>{
    return reactive(new trials)
}
const env = {store:Game()}
mount(Root, document.body,{dev:true,env});
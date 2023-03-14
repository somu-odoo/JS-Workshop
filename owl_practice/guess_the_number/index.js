const {Component,mount,xml,useState,reactive,useEnv} = owl

class GlobalState{
    randomNumber = Math.floor(Math.random() * 10)
    value = "" //Input value
    counter = 0 //No. of trials
    message = "" //Message to show

    updateValue(e){
        this.value = e
    }
    getValue(e){
        return this.value
    }
    getRandomNumber(){
        return this.randomNumber
    }
    updateMessage(e){
        this.message = e
    }
    getMessage(){
        return this.message
    }
    updateCounter(){
        this.counter++
    }
    getCounter(){
        return this.counter
    }
    reset(){
        this.counter = 0
        this.randomNumber = Math.floor(Math.random() * 10)
        this.value = ""
        this.message = ""
    }
}
const createData = () => {
    return reactive(new GlobalState)
}

const finalData = () => {
    global = useEnv()
    return useState(global.store)
}
class InputComponent extends Component{
    static template = xml`
        <input id="input" placeholder="Enter any number" t-on-input="handleOnchange"/>
        <h1 t-esc="this.inputState.getMessage()" />
    `
    setup(){
        this.inputState = finalData()
    }
    handleOnchange(e){
        this.inputState.updateValue(e.target.value)
        if(e.target.value){
            this.inputState.updateCounter()
            if(this.inputState.getValue() < this.inputState.getRandomNumber())
            {
                this.inputState.updateMessage("Guessed number is smaller!")
            }
            else if(this.inputState.getValue() > this.inputState.getRandomNumber())
            {
                this.inputState.updateMessage("Guessed number is bigger!")
            }
            else
                this.inputState.updateMessage(`Number matched! No. of trials: ${this.inputState.getCounter()}`)
        }
        
    }
}

class ButtonComponent extends Component{
    static template = xml`
    <div class="btn-container">
        <button id="btn" t-on-click="handleClick">Restart</button>
    </div>
    `
    setup(){
        this.state = finalData()
    }
    handleClick(){
        this.state.reset()
    }
}


class Root extends Component{
    static template = xml`
    <div class="container">
        <div class="box">
            <h1>Enter any number</h1>
            <InputComponent />
            <ButtonComponent />
        </div>
    </div>
    `

    static components = {InputComponent,ButtonComponent}
}


const env = {store: createData()}
mount(Root,document.body,{dev: true,env})
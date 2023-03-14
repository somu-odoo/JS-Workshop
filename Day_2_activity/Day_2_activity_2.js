const { Component, mount, xml, useState, reactive, useEnv } = owl;

class DataList {
    u_count = 0;
    c_count = 0;
    updateUcount(){
        this.u_count++;
    }
    updateCcount(){
        this.c_count++;
    }
    getUcount(){
       return this.u_count; 
    }
    getCcount(){
        return this.c_count; 
    }
}

const finalData = () => {
    naman = useEnv();
    return useState(naman.store);
}

const Result = () => {
    return reactive(new DataList);
} 

class Calculate extends Component {
    static template = xml`
    <t t-esc="props.data"></t>
    `;
    static props = ['data']
}

class Main extends Component{
    static template = xml`
    <center>
        <h1>Let's Play Rock,Paper,Scissor Game !!</h1><br/>
        <button t-on-click="clickMe" id="1" value="rock">Rock</button><br/><br/>
        <button t-on-click="clickMe" id="2" value="pape">Paper</button><br/><br/>
        <button t-on-click="clickMe" id="3" value="scissors">Scissors</button><br/><br/>
        <Calculate data="data" />
    </center>
    `
    ;
    setup() {
        this.data = '';
        this.cap = finalData();

    }

    clickMe(event) {
        let randomNumber =  Math.floor((Math.random() * 3) + 1 );
        console.log(randomNumber);
        var uid = event.target.id;
        if(uid == randomNumber){
            this.data = "Tie !!"
        }
        else if(uid == 1){
            if(randomNumber == 2){
                this.data = "computer win !!"
                this.cap.updateCcount();
            }
            else {
                this.data = "user win !!"
                this.cap.updateUcount();
            }
        }
        else if(uid == 2){
            if(randomNumber == 3){
                this.data = "computer win !!"
                this.cap.updateCcount();
            }
            else {
                this.data = "user win !!"
                this.cap.updateUcount();
            }
        }
        else if(uid == 3){
            if(randomNumber == 1){
                this.data = "computer win !!"
                this.cap.updateCcount();
            }
            else {
                this.data = "user win !!"
                this.cap.updateUcount();
            }
        }
    }
    static components = { Calculate };
}

const env = {store: Result()};
mount(Main, document.body, { env })
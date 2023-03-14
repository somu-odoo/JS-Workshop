const { Component, mount, xml, reactive, useState, useEnv } = owl

const DataRef = () => {
    const env = useEnv();
    return useState(env.game);
}

class Data {
    
    yourPick ="None";
    computerPick="None";
    rounds = 0;
    status = "None";
    win =0;
    loss = 0;
    map = {
        0: "rock",
        1: "scissor",
        2: "paper",
    }

    getStatus() {
        return this.status;
    }
    getRounts() {
        return this.rounds;
    }
    updateRounds() {
        this.rounds++;
    }
    updateStatus(num){
        return this.map[num]
    }
}

class Result extends Component {
    static template = xml`
    <div  align="center">
        <div>
            Your v/s Computer 
        </div>
        <div>
            <span t-esc="this.data.yourPick"/>
            v/s
            <span t-esc="this.data.computerPick"/> 
       
        </div>
        <br/>
        <span> Result is : </span>
        <span t-esc="this.data.status"/>
    </div>
        `;

    setup() {
        this.data = DataRef();
    }
}

class Guess extends Component {
    static template = xml`
    <div class="button_container"  align="center">
        <button id="rock" t-on-click="() => this.check(0)">Rock</button>
        <button id="scissor" t-on-click="ev => this.check(1)">Scissor</button>
        <button id="paper" t-on-click="() => this.check(2)">Paper</button>
        <p> Choose one : </p>
    </div>
    `;

    setup() {
        this.data = DataRef();
    }

    check(input) {

        const randomIn = Math.floor(Math.random() * 3);

        this.data.yourPick = this.data.updateStatus(input);
        this.data.computerPick = this.data.updateStatus(randomIn);

        if (randomIn == input) {
            this.data.status = "Draw"
        } else {

            const win = Math.min(randomIn, input);
            if(win==input){
                this.data.status = "You Won"
                this.data.win++;
            }else{
                this.data.status = "You Loss"
                this.data.loss++;
            }
        }

        this.data.updateRounds();
    }

}

class Score extends Component {
    static template = xml`
    <div align="center">
        <span> Total Rounds : </span>
        <span t-esc="this.data.rounds"/>
    </div>
    <div align="center">
        <span> Wins : </span>
        <span t-esc="this.data.win"/>
        <span> Loss : </span>
        <span t-esc="this.data.loss"/>
    </div>
    

        `;

    setup() {
        this.data = DataRef();
    }
}

class Root extends Component {
    static template = xml`
    <div class="game_container">
        <div>
            <h2 align="center">Rock Paper Scissor</h2>
        </div>
        <Guess/>
        <hr/>
        <Result/>
        <br/>
        <hr/>
        <Score/>
    </div>
    `
    static components = { Guess, Result, Score }
}

const createGameData = () => {
    return reactive(new Data)
}

const env = { game: createGameData() }
mount(Root, document.body, { env })
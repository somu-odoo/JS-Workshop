const {Component, mount, useEnv, onWillStart, reactive, useState, xml} = owl;

const finalNumber = () => {
    const numlist = useEnv();
    return useState(numlist.store);
}

class Numbers {
    try = 1;
    num = 0;
    answer = "";
    tries = "";
    retry = "";
    scorecard = "";
    game = 1;
    
    getNum() {this.num = Math.floor(Math.random()*100)+1}
    showretry() {this.retry = "Number has been reset, You can start Guessing new Number."}
    hideretry() {this.retry = ""}
    updateScorecard() {this.scorecard=this.scorecard+" Game "+this.game+" Attempts : "+this.try+" "}
    updateTry() {this.try++;}
    getTry() {return this.try}
    resetTry() {this.try=1}
    highAnswer() {this.answer="Higher"}
    lowAnswer() {this.answer="Lower"}
    correctAnswer() {this.answer="Correct Answer in : "+this.getTry()+" tries."}
    showTry() {this.tries = "Number of tries : "+this.getTry()}
    hideTry() {this.tries = ""}
}

class Third extends Component {
    static template = xml`
        <h3><t t-esc="this.numlist.answer"/></h3>
        <h3><t t-esc="this.numlist.tries"/></h3>
        <h3><t t-esc="this.numlist.retry"/></h3>
        <h3 id="score"><t t-esc="this.numlist.scorecard"/></h3>
    `;

    setup () {
        this.numlist = finalNumber();
    }
}

class Second extends Component {
    static template = xml`
    <div class="container-sm">
            <div class="mb-3 col-auto">
                <label for="numInput" class="form-label">Enter your guess :</label>
                <input type="number" class="form-control" id="numInput" min="1" max="100" t-on-change="checkNum"></input>
            </div>
            <button class="btn btn-primary" id="submitbtn" t-on-click="checkGuess">Submit</button>
            <Third/>
    </div>
    `;

    setup () {
        this.numlist = finalNumber();
    }

    checkNum() {
        let input = document.getElementById("numInput").value;
        let button = document.getElementById("submitbtn");
        if(input<1 || input>100){
            button.innerText = "Incorrect Value";
            button.disabled = true;
        }
        else{
            button.innerText = "Submit";
            button.disabled = false;
        }
    }

    checkGuess() {
        let input = document.getElementById("numInput").value;
        let answer = document.getElementById("guess");
        let tries = document.getElementById("tries");
        if(input==this.numlist.num){
            this.numlist.correctAnswer();
            this.numlist.showretry();
            this.numlist.updateScorecard();
            this.numlist.game+=1;
            this.numlist.resetTry();
            this.numlist.getNum();
            this.numlist.hideTry();
        }
        else if(input<this.numlist.num){
            this.numlist.highAnswer();
            this.numlist.showTry();
            this.numlist.updateTry();
            this.numlist.hideretry();
        }
        else{
            this.numlist.lowAnswer();
            this.numlist.showTry();
            this.numlist.updateTry();
            this.numlist.hideretry();
        }
    }


    static components = {Third};
}

class Root extends Component {
    static template = xml`
    <div class="d-flex justify-content-center">
            <h1>Guess the Number from 1 to 100</h1>
    </div>
    <Second/>
    `;

    setup () {
        this.num = finalNumber();
        onWillStart(() => {
            this.num.getNum();
        })
    }

    static components = {Second};
}

const createNumber = () => {
    return  reactive(new Numbers);
}

const env = {store:createNumber()};

mount(Root, document.body, {env});

const {Component, mount, useEnv, onMounted, reactive, useState, xml} = owl;

const finalNumber = () => {
    const numlist = useEnv();
    return useState(numlist.store);
}

class Numbers {
    result = "";
    scorecard = "Player Score : 0 CPU Score : 0";
    playerscore = 0;
    cpuscore = 0;
    cpuinput = 0;
    playerinput = 0;
    updateScorecard() {this.scorecard="Player Score : "+this.playerscore+" CPU Score : "+this.cpuscore+" "}
    cpuInput() {this.cpuinput = Math.floor(Math.random()*3)+1}
}

class Third extends Component {
    static template = xml`
        <h3 id="score"><t t-esc="this.numlist.scorecard"/></h3>
        <h3 id="res"><t t-esc="this.numlist.result"/></h3>
    `;

    setup () {
        this.numlist = finalNumber();
    }
}

class Second extends Component {
    static template = xml`
    <div class="container-sm d-flex flex-column align-items-center">
            <div class="d-flex flex-row">
                <h2>Player Input : </h2>
                <button class="btn btn-info mx-3" id="rock" t-on-click="inputrock"><i class="fa-regular fa-hand-back-fist"></i></button>
                <button class="btn btn-info mx-3" id="paper" t-on-click="inputpaper"><i class="fa-regular fa-hand"></i></button>
                <button class="btn btn-info mx-3" id="scissor" t-on-click="inputscissor"><i class="fa-regular fa-hand-scissors"></i></button>
            </div>
            <div class="d-flex flex-row">
            <button class="btn btn-success m-3" id="submit" t-on-click="submitanswer">Submit</button>
            <button class="btn btn-primary m-3" id="reset" t-on-click="reset">Reset</button>
            </div>
            <Third/>
    </div>
    `;

    setup () {
        this.numlist = finalNumber();
    }

    inputrock() {
        this.numlist.playerinput = 1;
        document.getElementById("submit").disabled=false;
        document.getElementById("rock").className = "btn btn-success mx-3";
        document.getElementById("paper").className = "btn btn-info mx-3";
        document.getElementById("scissor").className = "btn btn-info mx-3";
    }
    inputpaper() {
        this.numlist.playerinput = 2;
        document.getElementById("submit").disabled=false;
        document.getElementById("rock").className = "btn btn-info mx-3";
        document.getElementById("paper").className = "btn btn-success mx-3";
        document.getElementById("scissor").className = "btn btn-info mx-3";
    }
    inputscissor() {
        this.numlist.playerinput = 3;
        document.getElementById("submit").disabled=false;
        document.getElementById("rock").className = "btn btn-info mx-3";
        document.getElementById("paper").className = "btn btn-info mx-3";
        document.getElementById("scissor").className = "btn btn-success mx-3";
    }
    
    reset() {
        document.getElementById("reset").disabled=true;
        this.numlist.cpuInput();
        document.getElementById("cpu").innerHTML="<i class='fa-regular fa-question'></i>"
        this.numlist.result="";
        document.getElementById("rock").className = "btn btn-info mx-3";
        document.getElementById("paper").className = "btn btn-info mx-3";
        document.getElementById("scissor").className = "btn btn-info mx-3";
        document.getElementById("rock").disabled=false;
        document.getElementById("paper").disabled=false;
        document.getElementById("scissor").disabled=false;
    }

    submitanswer() {
        document.getElementById("submit").disabled=true;
        document.getElementById("rock").disabled=true;
        document.getElementById("paper").disabled=true;
        document.getElementById("scissor").disabled=true;
        document.getElementById("reset").disabled=false;
        if(this.numlist.cpuinput==1){
            document.getElementById("cpu").innerHTML="<i class='fa-regular fa-hand-back-fist'></i>"
        }
        else if(this.numlist.cpuinput==2){
            document.getElementById("cpu").innerHTML="<i class='fa-regular fa-hand'></i>"
        }
        else{
            document.getElementById("cpu").innerHTML="<i class='fa-regular fa-hand-scissors'></i>"
        }
        if(this.numlist.playerinput==1){
            if(this.numlist.cpuinput==2){
                this.numlist.cpuscore+=1;
                this.numlist.result="CPU Wins";
                this.numlist.updateScorecard();
            }
            else if(this.numlist.cpuinput==3){
                this.numlist.playerscore+=1;
                this.numlist.result="Player Wins";
                this.numlist.updateScorecard();
            }
            else{
                this.numlist.result="Draw";
            } 
        }
        else if(this.numlist.playerinput==2){
            if(this.numlist.cpuinput==1){
                this.numlist.playerscore+=1;
                this.numlist.result="Player Wins";
                this.numlist.updateScorecard();
            }
            else if(this.numlist.cpuinput==3){
                this.numlist.cpuscore+=1;
                this.numlist.result="CPU Wins";
                this.numlist.updateScorecard();
            }
            else{
                this.numlist.result="Draw";
            }
        }
        else{
            if(this.numlist.cpuinput==1){
                this.numlist.cpuscore+=1;
                this.numlist.result="CPU Wins";
                this.numlist.updateScorecard();
            }
            else if(this.numlist.cpuinput==2){
                this.numlist.playerscore+=1;
                this.numlist.result="Player Wins";
                this.numlist.updateScorecard();
            }
            else{
                this.numlist.result="Draw";
            }
        }
    }

    static components = {Third};
}

class Root extends Component {
    static template = xml`
    <div class="d-flex align-items-center flex-column">
        <h1>Rock Paper Scissors</h1>
        <div class="d-flex flex-row p-3 m-3">
            <h2>CPU Input : </h2>
            <button class="btn btn-danger btn-lg mx-3" id="cpu"><i class="fa-regular fa-question"></i></button>
        </div>
    <Second/>
    </div>
    `;

    setup () {
        this.numlist = finalNumber();
        onMounted(() => {
            document.getElementById("submit").disabled = true;
            document.getElementById("reset").disabled=true;
            this.numlist.cpuInput();
        })
       
    }

    static components = {Second};
}

const createNumber = () => {
    return  reactive(new Numbers);
}

const env = {store:createNumber()};

mount(Root, document.body, {env});

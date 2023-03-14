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
    playerwin() {this.playerscore+=1; this.result="Player Wins"; this.updateScorecard()}
    cpuwin() {this.cpuscore+=1; this.result="CPU Wins"; this.updateScorecard()}
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
                <button class="btn btn-info mx-3 btn-lg" id="rock" t-on-click="inputrock"><i class="fa-regular fa-hand-back-fist"></i></button>
                <button class="btn btn-info mx-3 btn-lg" id="paper" t-on-click="inputpaper"><i class="fa-regular fa-hand"></i></button>
                <button class="btn btn-info mx-3 btn-lg" id="scissor" t-on-click="inputscissor"><i class="fa-regular fa-hand-scissors"></i></button>
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
        onMounted(() => {
            let submit = document.getElementById("submit");
            let reset = document.getElementById("reset");
            let rock = document.getElementById("rock");
            let paper = document.getElementById("paper");
            let scissor = document.getElementById("scissor");
        })
    }

    inputrock() {
        this.numlist.playerinput = 1;
        submit.disabled=false;
        rock.className = "btn btn-success mx-3 btn-lg";
        paper.className = "btn btn-info mx-3 btn-lg";
        scissor.className = "btn btn-info mx-3 btn-lg";
    }
    inputpaper() {
        this.numlist.playerinput = 2;
        submit.disabled=false;
        rock.className = "btn btn-info mx-3 btn-lg";
        paper.className = "btn btn-success mx-3 btn-lg";
        scissor.className = "btn btn-info mx-3 btn-lg";
    }
    inputscissor() {
        this.numlist.playerinput = 3;
        submit.disabled=false;
        rock.className = "btn btn-info mx-3 btn-lg";
        paper.className = "btn btn-info mx-3 btn-lg";
        scissor.className = "btn btn-success mx-3 btn-lg";
    }
    
    reset() {
        reset.disabled=true;
        this.numlist.cpuInput();
        cpu.innerHTML="<i class='fa-regular fa-question'></i>"
        this.numlist.result="";
        rock.className = "btn btn-info mx-3 btn-lg";
        paper.className = "btn btn-info mx-3 btn-lg";
        scissor.className = "btn btn-info mx-3 btn-lg";
        rock.disabled=false;
        paper.disabled=false;
        scissor.disabled=false;
    }

    submitanswer() {
        submit.disabled=true;
        rock.disabled=true;
        paper.disabled=true;
        scissor.disabled=true;
        reset.disabled=false;
        if(this.numlist.cpuinput==1){
            cpu.innerHTML="<i class='fa-regular fa-hand-back-fist'></i>"
        }
        else if(this.numlist.cpuinput==2){
            cpu.innerHTML="<i class='fa-regular fa-hand'></i>"
        }
        else{
            cpu.innerHTML="<i class='fa-regular fa-hand-scissors'></i>"
        }
        if(this.numlist.playerinput==1){
            if(this.numlist.cpuinput==2){
                this.numlist.cpuwin();
            }
            else if(this.numlist.cpuinput==3){
                this.numlist.playerwin();
            }
            else{
                this.numlist.result="Draw";
            } 
        }
        else if(this.numlist.playerinput==2){
            if(this.numlist.cpuinput==1){
                this.numlist.playerwin();
            }
            else if(this.numlist.cpuinput==3){
                this.numlist.cpuwin();
            }
            else{
                this.numlist.result="Draw";
            }
        }
        else{
            if(this.numlist.cpuinput==1){
                this.numlist.cpuwin();
            }
            else if(this.numlist.cpuinput==2){
                this.numlist.playerwin();
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
            let cpu = document.getElementById("cpu");
            submit.disabled = true;
            reset.disabled=true;
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


const {Component, mount, xml, useState, reactive, useEnv } = owl;

const finalData = () => {
    const counter = useEnv();
    return useState(counter.store);
}
class DataList{
    count=0;
    updateCount(){this.count++;}
    getCount(){ return this.count;}  
    scoreCountGuest = 0;
    scoreCountComputer = 0;
    matchCount = 0;
    guestMatchCount = 0;
    updatescoreCountComputer(){ this.scoreCountComputer++; }
    getScoreCountComputer(){ return this.scoreCountComputer }
    updatescoreCountGuest(){ this.scoreCountGuest++; }
    getScoreCountGuest(){ return this.scoreCountGuest }
    updatematchCount(){ this.matchCount++ }
    getmatchCount(){ return this.matchCount }
    updateGuestMatchCount(){ this.guestMatchCount++ }
    getGuestMatchCount(){ return this.guestMatchCount }

}

class MatchComponent extends Component{
    static template=xml`
    <h3>Matches</h3>
    <h5 id="matchCountId"></h5>
    <table border="2px solid black" style="color:white;background:#5CB3FF;width:100%;text-align:center;font-size:20px">
        <tr>
            <th>Guest</th>
            <th>Computer</th>
        </tr>
        <tr>
            <td id="computerMatchId">0</td> 
            <td id="guestMatchId">0</td>
        </tr>
    </table>
    `;
}


class ScoreComponent extends Component{
    static template=xml`
    <h3>Scores</h3>
    <table border="2px solid black" style="color:white;background:#5CB3FF;width:100%;text-align:center;font-size:20px">
        <tr>
            <th>Guest</th>
            <th>Computer</th>
        </tr>
        <tr>
            <td id="guestId">0</td>
            <td id="computerId">0</td>
        </tr>
    </table>
    `;
}

class ResultComponent extends Component{
    static template=xml`
    <h3>Result of this trial</h3>
    <p id="result"></p>
    `;

}

class Root extends Component{
    static template=xml`
        <div style="color:white;background:black;font-size:25px;border:1px solid black;padding:10px;text-align:center;width:50%;margin-left:25%">
            <h2>Rock Paper Scissors</h2>
            Enter your Choice:<br/>
            1. Rock<br/>
            2. Paper<br/>
            3. Scissors<br/>
            <input type="text" id="guess" t-on-change="myChoice" style="text-align:center;font-size:30px;margin:20px 0px 10px 0px;border-radius:20px"/>
            <ResultComponent />
            <ScoreComponent />
            <MatchComponent />
        </div>
    `;
    
    setup(){
        this.counter = finalData();
    }


    myChoice(ev){
        let arr = [1,2,3];
        this.counter.updateCount();
        if(this.counter.getCount()>5){
            this.counter.updatematchCount();
            if(this.counter.scoreCountComputer>this.counter.scoreCountGuest){
                alert("Sorry, Better luck next time");
            }
            else if(this.counter.scoreCountComputer<this.counter.scoreCountGuest){
                this.counter.updateGuestMatchCount();
                alert("Congratulations, you are win the match");
                
            }
            else if(this.counter.scoreCountComputer == this.counter.scoreCountGuest) {
                alert("Match Draw, Play again");
            }
            document.getElementById('matchCountId').innerHTML = "Total match : " + this.counter.getmatchCount();
            document.getElementById('computerMatchId').innerHTML = this.counter.getGuestMatchCount();
            document.getElementById('guestMatchId').innerHTML = this.counter.getmatchCount()-this.counter.getGuestMatchCount();
            ev.target.value = 0;
            this.counter.count = 0;
            this.counter.scoreCountComputer = 0;
            this.counter.scoreCountGuest = 0;
            result.innerHTML = "";
        }
        else{
            let computerInput = Math.floor(Math.random() * arr.length) + 1;
            console.log(computerInput);
            let userInput = ev.target.value;
            let result = document.getElementById('result');
            let guestScore = document.getElementById('guestId');
            let computerScore = document.getElementById('computerId');
            if(userInput==computerInput){
                result.innerHTML = "game is draw.";
            }
            else if(userInput== 1 && computerInput==2){
                result.innerHTML = "game is loss.";
                this.counter.updatescoreCountComputer();
            }
            else if(userInput== 1 && computerInput==3){
                result.innerHTML = "game is win.";
                this.counter.updatescoreCountGuest();
            }
            else if(userInput== 2 && computerInput==1){
                result.innerHTML = "game is win.";
                this.counter.updatescoreCountGuest();
            }
            else if(userInput== 2 && computerInput==3){
                result.innerHTML = "game is loss.";
                this.counter.updatescoreCountComputer();
            }
            else if(userInput== 3 && computerInput==1){
                result.innerHTML = "game is loss.";
                this.counter.updatescoreCountComputer();
            }
            else if(userInput== 3 && computerInput==2){
                result.innerHTML = "game is win.";
                this.counter.updatescoreCountGuest();
            }
            else{
                result.innerHTML = "Enter Valid Input";
            }
            guestScore.innerHTML = this.counter.getScoreCountGuest();
            computerScore.innerHTML = this.counter.getScoreCountComputer();
        }
        
        
        
        
    }

    static components = {ResultComponent,ScoreComponent,MatchComponent};
}

const createData = () => {
    return reactive(new DataList());
}

const env = { store: createData() };

mount(Root,document.body,{dev: true, env});
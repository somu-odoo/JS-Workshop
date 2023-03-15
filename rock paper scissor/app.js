const { Component, mount, xml, useState, reactive, useEnv, onMounted } = owl;


const finalData = () => {
    const apple = useEnv();
    return useState(apple.store);
}


class index {
    count = 0;
    ai_win = 0;
    player_win = 0;

    updateCount() { this.count++; }
    getCount() { return this.count }


    player_update_count() { this.player_win++; }
    get_player_count() { return this.player_win }

    ai_update_count() { this.ai_win++; }
    get_ai_count() { return this.ai_win }
}


const createData = () => {
    return reactive(new index)
}



class Third extends Component {
    static template = xml`
    <br/>`;
    setup() {
        this.value = finalData();
    }

}


class Second extends Component {
    static template = xml`
    
    <br/>`;

    setup() {

        this.counter = finalData();
    }
    static components = { Third };

}


class Root extends Component {
    static template = xml`
    <Second/>
    <section class="game">
    <!--Title -->
    <div class="title">Rock Paper Scissor</div>
    <div class="move">Choose your move</div>
    
    <!--Number of moves left before game ends -->
    <div class="movesleft">Moves Left: 10 </div>
    <br />
    <!--Display Score of player and computer -->
    <div class="flex-container">

        <div class="playerScore">
            <h2>Player</h2>
            <p class="p-count count">0</p>    
        </div>


        <div class="computerScore">
            <h2>Computer</h2>
            <p class="p-count count">0</p>
        </div>

    </div>
        
        
        <!--Options available to player to play game -->
        <div class="options">
            <button class="rock" t-on-click="clickRock">Rock</button>
            <button class="paper" t-on-click="clickPaper">Paper</button>
            <button class="scissor" t-on-click="clickScissor">Scissors</button>
        </div>
        
        <!--Final result of game -->
        <div class="result"></div>
        
        <!--Reload the game -->
        <button class="reload"></button>
        
        </section>
        `;

    static components = { Second };

    setup() {
        this.key = finalData();
        onMounted(() => {
            this.setResult = document.getElementsByClassName("result")[0];
            this.setScore = document.getElementsByClassName("p-count count");
        });


    }

    clickRock() {
        this.key.updateCount();
        // 0 = rock
        // 1 = paper
        // 2 = scissor
        let ai_choice = Math.floor(Math.random() * 3);
        if (ai_choice == 0) {
            this.setResult.innerHTML = "Tie!";
        }
        else if (ai_choice == 1) {
            this.key.ai_update_count();
            this.setResult.innerHTML = "Rock < Paper, AI gets a point!";
            this.setScore[1].innerHTML = `${this.key.get_ai_count()}`;
        }
        else {
            this.key.player_update_count();
            this.setResult.innerHTML = "Rock > Scissor, You get a point!";
            this.setScore[0].innerHTML = `${this.key.get_player_count()}`;
        }
    }



    clickPaper() {
        this.key.updateCount();
        // 0 = rock
        // 1 = paper
        // 2 = scissor
        let ai_choice = Math.floor(Math.random() * 3);
        if (ai_choice == 0) {
            this.key.player_update_count();
            this.setResult.innerHTML = "Paper > Rock, You get a point!";
            this.setScore[0].innerHTML = `${this.key.get_player_count()}`;
        }
        else if (ai_choice == 1) {
            this.setResult.innerHTML = "Tie!";
        }
        else {
            this.key.ai_update_count();
            this.setResult.innerHTML = "Paper < Scissor, AI gets a point!";
            this.setScore[1].innerHTML = `${this.key.get_ai_count()}`;
        }
    }


    clickScissor() {
        this.key.updateCount();
        // 0 = rock
        // 1 = paper
        // 2 = scissor
        let ai_choice = Math.floor(Math.random() * 3);
        if (ai_choice == 0) {
            this.key.ai_update_count();
            this.setResult.innerHTML = "Scissor < Rock, AI gets a point!";
            this.setScore[1].innerHTML = `${this.key.get_ai_count()}`;
        }
        else if (ai_choice == 1) {
            this.key.player_update_count();
            this.setResult.innerHTML = "Scissor > Paper, You get a point!";
            this.setScore[0].innerHTML = `${this.key.get_player_count()}`;
        }
        else {
            this.setResult.innerHTML = "Tie!";
        }
    }
}

const env = { store: createData() }
mount(Root, document.body, { dev: true, env });
const { Component, mount, xml, onWillRender, onMounted, onWillPatch, onPatched, onWillStart, onRendered, onWillUnmount, onWillDestroy, onError, useState, reactive, useEnv } = owl;

let randomNum = Math.floor(Math.random() * 10) + 1;
console.log("Random Number: ",randomNum);

const finalData = () => {
    const guess = useEnv();
    return useState(guess.store);
}

class Input extends Component {
    static template = xml`
    <input type="text" class="input-field" id="number-input" placeholder="Enter Your Number"/>
    `;

}

class UI extends Component {
    static template = xml`
        <div class="title">
            <h1>Guess The Number</h1>
            <h2>from 1 to 10</h2>
        </div>
        <div>
            <Input/>
        </div>
        <div class="trials">
            <h2 class="trial-left">Trials left: <span id="trial-span" class="trial-span">5</span></h2>
        </div>
        <div>
            <button t-on-click="check" class="guess-button" id="submit-btn">Check</button>
        </div>
        <div class="trials">
            <h2 id="answer"></h2>
        </div>
        <div>
            <button class="reset" id="resetbtn">Reset</button>
        </div>
    `;

    setup() {
        this.user = finalData();

    }

    check() {
        let num = document.getElementById("number-input").value
        let trials = document.getElementById("trial-span");
        let trialsNum = trials.textContent;
        let btn = document.getElementById("submit-btn");
        let ans = document.getElementById("answer");
        let resetbtn = document.getElementById("resetbtn");
        if (num != "") {
            if (trialsNum > 0) {
                if (num == (randomNum + 1) || num == (randomNum - 1)) {
                    ans.innerText = "Guessed too close, try again!";
                }
                else if (num == randomNum) {
                    ans.innerText = "Yay! Guessed correctly";
                    resetbtn.style.display = "block";
                    resetbtn.addEventListener('click', () => {
                        trialsNum = 5;
                        trials.innerText = trialsNum;
                        ans.innerText = "";
                        resetbtn.style.display = "none";
                        randomNum = Math.floor(Math.random() * 10) + 1;
                        console.log(randomNum);
                    })
                }
                else {
                    ans.innerText = "Try again!";
                }
                trialsNum--;
                trials.innerText = trialsNum;
            }
            else {
                alert("No trials left please click on reset!");
                resetbtn.style.display = "block";
                resetbtn.addEventListener('click', () => {
                    trialsNum = 5;
                    trials.innerText = trialsNum;
                    ans.innerText = "";
                    resetbtn.style.display = "none";
                    randomNum = Math.floor(Math.random() * 10) + 1;
                    console.log(randomNum);
                })
            }
        }
        else {
            alert("Please enter a number");
        }
    }
    static components = { Input };
}

class Root extends Component {
    static template = xml`
        <div class="container">
            <UI/>
        </div>
    `;
    static components = { UI };

}
const createData = () => {
    return reactive(new Input);
}
const env = { store: createData() };
mount(Root, document.body, { def: true, env });

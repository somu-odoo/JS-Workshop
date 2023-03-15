const { Component, mount, xml, useState, useEnv, reactive } = owl;

let guesses = 5;
let yourCount = 0;
let compCount = 0;

const finalData = () => {
  const guess = useEnv();
  return useState(guess.store);
};

class Result extends Component {
  static template = xml`
    <div>
      <div>Your Count: <t t-esc="this.user.getYourCount()" /></div>
      <div>Computer Count: <t t-esc="this.user.getCompCount()"/></div> 
    </div>
  `;

  setup() {
    this.user = finalData();
  }
}

class Input extends Component {
  static template = xml`
        
        <button id = "data" value="1"><img src="rocks.jpg" style="height:200px; width:200px"/></button>
        <button id = "data" value="2"><img src="papers.jpg" style="height:200px; width:200px"/></button>
        <button id = "data" value="3"><img src="scissors.jpg" style="height:200px; width:200px"/></button>
    `;

  getInput() {
    const input = document.getElementById("data").value;
    console.log("You: " + input);
    return input;
  }

  yourCount = 0;
  compCount = 0;
  updateYourCount() {
    this.yourCount++;
  }
  getYourCount() {
    return this.yourCount;
  }
  updateCompCount() {
    this.compCount++;
  }
  getCompCount() {
    return this.compCount;
  }
}

class Root extends Component {
  static template = xml`
    <div style="text-align:center; margin-top:200px" >
      <h1>Rock Paper Scissors</h1>
      <Input />
      <div></div><br/>
      <button t-on-click="check" style="background-color: rgb(18, 137, 153); color: #ffffff; padding:6px; width:60px; border-radius:8px" id="play">Play!</button>
      <div></div><br/>
      <Result/>
      <div id = "show"/> 
    </div>
  `;

  static components = { Input, Result };

  setup() {
    this.user = finalData();
  }

  check() {
    const rand = Math.floor(Math.random() * 3) + 1;
    console.log("Computer: " + rand);
    let no = this.user.getInput();

    if (
      (no == 1 && rand == 3) ||
      (no == 2 && rand == 1) ||
      (no == 3 && rand == 2)
    ) {
      console.log("You Win!");
      this.user.updateYourCount();
    } else if (
      (no == 2 && rand == 3) ||
      (no == 3 && rand == 1) ||
      (no == 1 && rand == 2)
    ) {
      console.log("Computer Wins!");
      this.user.updateCompCount();
    } else {
      console.log("Draw");
    }

    guesses--;

    if (guesses == 0) {
      console.log("Game over");
      document.getElementById("play").disabled = true;

      if (this.user.getYourCount() > this.user.getCompCount()) {
        document.getElementById("show").innerHTML =
          "<br/><h3>Congratulation!! You WIN!!</h3>";
      } else if (this.user.getYourCount() < this.user.getCompCount()) {
        document.getElementById("show").innerHTML =
          "<br/><h3>Sorryy!! Computer WINS!!</h3>";
      } else {
        document.getElementById("show").innerHTML =
          "<br/><h3>Match Draw!!</h3>";
      }
    }
  }
}

const createData = () => {
  return reactive(new Input());
};

const env = { store: createData() };

mount(Root, document.body, { dev: true, env });
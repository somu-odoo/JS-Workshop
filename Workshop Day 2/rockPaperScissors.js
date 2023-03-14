const { Component, mount, xml, useState, useEnv, reactive } = owl;

let guesses = 5;
let yourCount = 0;
let compCount = 0;

const finalData = () => {
  const guess = useEnv();
  return useState(guess.store);
};

class Result extends Component{
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
        <input type="text" id="data"/>

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
    <div>
      <h1>Rock Paper Scissors</h1>
      <Input />
      <div></div><br/>
      <button t-on-click="check">Guess!</button>
      <div></div><br/>
      <Result/> 
    </div>
  `;

  static components = { Input, Result};

  setup() {
    this.user = finalData();
  }

  check() {
    const rand = Math.floor(Math.random() * 3) + 1;
    console.log("Computer: " + rand);
    let no = this.user.getInput();

    if ((no == 1 && rand == 3) || (no == 2 && rand == 1) || (no == 3 && rand == 2)) {
      console.log("You Win!");
      this.user.updateYourCount();
    } else if ((no == 2 && rand == 3) || (no == 3 && rand == 1) || (no == 1 && rand == 2)) {
      console.log("Computer Wins!");
      this.user.updateCompCount();
    } else {
      console.log("Draw");
    }

    guesses--;

    if (guesses == 0) {
      console.log("Game over");
      document.getElementById("data").disabled = true;

    }
  }
}

const createData = () => {
  return reactive(new Input());
};

const env = { store: createData() };

mount(Root, document.body, { dev: true, env})

{/* <button><img src = "rock.jpg" id = "data" style="height:200px" value="1"/></button>
<button><img src = "paper.jpg" id = "data" style="height:200px" value="2"/></button>
<button><img src = "scissors.png" id = "data" style="height:200px" value="3"/></button> */}

// const { Component, mount, xml, useState, useEnv, reactive } = owl;

// let guesses = 5;
// let yourCount = 0;
// let compCount = 0;

// const finalData = () => {
//   const guess = useEnv();
//   return useState(guess.store);
// };

// class Input extends Component {
//   static template = xml`<input type="text" id="data" placeholder="Enter number b/w 1 to 3"/>`;

//   getInput() {
//     const input = document.getElementById("data").value;
//     console.log("You: " + input);
//     return input;
//   }

//   yourCount = 0;
//   compCount = 0;
//   updateYourCount() {
//     this.yourCount++;
//   }
//   getYourCount() {
//     return this.yourCount;
//   }
//   updateCompCount() {
//     this.compCount++;
//   }
//   getCompCount() {
//     return this.compCount;
//   }

// }

// class Root extends Component {
//   static template = xml`
//     <div>
//       <h1>Rock Paper Scissors</h1>
//       <Input />
//       <div></div><br/>
//       <button t-on-click="check">Guess!</button>
//       <div></div><br/>
//       <div>Your Count: <t t-esc="this.user.getYourCount()" /></div>
//       <div>Computer Count: <t t-esc="this.user.getCompCount()"/></div>
//       <Result t-if="guesses == 0" result="Result will be displayed here" />
//     </div>
//   `;

//   static components = { Input, Result };

//   setup() {
//     this.user = finalData();
//   }

//   check() {
//     const rand = Math.floor(Math.random() * 3) + 1;
//     console.log("Computer: " + rand);
//     let no = this.user.getInput();

//     if ((no == 1 && rand == 3) || (no == 2 && rand == 1) || (no == 3 && rand == 2)) {
//       console.log("You Win!");
//       this.user.updateYourCount();
//     } else if ((no == 2 && rand == 3) || (no == 3 && rand == 1) || (no == 1 && rand == 2)) {
//       console.log("Computer Wins!");
//       this.user.updateCompCount();
//     } else {
//       console.log("Draw");
//     }

//     guesses--;

//     if (guesses == 0) {
//       console.log("Game over");
//       document.getElementById("data").disabled = true;

//         let template = xml`
//             <div>
//             <Result result="Result will be displayed here" />
//             </div>
//      `;

//       if (this.user.getYourCount() > this.user.getCompCount()) {
//         this.result = "Congratulation!! You Win!!";
//       } else if (this.user.getCompCount() > this.user.getYourCount()) {
//         this.result = "Sorry!! Computer Wins!!";
//       } else {
//         this.result = "Match Draw";
//       }
//     }
//   }
// }

// class Result extends Component {
//   static template = xml`<div><br/><b>Result: </b><t t-esc="this.props.result" /><br/></div>`;

//   static props = ["result"];
// }

// const createData = () => {
//   return reactive(new Input());
// };

// const env = { store: createData() };

// mount(Root, document.body, { dev: true, env})


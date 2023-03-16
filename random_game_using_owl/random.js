const { Component,xml, mount, useState, onWillRender} = owl;

class Second extends Component {
    static template = xml`
    <span>count :</span>
    <t t-esc="this.props.count.guess_count"/>
    `;
    setup(){
    }
    static props = ['count'];

}
class Root extends Component {
    static template = xml `
    <div class="form">
    <label for="guessField">Enter a guess: </label>
    <input type = "text"
    id = "guessField"
    class = "guessField"
    t-on-change="ClickMe"/>
    <button type = "submit"
               value = "Submit guess"
               class = "guessSubmit"
               id = "submitguess">Click</button>
    </div>
    <Second count="this.count"/>
               `;
    setup(){
        this.count = useState({guess_count: 0});
    }
    ClickMe(ev){
        var x = ev.target.value;
        var y = Math.floor(Math.random() * 10 + 1);
        if(x == y)
        {
            alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
            + this.count.guess_count + " GUESS ");
            this.count.guess_count = 0;
        }
        else if(x > y) /* if guessed number is greater than actual number*/
        {
            this.count.guess_count++;
            alert("OOPS SORRY!! TRY A SMALLER NUMBER");
        }
        else
        {
            this.count.guess_count++;
            alert("OOPS SORRY!! TRY A GREATER NUMBER")
        }
    }
    static components = { Second };
}


mount(Root, document.body);

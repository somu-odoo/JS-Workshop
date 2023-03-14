const { Component, mount, xml, reactive, useEnv, useState } = owl;

count = 0;
win = 0;
loose = 0;

const finalData = () => {
    const data = useEnv();
    return useState(data.store);
}

class Score extends Component{
    static template = xml`
        <t>
            <table class="table mt-3" id="tbl">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">User</th>
                    <th scope="col">Computer</th>
                    <th scope="col">Result</th>
                </tr>
                </thead>
            </table>
        </t>
    `;

    showScore(e, randomNum){
        let obj = {0:"scissor",1:"stone",2:"paper"} 
        if(e == 'scissor' & randomNum == 0 || e == 'stone' & randomNum == 1 || e == 'paper' & randomNum == 2){
            const table = document.getElementById("tbl");
            table.innerHTML += `
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>${e}</td>
                    <td>${obj[randomNum]}</td>
                    <td>Draw</td>
                </tr>
                </tbody>
            `;
        } else if(e == 'stone' & randomNum == 2 || e == 'paper' & randomNum == 0 || e == 'scissor' & randomNum == 1){
            const table = document.getElementById("tbl");
            table.innerHTML += `
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>${e}</td>
                    <td>${obj[randomNum]}</td>
                    <td>Loose</td>
                </tr>
                </tbody>
            `;
            win++;
            console.log(win);
        } else {
            const table = document.getElementById("tbl");
            table.innerHTML += `
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>${e}</td>
                    <td>${obj[randomNum]}</td>
                    <td>Win</td>
                </tr>
                </tbody>
            `;
            loose++;
            console.log(loose);
        }
    }
}

class Result extends Component{

}
 
class Input extends Component{
    static template = xml`
        <div class="container vh-100 d-flex justify-content-center align-items-center">
            <div>
                <h1>First Three Wins</h1>
                <div class="d-flex gap-2 ms-2">
                    <button class="btn btn-primary" name="stone" t-on-click="click">Stone</button>
                    <button class="btn btn-primary" name="paper" t-on-click="click">Paper</button>
                    <button class="btn btn-primary" name="scissor" t-on-click="click">Scissor</button>
                </div>
                <Score />
            </div>
        </div>
    `;

    setup(){
        this.data = finalData();
    }
    
    click(e){
        count++;
        if(count < 4){
            this.randomNum = Math.floor(Math.random() * 3);
            this.data.showScore(e.target.name, this.randomNum);
            console.log(count)
        } else{
            if(win > loose){
                console.log('win')
            } else if (win < loose){
                console.log('loose')
            } else {
                console.log('draw')
            }
        }
    }

    static components = { Score };
}

const createData = () => {
    return reactive(new Score)
}

const env = { store: createData() }

mount(Input, document.body, { dev:true, env })
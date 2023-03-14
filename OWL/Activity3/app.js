const{Component,mount,xml,useState,reactive,useEnv} = owl;



const finalData = () =>{

    const key = useEnv();
    return useState(key.store);
}

class Counter {

    count = 0;

    updateCount(){
        this.count++;
    }

    getCount (){

        return this.count;
    }
}

class Second extends Component{

    static template = xml`
    <b> Guess The Number </b> <br/>
    <input type="number"/> <br/><br/>`;

    setup()
    {
        this.sec = finalData(); 
    }
}

class Root extends Component {

    static template = xml `
    <Second/>
    <button t-on-click="clickMe"> Click </button>
    <p></p>
    <b id="cnt"></b>
    `;

     num = Math.floor((Math.random() * 10) + 1);


    clickMe()
    {   
        
        this.rot.updateCount();
        const userInput = document.querySelector("input").value;
        const result = document.querySelector("p");
        const cnt = document.getElementById("cnt");

        if(userInput > this.num){
        result.innerText = "Enter a lower number";
        }
        else if(userInput < this.num){
            result.innerText = "Enter a Higher number";
        }
        else{
            result.innerText = "Correct";
            cnt.innerText = this.rot.getCount();
        }
        
    }

    setup()
    {
        this.rot = finalData();
    }

    static components = {Second};
}

const createData = () =>{
    
    return reactive(new Counter);
}
const env = {
    store:createData()
}

mount(Root, document.body,{ dev:true, env });

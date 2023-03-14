const{Component, mount, xml, useEnv,useState,reactive}=owl;
const finalData=()=>{
    const number = useEnv();
    return useState(number.store);
}
class countnumbers{
    count = 0
    updateCount(){this.count++}
    getCount(){return this.count}
}

class Root extends Component
{
    static template = xml`<button t-on-click="onclick" id='rock' value="0">Rock</button>
    <button t-on-click="onclick2" id='paper' value="1">paper</button>
    <button t-on-click="onclick3" id='scissor' value="2">scissor</button>
    <p>Trails:<t t-esc = "this.count.getCount()"/></p>
    <label>Current Result</label><p id = "result"></p>
    <label>Final Result</label><p id = "finalresult"><label>System</label><t t-esc = "this.system"/><label>User</label><t t-esc = "this.user"/></p>`;
    
    onclick()
    {
        if(this.count.getCount()<10){
        this.count.updateCount();
        this.guess = Math.floor(Math.random()*3)
        console.log(this.guess)
        if (this.guess == rock.value)
        {
            document.getElementById('result').innerHTML = "Tie"
            
        }
        else if(this.guess == paper.value)
        {
            document.getElementById('result').innerHTML = "Lost"
            this.system++
        }
        else
        {
            document.getElementById('result').innerHTML = "You Won"
            this.user++
        }
        console.log("user"+this.user)
        console.log("System"+this.system)
    }
    else if(this.system>this.user){
        document.getElementById('finalresult').innerHTML = "You lost"
    }
    else
    {
        document.getElementById('finalresult').innerHTML = "You won"
    }
    }
    onclick2()
    {
        if(this.count.getCount()<10){
        
        this.count.updateCount();
        this.guess = Math.floor(Math.random()*3)
        console.log(this.guess)
        if (this.guess == paper.value)
        {
            document.getElementById('result').innerHTML = "Tie"
        }
        else if(this.guess == scissor.value)
        {
            document.getElementById('result').innerHTML = "Lost"
            this.system++
        }
        else
        {
            document.getElementById('result').innerHTML = "You Won"
            this.user++
        }
        console.log("user"+this.user)
        console.log("System"+this.system)
    }
    else if(this.system>this.user){
        document.getElementById('finalresult').innerHTML = "You lost"
    }
    else
    {
        document.getElementById('finalresult').innerHTML = "You won"
    }
    }
    onclick3()
    {
        if(this.count.getCount()<10){
        
        this.count.updateCount();
        this.guess = Math.floor(Math.random()*3)
        console.log(this.guess)
        if (this.guess == scissor.value)
        {
            document.getElementById('result').innerHTML = "Tie"
        }
        else if(this.guess == rock.value)
        {
            document.getElementById('result').innerHTML = "Lost"
            this.system++
        }
        else
        {
            document.getElementById('result').innerHTML = "You Won"
            this.user++
        }
        console.log("User"+this.user)
        console.log("System"+this.system)
    }
    else if(this.system>this.user){
        document.getElementById('finalresult').innerHTML = "You lost"
    }
    else
    {
        document.getElementById('finalresult').innerHTML = "You won"
    }
    }
    setup()
    {
        // this.guess = Math.floor(Math.random()*3)
        this.count= finalData();
        this.system=0;
        this.user=0;
    }
}
const count=()=>{
    return reactive (new countnumbers)
}
const env = {store:count()}
mount(Root, document.body,{dev:true,env});
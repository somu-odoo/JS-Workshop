const { Component , mount , xml , useState , props} = owl;

class Input extends Component{
    static template = xml` 
    <h2><t t-esc = "props.values.suggester"/></h2>
    <h2><t t-esc = "props.values.count"/></h2>
    `  
    static props=["values"]  
}

class Counter extends Component{
    static template = xml`
        <div>
        <input type="number" id="user" placeholder="Enter the number"/>
            <Input values="values"/>
            <input type = "submit" id = "submit" t-on-click = "counter"/>
        </div>
    `
    setup(){
        const random_number_generator = ()=> Math.ceil(Math.random()*10)
        const x=random_number_generator()
        let  flag = false
        let count = 0
        this.values = useState({trial_count : "Trial count" , count : 0 , suggester: "Welcome", flag :flag, x:x, count:count})
    }
    counter = (e)=>{
        e.preventDefault()
        const user_input = document.getElementById("user")
        if(this.values.x>user_input.value){
            this.values.suggester = "enter a greater number"
            this.values.count++
            this.valuestrial_count = `${this.count} times`
        }
        else if (this.c=this.values.x<user_input>this.value){
            this.values.suggester = "enter a smaller number"
            this.values.count++
            this.values.trial_count = `${this.count} times`
        }
        else{
            this.values.suggester = "right guess"
            this.values.count++
            this.values.counters = `${this.values.count} times`
            this.values.flag = true
            const submit = document.getElementById("submit")
            submit.remove()
        }
        if(this.values.flag===true){
            setTimeout(()=>{
                location.reload()
            }, 10000)
        } 

    }
    static components = {Input}

}



mount(Counter , document.body)
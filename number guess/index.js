const user_input = document.getElementById("user")
const suggester = document.getElementById("suggester")
const submit = document.getElementById("submit")
const counters = document.getElementById("counter")
const random_number_generator = ()=> Math.ceil (Math.random()*10)

const x=random_number_generator()
flag = false
let count = 0

const counter = (e)=>{
    e.preventDefault()
    if(x>user_input.value){
        suggester.innerText = "enter a greater number"
        count++
        counters.innerText = `${count} times`
    }
    else if(x<user_input.value){
        suggester.innerText = "enter a smaller number"
        count++
        counters.innerText = `${count} times`
    }
    else{
        suggester.innerText = "right guess"
        count++
        counters.innerText = `${count} times`
        flag = true
        submit.remove()    
    }
    if(flag===true){
        setTimeout(()=>{
            location.reload()
        }, 10000)
    }  
}
submit.addEventListener('click', counter)

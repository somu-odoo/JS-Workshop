const add="https://portal.tycoonstats.com/api/demo/1";
demo.addEventListener("click",
    async ()=>{
        const response = await fetch(add);
        var data = await response.json();
        console.log(data);
    }
)
// resp=fetch(add);
// if(resp){
//     console.log("working url");
// }
// console.log(resp)

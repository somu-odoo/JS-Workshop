const add ="https://portal.tycoonstats.com/api/demo/1";

btn.addEventListener("click",
    async () =>{
        const r = await fetch(add);
        let data = await r.json();
        console.log(data);
    }
)
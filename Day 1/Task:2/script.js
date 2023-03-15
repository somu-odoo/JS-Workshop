// let url="https://fakestoreapi.com/products";
let c=10;
let i=0;
// let btn=document.getElementById("next")
// let count=
const contain=document.createElement('div');
async function demo(){
    const x = await fetch("https://fakestoreapi.com/products")
    const data= await x.json()
    // console.log(data)
// document.getElementById('con').innerHTML=data}
    return data
}

demo()
.then((result,i)=>{
    for(i=0;i<c;i++){
        // console.log(result[i])
        contain.classList.add('pro')
        contain.innerHTML += `<img src="${result[i]['image']}" width="300px" height="400px">
        <h3>${result[i].title}</h3>
        <p>${result[i].description}</p>
        <h3>&#8377;${result[i].price}</h3>`;
        document.getElementById("container1").appendChild(contain);
    }
}
)
next.addEventListener('click',()=>{
    console.log("Hello")
    contain.innerHTML="";
    i=10
    c=20
    demo()
    .then((result)=>{
        for(i=i;i<c;i++){
            // console.log(result[i])
            const contain=document.createElement('div');
            contain.classList.add('pro')
            contain.innerHTML += `<img src="${result[i]['image']}" width="300px" height="400px">
            <h3>${result[i].title}</h3>
            <p>${result[i].description}</p>
            <h3>&#8377;${result[i].price}</h3>`;
            document.getElementById("container1").appendChild(contain);
        }
    }
)

})
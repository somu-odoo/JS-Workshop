// let url="https://fakestoreapi.com/products";

async function demo(){
    const x = await fetch("https://fakestoreapi.com/products")
    const data= await x.json()
    // console.log(data)
// document.getElementById('con').innerHTML=data}
    return data
}

demo()
.then((result)=>{
    let i;
    for(i=0;i<10;i++){
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
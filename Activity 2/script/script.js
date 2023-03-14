let div = document.createElement('div');
div.setAttribute("id",'set');

div.setAttribute()

function display(data){
    for(i=0; i<10; i++){
        div.innerHTML += `<img src="${data[i].image}" alt="${data[i].title}" width="100px" height="100px">
        <h3>${data[i].title}</h3>
        <p>Price: ${data[i].price}</p>`

        document.getElementById('main').appendChild(div);
    }
}

function display2(data){
    for(i=10; i<20; i++){
        div.innerHTML += `<img src="${data[i].image}" alt="${data[i].title}" width="100px" height="100px">
        <h3>${data[i].title}</h3>
        <p>Price: ${data[i].price}</p>;`

        document.getElementById('main').appendChild(div);
    }
}


async function Demo(){
    const response = await fetch('https://fakestoreapi.com/products');
    const json = await response.json();
    // console.log(JSON.stringify(json));
    return json;
}

Demo().then((result)=>{
    console.log(result[0]);
    display(result)
}) 







function Next(){

    document.getElementById('set').innerHTML="";
    document.getElementById('prev').setAttribute("class","d-inline");
    document.getElementById('prev').setAttribute("class","btn");
    async function Demo(){
        const response = await fetch('https://fakestoreapi.com/products');
        const json = await response.json();
        // console.log(JSON.stringify(json));
        return json;
    }

    Demo().then((result)=>{
        console.log(result[0]);
        display2(result)
    }) 

}

function Prev(){
    document.getElementById('prev').setAttribute("class","d-none")

    async function Demo(){
        const response = await fetch('https://fakestoreapi.com/products');
        const json = await response.json();
        // console.log(JSON.stringify(json));
        return json;
    }
    
    Demo().then((result)=>{
        console.log(result[0]);
        display(result)
    }) 
   

}

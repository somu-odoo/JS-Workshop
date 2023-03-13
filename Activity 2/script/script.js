let div = document.createElement('div');


        // div.style.height= "500px";
        // div.style.width= "250px";
        // div.style.border= "thick solid black";


// document.getElementById("set").style.border = "";

function display(data){
    for(i=0; i<10; i++){
        // div.style.height= "500px";
        // div.style.width= "250px";
        
        console.log('hii')
        
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



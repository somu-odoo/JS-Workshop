// let url = "https://fakestoreapi.com/products"
async function demo(){
    const x = await fetch("https://fakestoreapi.com/products");
    const data = await x.json();
    // console.log(data)
    for(let i=0; i<10; i++)
    {
        
        // console.log(data[i])
        // document.getElementById('status').innerHTML+=`<img src ="${data[i].image}" width="300px" height="400"><br>`
        // document.getElementById('status').innerHTML+=`${data[i].price}<br>`
        // document.getElementById('status').innerHTML+=data[i].title+"<br>"
        const product = document.createElement('div');
        product.classList.add('prod', 'card');
        product.innerHTML=`<img src="${data[i].image}" width="200px" height="200px"> <div class="card-body"><h4>"${data[i].title}"</h4><p> Price:"${data[i].price}"</p></div>`;
        item.appendChild(product);
    }
}
demo();

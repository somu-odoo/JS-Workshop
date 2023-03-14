const api_url = "https://fakestoreapi.com/products";
let product = document.getElementById('product');
firstpage = document.getElementById('firstpage');
nextpage = document.getElementById('nextpage');

async function getapi(url) {
    product.innerHTML=""
    const response = await fetch(url);
    var data = await response.json();
    for(i = 0; i < 10; i++){
        const productDiv = document.createElement('div');

        productDiv.innerHTML =`<img src="${data[i].image}" alt="${data[i].title}" width="100px" height="100px">
        <h3>${data[i].title}</h3>
        <p>Price: ${data[i].price}</p>`;
        product.appendChild(productDiv);
    }
}   

async function secondpage(url) {
    product.innerHTML=""
    const response = await fetch(url);
    var data = await response.json();
    for(i = 10; i < 20; i++){
        const productDiv = document.createElement('div');

        productDiv.innerHTML =`<img src="${data[i].image}" alt="${data[i].title}" width="100px" height="100px">
        <h3>${data[i].title}</h3>
        <p>Price: ${data[i].price}</p>`;
        product.appendChild(productDiv);
    }
}   
getapi(api_url);
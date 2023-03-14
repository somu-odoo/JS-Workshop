let product = document.getElementById("product") 

async function getData() {
    let details = await fetch("https://fakestoreapi.com/products")
    let re = await details.json();
    for(i=0;i<10;i++){
        const productDiv = document.createElement('div');
        productDiv.classList.add('prod','card');
        productDiv.innerHTML = `<img src="${re[i].image}" alt="${re[i].title}"  width="200px" height="200px">
        <div class="card-body">
        <h3>${re[i].title}</h3>
        <p class="card-text" class="float-start">${re[i].price} &#8377;</p> </div>`;
        product.appendChild(productDiv);
    }
    
}

getData();
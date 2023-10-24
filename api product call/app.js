async function fetchProductsJSON() {
    const response = await fetch("https://fakestoreapi.com/products");
    // waits until the request completes...

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const products = await response.json();
    return products;
}


row = document.getElementById("rows");
fetchProductsJSON().then(products => {
    let element = "";
    for (let index = 0; index < products.length; index++) {
        const eachProduct = products[index];
        let tab =
            `<div class="col-md-6 col-lg-4 col-xl-3">
                <div class="single-product">
                    <div class="part-2">
                        <img src="${eachProduct.image}" />
                        <br/>
                        <p><b>${eachProduct.category}</b></p>
                        <h5>Quantity : ${eachProduct.rating.count}</h5>
                        <h3 class="product-title">${eachProduct.title}</h3>
                        <h4 class="product-old-price">Rs. ${eachProduct.price + 100}</h4>
                        <h4 class="product-price">Rs. ${eachProduct.price}</h4>
                    </div>
                </div>
            </div>`;
        element += tab;
        console.log(element);
    }
    row.innerHTML = element;

});
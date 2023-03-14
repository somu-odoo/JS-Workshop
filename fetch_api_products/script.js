const api_url = "https://fakestoreapi.com/products";
async function getapi(url) {
    const response = await fetch(url);
    let data = await response.json();
    show(data);

}

function show(data) {
    // Loop to access all rows
    tab = `<div class="row m-3 p-3">`;
    data.forEach(product => {
        tab += `
            <div class="col-md-4">
                <div class="card">
                    <img src='${product.image}' style="width:200px; height: 200px;"/>
                    <p class="price">${product.title}</b><br/>
                    <span><b>Price:</b></span>
                    <b class="price">${product.price}</b>
                </div>
            </div>
        `
    }
    );
    tab += `</div>`,
    document.getElementById("response").innerHTML = tab;
}
getapi(api_url);

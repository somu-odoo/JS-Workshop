const url = "https://fakestoreapi.com/products";

async function getapi(url) {
    const response = await fetch(url);

    let data = await response.json();
    displaydata(data);
}

getapi(url);

function displaydata(data) {
    let tab = `
    <tr>
        <th>Details</th>
    </tr>
    `;
    data.forEach(element => {
        tab+=`
        <tr><td>${element.id} </td><td><img src="${element.image}" alt="product image" width="100" height="100"></td></tr>
        <tr><td>${element.category}</td></tr>
        <tr><td>${element.price}</td> </tr>
        <tr><td>${element.description}</td></tr>
        <tr><td>${element.rating.rate}</td></tr>
        <tr><td>${element.rating.count}</td></tr>
        `;
    });

    document.getElementById("products").innerHTML=tab;
}
// const a = async() =>{
//     url=`https://fakestoreapi.com/products`
//     data =await fetch(url).then((res)=>res.json())
//     console.log(data);
// }

// a();

  // JavaScript code 
  const productList = document.getElementById("product-list");

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      displayProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const displayProducts = (products) => {
    let html = "";
    products.forEach((product) => {
      html += `
      <div class="product-card">
        <div class="product-img-container">
          <img src="${product.image}" height="5%" width="5%">
        </div>
        <h2>${product.title}</h2>
        <h3>Price : <span>$${product.price}</span></h3>
        <h3>Description : </h3>
        <span>${product.description}</span><br><Br>
      </div>
    `;
    });
    productList.innerHTML = html;
  };

window.onload = fetchProducts;

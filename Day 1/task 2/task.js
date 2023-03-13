async function fetchProducts() {

    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    displayProducts(data);

}

 function displayProducts(products) {
    const store = document.getElementById('products');
    
    products.forEach(product => {
      const productsss = document.createElement('div');
      productsss.classList.add('product');

      const title = document.createElement('h2');
      title.textContent = product.title;
      productsss.appendChild(title);

      const image = document.createElement('img');
      image.src = product.image;
      productsss.appendChild(image);

      const description = document.createElement("p");
      description.textContent = product.description
      productsss.appendChild(description)

      const category = document.createElement("p");
      category.textContent = product.category
      productsss.appendChild(category)

      const price = document.createElement('p');
      price.textContent = product.price + ' rs';
      productsss.appendChild(price);

      const rating = document.createElement("p");
      rating.textContent = product.rating.rate + ' out of 5 (' + product.rating.count + ' ratings)';
      productsss.appendChild(rating);


      store.appendChild(productsss);
    });
  }

fetchProducts();    
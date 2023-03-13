async function getProducts(){
   const url= "https://fakestoreapi.com/products"

   try{
    let response = await fetch(url);
    return await response.json();
   }catch(error){
    console.log(error)
   }
}
async function renderProducts() {
        let products = await getProducts();
        let html = '';
        let i=0
        products.forEach(product => {
            if(i<10){
            let htmlSegment = `<div style="height:500px;width:500px;border-style:solid;">
                                <h2>${product.id} ${product.title}</h2>

                                <img src="${product.image}" style="width:200px;height:200px;">

                                <p>Price:${product.price}</p>
                                <p>Description:${product.description}</p>
                            </div>`;
    
            html += htmlSegment;
            i++;
       }
    });
    
        document.getElementById("products").innerHTML = html;
    }
    
renderProducts();

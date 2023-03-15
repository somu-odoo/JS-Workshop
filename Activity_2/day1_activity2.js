const product_url ="https://fakestoreapi.com/products";
 
product.addEventListener("click",
    async()=>{
        const response= await fetch(product_url);
        var data=await response.json();
        console.log(data);
        show(data);
    })
    
    function show(data){
        let tab=
            "<tr><th>Id</th><th>Name</th><th>Category</th><th>Image</th><th>Rating</th> </tr>";

        data.forEach((r) => {
            tab = tab.concat( "<tr>"+
                "<td>"+r.id+"</td>"+
                "<td>"+r.title+"</td>"+
                "<td>"+r.category+"</td>"+
                "<td>"+"<img src='"+r.image+"' width='150px' height='160px'>"+"</td>"+
                "<td>"+r.rating.rate+"</td>"+
                  
            "</tr>");  
        });

        console.log(tab);
       document.getElementById("products").innerHTML = tab;
    }

    
const add="https://portal.tycoonstats.com/api/demo/1";
demo.addEventListener("click",
    async ()=>{
        const response = await fetch(add);
        var data = await response.json();
        console.log(data);
    }
)
// resp=fetch(add);
// if(resp){
//     console.log("working url");
// }
// console.log(resp)
const add2="https://fakestoreapi.com/products"
product.addEventListener("click",
    async ()=>{
        
        const response = await fetch(add2);
        var pdt = await response.json();
        console.log(pdt);
        let tab = 
        `<tr style="background-color:grey">
            <th rowspan=2>Id</th>
            <th rowspan=2>Title</th>
            <th rowspan=2>Price</th>
            <th rowspan=2>Discription</th>
            <th rowspan=2>Category</th>
            <th rowspan=2>Image</th>
            <th colspan=2>Rating</th>
         </tr>
         <tr style="background-color:grey">
            <th>Rate</th>
            <th>Count</th>
         </tr>`;
        for (let i=0;i<10;i++){
            tab += `<tr> 
                    <td>${pdt[i].id} </td>
                    <td>${pdt[i].title}</td>
                    <td>${pdt[i].price}</td> 
                    <td>${pdt[i].description}</td>
                    <td>${pdt[i].category}</td> 
                    <td><img style="width:200px;height:200px;" src="${pdt[i].image}"/></td> 
                    <td>${pdt[i].rating.rate}</td>
                    <td>${pdt[i].rating.count}</td>     
                </tr>`;
        }
        document.getElementById("pdtData").innerHTML = tab;


    }
    
)
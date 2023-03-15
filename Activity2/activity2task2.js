const product="https://fakestoreapi.com/products";

btn.addEventListener("click",
    async () =>{
        const r = await fetch(product);
        let data = await r.json();
        console.log(data)

        // let format = 
        // `<tr>
        //   <th>NAME</th>
        //   <th>DESCRIPTION</th>
        //   <th>PRICE</th>
        //   <th>IMAGE</th>
        //  </tr>`;


        //  for(i=0;i<10;i++){
            
        //     format += `<tr> 
        //                <td>${data[i].title} </td>
        //                <td>${data[i].description}</td>
        //                <td>${data[i].price}</td>      
        //                <td><img style="width:150px;height=150px" src="${data[i].image}"/></td>  
        //                </tr>`;
        // }
        format=``;
        for(i=0;i<10;i++){ 
            format+=`<div class="card" style="border-style:solid;width:30%">
                <img style="width:150px;height=150px" src="${data[i].image}"/>
                <p>NAME: ${data[i].title}</p><br/>
                <p>DESCRIPTION: ${data[i].description}</p><br/>
                <p class="price">PRICE: ${data[i].price}</p>       
                </div>`
        }

        document.getElementById("table_data").innerHTML = format;
        }
)
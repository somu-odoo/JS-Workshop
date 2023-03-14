let url_api = "https://fakestoreapi.com/products"
async function funcName(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data)
    show(data);
    
    
    
    /* data.forEach(r => {
        document.write(r.title)
        document.write(r.price)
        
        
    }); */
    
    /* let tab;
    data.array.forEach(r => {
        tab += `<tr> 
                    <td>${r.id} </td>
                    <td>${r.category}</td>
                    <td>${r.price}</td> 
                    <td>${r.description}</td>        
                </tr>`;
        
    }); */

   /*  for(let i in data.list){
        tab+=`<p>${i.title}</p>`
        

    }; */
    
   
    



}
function show(data) {
    
    let tab = 
        `<tr>
          <th>id</th>
          <th>title</th>
          <th>price</th>
          <th>category</th>
          <th>rating</th>
          <th>image</th>
         </tr>`;
    // Loop to access all rows 
    /* data.forEach(r => {
            
        tab += `<tr> 
    <td>${r.id} </td>
    <td>${r.title}</td>
    <td>${r.price}</td> 
    <td>${r.category}</td>
    <td>${r.rating.rate}</td>
    <td><img src="${r.image}" width="150px" height="160px"></td>       
    </tr>`;
        
    });  */
    for (let i=0;i<20;i++){
        tab += `<tr> 
                <td>${data[i].id} </td>
                <td>${data[i].title}</td>
                <td>${data[i].price}</td> 
                <td>${data[i].description}</td>
                <td>${data[i].category}</td> 
                <td><img style="width:200px;height:200px;" src="${data[i].image}"/></td> 
                <td>${data[i].rating.rate}</td>
                <td>${data[i].rating.count}</td>     
            </tr>`;
    };
    document.getElementById('desc').innerHTML=tab
}
/* function nextFunction(data){
    
    let tab = 
    `<tr>
      <th>id</th>
      <th>title</th>
      <th>price</th>
      <th>category</th>
      <th>rating</th>
      <th>image</th>
     </tr>`;
     for (let i=11;i<20;i++){
        tab += `<tr> 
                <td>${data[i].id} </td>
                <td>${data[i].title}</td>
                <td>${data[i].price}</td> 
                <td>${data[i].description}</td>
                <td>${data[i].category}</td> 
                <td><img style="width:200px;height:200px;" src="${data[i].image}"/></td> 
                <td>${data[i].rating.rate}</td>
                <td>${data[i].rating.count}</td>     
            </tr>`;
    };
    document.getElementById('desc').innerHTML=tab
} */


funcName(url_api)

let url_api="https://fakestoreapi.com/products"
async function funcName(url){
    const response= await fetch(url);
    var data=response.json();
    console.log(data)
    /* if(response){
        document.getElementById("desc").innerHTML=data
    } */
    show(data)

}


funcName(url_api)

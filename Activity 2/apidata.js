const urlDemo = "https://portal.tycoonstats.com/api/demo/1";
const urlProduct = "https://fakestoreapi.com/products";
const btnDemo = document.getElementById('demo');
const btnProduct = document.getElementById('btuProduct');

btnDemo.addEventListener("click",
    async ()=>{
        const response = await fetch(urlDemo);
        var data = await response.json();
        document.getElementById("txtData").innerHTML = data.content ;
    }
)

btnProduct.addEventListener("click",
    async ()=>{
        const response = await fetch(urlProduct);
        var data = await response.json();
        var temp=
            "<table border='2'><tr style='font-size:20px;'><th>Id</th><th>Title</th><th>Price</th><th>Description</th><th>Category</th><th>Image</th></tr>";
        var count = 0;
        data.forEach(function (arrayItem) {
            count = count+1;
            if(count<=10){
                temp = temp.concat("<tr>"+
                "<td>"+arrayItem.id+"</td>"+
                "<td>"+arrayItem.title+"</td>"+
                "<td>"+arrayItem.price+"</td>"+
                "<td>"+arrayItem.description+"</td>"+
                "<td>"+arrayItem.category+"</td>"+
                "<td>"+"<img src='"+arrayItem.image+"' height='200px' width='200px'/>" +"</td>"+
                "</tr>")
            }
        });
        document.getElementById("divProduct").innerHTML = "</table>"+temp;
    }
)
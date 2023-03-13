const fetchbtn = document.getElementById("fetchbtn");
const fetchbtn2 = document.getElementById("fetchbtn2");
let card_container = document.getElementById("card_container");
let i=0;
let i_lim = 10;

async function apiCall() {
    let response = await fetch("https://fakestoreapi.com/products")
    let data = await response.json()
    return data;
}
const showdata = (data) => {
    
    card_container.innerHTML = "";
    for(j=i;j<i_lim;i++,j++)
    {   
        let card = document.createElement("div");
        card.className = "card";
        card.style = "width: 18rem;";
        let img = document.createElement("img");
        img.setAttribute("src",data[i]["image"]);
        let body = document.createElement("div");
        body.className = "card-body";
        let head = document.createElement("h5");
        head.className="card-title";
        head.innerHTML = data[i]["title"];
        let price = document.createElement("p");
        price.className="card-text";
        price.innerHTML = data[i]["price"];
        body.appendChild(head);
        body.appendChild(price);
        card.appendChild(img);
        card.appendChild(body);
        card_container.appendChild(card);
    }
}

const getdata = () => {
    i=0;
    i_lim=10;
    apiCall().then(data => showdata(data));
}
const getdata2 = () => {
    i=10;
    i_lim=20;
    apiCall().then(data => showdata(data));
}

fetchbtn.addEventListener("click",getdata);
fetchbtn2.addEventListener("click",getdata2);





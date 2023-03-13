const fetchbtn = document.getElementById("fetchbtn");
const nextbtn = document.getElementById("nextbtn");
const prevbtn = document.getElementById("prevbtn");
let card_container = document.getElementById("card_container");
let i = 0;
let i_lim = 10;
let data;
async function apiCall() {
    let response = await fetch("https://fakestoreapi.com/products")
    let jsondata = await response.json()
    return jsondata;
}
const showdata = (data) => {
    card_container.innerHTML = "";
    for(j=i;j<i_lim;j++)
    {   
        let card = document.createElement("div");
        card.className = "card";
        card.style = "width: 18rem;";
        let img = document.createElement("img");
        img.setAttribute("src",data[j]["image"]);
        let body = document.createElement("div");
        body.className = "card-body";
        let head = document.createElement("h5");
        head.className="card-title";
        head.innerHTML = data[j]["title"];
        let price = document.createElement("p");
        price.className="card-text";
        price.innerHTML = data[j]["price"];
        body.appendChild(head);
        body.appendChild(price);
        card.appendChild(img);
        card.appendChild(body);
        card_container.appendChild(card);
    }
}

const getdata = () => {
    apiCall().then(jsondata => {
        data = jsondata;
        let i = 0;
        if(data.length>10){
            let i_lim = 10;
        }
        else{
            let i_lim = data.length;
        }
        showdata(data);
        nextbtn.style.display="block";
        prevbtn.style.display="block";
    });
    
}
const next = () => {
    let diff = data.length-i_lim;
    if(diff>10){
        i+=10;
        i_lim+=10;
    }
    else if(diff>0){
        i+=diff;
        i_lim+=diff;
    }
    showdata(data);
}
const prev = () => {
    let diff = data.length-i;
    if(data.length-diff>10){
        i-=10;
        i_lim-=10;
    }
    else if(data.length-diff>0){
        i-=diff;
        i_lim-=diff;
    }
    showdata(data);
}
prevbtn.addEventListener("click",prev);
fetchbtn.addEventListener("click",getdata);
nextbtn.addEventListener("click",next);





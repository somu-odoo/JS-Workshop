url = "https://fakestoreapi.com/products"
let table_container = document.getElementById('table_container')
let next = document.getElementById('next')
let page = 0;

function check() {

    if (page * 10 > data.size) {
        next.disabled = true
    } else {
        next.disabled = false
    }

    if (page == 0) {
        prev.disabled = true
    } else {
        prev.disabled = false

    }
}

async function apifetch() {

    res = await fetch(url)
    data = await res.json()

    check()

    let htmlString = "<table><tr> <th> Title </th><th>Image</th><th>Price</th></tr>"
    for (let i = 0; i < 10; i++) {
        htmlString += "<tr> <td>" + data[i + page].title + "</td><td>" + data[i + page].image + "</td><td>" + data[i + page].price + "</td></tr>";
    }
    htmlString += "</table>"

    table_container.innerHTML = htmlString
}

next.addEventListener('click', () => {
    page++;
    apifetch();
})

prev.addEventListener('click', () => {
    page--;
    apifetch();
})

apifetch();
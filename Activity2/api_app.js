
const pid = document.getElementById("pid");
const price = document.getElementById("price");
const title = document.getElementById("title");
const description = document.getElementById("description");
const category = document.getElementById("category");
const rate = document.getElementById("rate");
const count= document.getElementById("count");


async function getProduct()
{
    let response = await fetch('https://fakestoreapi.com/products?limit=10');
    let data = await response.json();
    const container = document.getElementById("container")
    data.forEach(element => {
        const div = document.createElement("div")
        div.classList.add("card")

        const title = document.createElement("p")
        title.innerText = element.title

        const img = document.createElement("img")
        img.src = element.image

        const price = document.createElement("p")
        price.innerText = element.price

        const category = document.createElement("p")
        category.innerText = element.category

        const description = document.createElement("p")
        description.innerText = element.description

        div.appendChild(title)
        div.appendChild(img)
        div.appendChild(price)
        div.appendChild(category)
        div.appendChild(description)
        container.appendChild(div)

    });
    return data
}

getProduct()



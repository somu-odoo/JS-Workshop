async function fetchProducts(){
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    const list = document.getElementById("container")

    const firstTen = data.slice(0,10)
    firstTen.forEach(ele => {
        const div = document.createElement("div")
        div.classList.add("card")
        list.appendChild(div)

        const img = document.createElement("img")
        img.src = ele.image
        div.appendChild(img)

        const h1 = document.createElement("h2")
        h1.style.fontWeight = "300"
        h1.innerHTML = ele.title
        div.appendChild(h1)

        const p = document.createElement("p")
        p.innerHTML = ele.description
        p.style.margin = "30px 0"
        div.appendChild(p)

        const h3 = document.createElement("h3")
        h3.style.fontWeight = "300"
        h3.innerHTML = `Price: &#36;${ele.price}`
        div.appendChild(h3)
        console.log(ele)
    })
}

const button = document.getElementById("btn")
button.onclick = fetchProducts
const container = document.getElementById("row")
const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")
let randomNum = Math.floor(Math.random() * 5);
let count = 10;
let i = 0;

async function Demo(){
    const response = await fetch('https://fakestoreapi.com/products');
    const json = await response.json();
    return json
}

Demo().then((result) => {
    renderCards(result, i);
});

prevBtn.addEventListener('click', () => {
    count = 10;
    i = 0;
    Demo().then((result) => {
        renderCards(result, i)
    }) 
})

nextBtn.addEventListener('click', () => {
    count = 20;
    i = 10;
    Demo().then((result) => {
        renderCards(result, i)
    }) 
})

function renderCards(result, i){
    container.innerHTML = '';
    for(i; i<count; i++){
        let card = `
        <div class="col-md-3 my-2">
            <div class="card" id="card" style="width: 18rem;">
                <img class="card-img-top" id="image" src="${result[i].image}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title" id="title">${result[i].title}</h5>
                <p class="card-text" id="description">${result[i].description}</p>
                </div>
            </div>
        </div>`
        container.innerHTML += card
    }
}
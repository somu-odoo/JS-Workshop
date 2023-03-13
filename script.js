// to generate random number we use random method
let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = [];
let count = 0;
let message = "";
let guessInput = document.getElementById("guess");
let msgDisplay = document.getElementById("message");
let guessesDisplay = document.getElementById("guesses");

function guessNumber() {
	let guess = Number(guessInput.value);

	      //increment the guess count
	guesses.push(guess);
	count++;

	// Check if the guess is correct
	if (guess === randomNumber) {
		message = "Correcttt, TOTAL " + count + " guesses.";
		messageDisplay.style.color = "green";
	}else if ((guess-randomNumber) > 10) {
		message = "Very High";
		messageDisplay.style.color = "red";
	} 
    else if (guess > randomNumber) {
		message = "High";
		messageDisplay.style.color = "red";
	}else if ((guess-randomNumber) < -10) {
		message = "Very Low";
		messageDisplay.style.color = "red";
	}  
    else {
		message = "Low";
		messageDisplay.style.color = "red";
	}

	// Display the message and the guesses
	messageDisplay.innerHTML = message;
	guessInput.value = "";
	guessesDisplay.innerHTML = "Guesses: " + guesses.join(", ");
}
// fetching data from api
// Function to fetch products from the API
async function fetchProducts() {
	
	  const response = await fetch('https://fakestoreapi.com/products');
	  const data = await response.json();
	  displayProducts(data);
	
  }
  
  // Function to display products on the page
  function displayProducts(products) {
	const store = document.getElementById('products');
	store.innerHTML = '';
//    for iterating loop for each product
	products.forEach(product => {
	  const productsss = document.createElement('div');
	  productsss.classList.add('product');
	//  note: The classList property returns the CSS classnames of an element.
  
	  const title = document.createElement('h2');
	  title.textContent = product.title;
	//   The textContent property sets or returns the text content of the specified node, and all its descendants
	  productsss.appendChild(title);

	  const description = document.createElement("p");
	  description.textContent = 'DESCRIPTION: ' +product.description
	  productsss.appendChild(description)

	  const category = document.createElement("p");
	  category.textContent = 'CATEGORY: ' + product.category
	  productsss.appendChild(category)
  
	  const price = document.createElement('p');
	  price.textContent = 'PRICE: ' + product.price + ' rs';
	  productsss.appendChild(price);	  
  
	  const image = document.createElement('img');
	  image.src = product.image;
	  productsss.appendChild(image);

	  const rating = document.createElement("p");
	  rating.textContent = 'RATING: ' + product.rating.rate + ' out of 5 (' + product.rating.count + ' ratings)';
      productsss.appendChild(rating);

  
	  store.appendChild(productsss);
	});
  }
  
fetchProducts();
  
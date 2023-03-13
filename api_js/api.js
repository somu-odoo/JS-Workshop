const url = "http://portal.tycoonstats.com/api/demo/1";

console.log("hello");

async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
}
// Calling that async function
getapi(url);

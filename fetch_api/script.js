const api_url = "https://portal.tycoonstats.com/api/demo/1";
async function getapi(url) {
    const response = await fetch(url);
    let data = await response.json();
    show(JSON.stringify(data));
}

function show(data) {
    let tab =`<tr>
        ${data}
    </tr>`;
    document.getElementById("response").innerHTML = tab;
}
getapi(api_url);

//Getting HTML elements
let headline = document.getElementById("headline");
let aboutApp = document.getElementById("aboutApp");
let headlineAbout = document.getElementById("headlineAbout");
let aboutStorage = document.getElementById("aboutStorage");
let inputDataText = document.getElementById("inputDataText");
let outputDataText = document.getElementById("outputDataText");
let btnClearAll = document.getElementById("clearText");
let lsOutput = document.getElementById("lsOutput");
//For Loop 
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    lsOutput.innerHTML += `Index: 0${i} // Key: ${key} // Value: ${value}<br>`;
}


//Functions
function addToLocalStorage(inputKey, inputValue) {
    inputKey = document.getElementById("inputKey").value;
    inputValue = document.getElementById("inputValue").value;
    if (inputKey && inputValue) {
        localStorage.setItem(inputKey, inputValue);
        console.log(`Key: ${inputKey}, Value: ${inputValue} - adicionado ao Armazenamento Local`);
        location.reload();
    } else alert("Insert key & value.");

}

function clearAll() {
    localStorage.clear();
    location.reload();
}
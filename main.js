window.onload = callFunctions();

// this function will call specified
// funcitons then the browser loads up
function callFunctions() {
    console.log("Hello World!");
    listCars();
}

// this function will trigger on the click
// event of the specified button
function clickTestFunction() {
    let myElement = document.getElementById("testId");
    myElement.innerHTML = "I told you it would change!"
    listCars();
}

function listCars() {
    const list = getElementById("listCars").children;
    const count = list.length;
    let demoPara = getElementById("demo");
    for(let i = 0; i < count; i++) {
        demoPara.innerHTML = demoPara.innerHTML + "Car " + i+1 + " is: " + list[i] + ", ";
    }
}
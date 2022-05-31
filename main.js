window.onload = callFunctions();

console.log("Hello World!")

for(let i = 0; i < 10; i++) {
    console.log("This is number: " + i);
}

// this function will call specified
// funcitons then the browser loads up
function callFunctions() {
    listCars();
}

// this function ois trigger on the click
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
        demoPara.innerHTML = "Car " + i + " is: " + list[i] + ", ";
    }
}
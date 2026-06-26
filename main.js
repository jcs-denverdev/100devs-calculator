// procedural js branch

let num_display = document.getElementById('display-text'); // variable for where you see the numbers as they are clicked
// num_display.innerText = 5;

// does each button need a click event?
    // each "button" is a div, with the class of "button" and an id to represent whatever number or symbol it is

let seven = document.getElementById('seven');
seven.addEventListener('click', addSevenToDisplay);

function addSevenToDisplay () {
    num_display.innerText += 7;
}

let eight = document.getElementById('eight');
eight.addEventListener('click', addEightToDisplay);

function addEightToDisplay () {
    num_display.innerText += 8;
}

let nine = document.getElementById('nine');
nine.addEventListener('click', addNineToDisplay);

function addNineToDisplay () {
    num_display.innerText += 9;
}
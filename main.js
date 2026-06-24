// procedural js branch

let num_display = document.getElementById('display-text'); // variable for where you see the numbers as they are clicked
// num_display.innerText = 5;

// does each button need a click event?
    // each "button" is a div, with the class of "button" and an id to represent whatever number or symbol it is

function addZeroToDisplay () {
    if (num_display.innerText.length > 0) {
        num_display.innerText += 0;
    }
}
function addOneToDisplay () {
    num_display.innerText += 1;
}
function addTwoToDisplay () {
    num_display.innerText += 2;
}
function addThreeToDisplay () {
    num_display.innerText += 3;
}
function addFourToDisplay () {
    num_display.innerText += 4;
}
function addFiveToDisplay () {
    num_display.innerText += 5;
}
function addSixToDisplay () {
    num_display.innerText += 6;
}
function addSevenToDisplay () {
    num_display.innerText += 7;
}
function addEightToDisplay () {
    num_display.innerText += 8;
}
function addNineToDisplay () {
    num_display.innerText += 9;
}

let zero = document.getElementById('zero');
zero.addEventListener('click', addZeroToDisplay);

let one = document.getElementById('one');
one.addEventListener('click', addOneToDisplay);

let two = document.getElementById('two');
two.addEventListener('click', addTwoToDisplay);

let three = document.getElementById('three');
three.addEventListener('click', addThreeToDisplay);

let four = document.getElementById('four');
four.addEventListener('click', addFourToDisplay);

let five = document.getElementById('five');
five.addEventListener('click', addFiveToDisplay);

let six = document.getElementById('six');
six.addEventListener('click', addSixToDisplay);

let seven = document.getElementById('seven');
seven.addEventListener('click', addSevenToDisplay);

let eight = document.getElementById('eight');
eight.addEventListener('click', addEightToDisplay);

let nine = document.getElementById('nine');
nine.addEventListener('click', addNineToDisplay);

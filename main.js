// procedural js branch

let num_display = document.getElementById('display-text'); // variable for where you see the numbers as they are clicked
// num_display.innerText = 5;

// does each button need a click event?
    // each "button" is a div, with the class of "button" and an id to represent whatever number or symbol it is

// we need to be able to hold the first number in memory
// then after an operator is clicked, we need to hold a second number in memory
let n1 = 0;
let n2 = 0;

// number click functions
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
function addDecimalToDisplay () {
    if (!num_display.innerText.includes(".")) {
        num_display.innerText += ".";
    }
}

// operator click functions
function divideNums () {
    n1 = num_display.innerText;
    if (num_display.innerText.length > 0) {
        num_display.innerText += "/";
    }
}
function multiplyNums () {
    n1 = num_display.innerText;
    if (num_display.innerText.length > 0) {
        num_display.innerText += "x";
    }
}
function addNums () {
    n1 = num_display.innerText;
    if (num_display.innerText.length > 0) {
        num_display.innerText += "+";
    }
}
function subtractNums () {
    n1 = num_display.innerText;
    if (num_display.innerText.length > 0) {
        num_display.innerText += "-";
    }
}
function equateNums (num1, num2, operator) {
    // take whatever is in num_display and what operator was last clicked and return
    // maybe a switch statement?
    switch (operator) {
        case divide:
            return num1 / num2;
            break;
        case multiply:
            return num1 * num2;
            break;
        case add:
            return num1 + num2;
            break;
        case subtract:
            return num1 - num2;
            break;
    }
}

// number buttons and event listeners
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

let decimal = document.getElementById('decimal');
decimal.addEventListener('click', addDecimalToDisplay);

// Operator buttons and event listeners
let divide = document.getElementById('divide');
divide.addEventListener('click', divideNums);

let multiply = document.getElementById('multiply');
multiply.addEventListener('click', multiplyNums);

let add = document.getElementById('add');
add.addEventListener('click', addNums);

let subtract = document.getElementById('subtract');
subtract.addEventListener('click', subtractNums);

let equate = document.getElementById('equals');
equate.addEventListener('click', equateNums);
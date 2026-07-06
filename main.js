
// JS OOP BEST PRACTICES

function Calculator () {
    this.buttons = { /* stores the actual button elements rather than the return value of event listeners */
        1: document.getElementById('one'),
        2: document.getElementById('two'),
        3: document.getElementById('three'),
        4: document.getElementById('four'),
        5: document.getElementById('five'),
        6: document.getElementById('six'),
        7: document.getElementById('seven'),
        8: document.getElementById('eight'),
        9: document.getElementById('nine'),
        0: document.getElementById('zero'),
        ".": document.getElementById('decimal'),
        "+": document.getElementById('add'),
        "-": document.getElementById('subtract'),
        "x": document.getElementById('multiply'),
        "/": document.getElementById('divide'),
        "=": document.getElementById('equals')
    }
    for (const key in this.buttons) {
        this.buttons[key].addEventListener('click', () => {
            this.read(key);
            if (key == "+") {
                console.log(`You clicked the ${key}`)
            }
        });
    }

    this.read = function (value) {
        // console.log(value)
        /* take the button key (value), and append to the display */
        document.getElementById('display_text').innerText += value;
    }
    this.add = function (val1, val2) {
        document.getElementById('display_text').innerText += (val1 + val2)
    }
    this.subtract = function () {

    }
    this.multiply = function () {

    }
    this.divide = function () {

    }
}


let calculator = new Calculator(); // new object created




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
        "+": document.getElementById('add'),
        "-": document.getElementById('subtract'),
        "x": document.getElementById('multiply'),
        "/": document.getElementById('divide'),
        "=": document.getElementById('equals')
    }
    for (const key in this.buttons) {
        this.buttons[key].addEventListener('click', () => {
            this.read(key);
        });
    }

    this.read = function (value) {
        // console.log(value)
        document.getElementById('display_text').innerText += value;
    }
    this.add = function () {

        return this.a + this.b;
    }
    this.subtract = function () {
        return this.a - this.b;
    }
    this.multiply = function () {
        return this.a * this.b;
    }
    this.divide = function () {
        if (this.b == 0) throw new Error('div by 0 not allowed');
        return this.a / this.b;
    }
}


let calculator = new Calculator(); // new object created

// console.log(calculator.read());
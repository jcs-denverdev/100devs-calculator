
// JS OOP BEST PRACTICES

function Calculator () {
    this.buttons = {
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
    this.read = function () {
        let display_text = document.getElementById('display_text');
        // this.a = 
        // display_text.innerText += this.a;
        
        // for (const property in this.buttons) {
        //     display_text.innerText += property
        // }
        
        
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

console.log(calculator.read());
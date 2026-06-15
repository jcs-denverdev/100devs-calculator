// JS OOP BEST PRACTICES

class Calculator {
    constructor () {

    }
    read() {
        // this.a = +prompt('a?', 0);
        // this.b = +prompt('b?', 0);
    }
    add() {
        return this.a + this.b;
    }
    subtract() {
        return this.a - this.b;
    }
    multiply() {
        return this.a * this.b;
    }
    divide() {
        return this.a / this.b;
    }
}

let myCalculator = new Calculator();
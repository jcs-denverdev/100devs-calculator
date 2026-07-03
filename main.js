
// JS OOP BEST PRACTICES
function Calculator () {
    this.read = function () {
        let display_text = document.getElementById('display_text');
        // this.a = 
        // display_text.innerText += this.a;
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

console.log(calculator.add());
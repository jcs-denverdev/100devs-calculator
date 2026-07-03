
// JS OOP BEST PRACTICES
function Calculator () {
    this.read = function () {
        // this.a = +prompt('a?', 0);
        // this.b = +prompt('b?', 0);
        let display = document.getElementById('display-text');
        
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
        return this.a / this.b;
    }
}


let calculator = new Calculator(); // new object created

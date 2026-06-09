function userPress() {
    
}

function displayNum() {
    document.getElementById('display-text').innerText += 7;
}

// get buttons to click
let h3 = document.querySelector('.button');
h3.addEventListener('click', displayNum);

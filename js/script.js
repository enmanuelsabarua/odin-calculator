function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;    
}

function multiply(num1, num2) {
    return num1 * num2;    
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    return operator(num1, num2);
}

let displayValue = document.querySelector('#display');

let buttons = document.querySelectorAll('.btn-display');

buttons.forEach(button => {
    button.addEventListener('click', e => {
        displayValue.textContent += e.target.textContent;
    });
});
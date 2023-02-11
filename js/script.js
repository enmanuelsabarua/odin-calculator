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

function showResult(operator) {
    switch (operator) {
        case '+':
            return operate(add, num1, num2)
        case '-':
            return operate(subtract, num1, num2)
        case '*':
            return operate(multiply, num1, num2)
        case '/':
            return operate(divide, num1, num2)
    
        default:
            break;
    }    
}

const displayValue = document.querySelector('#display');

const buttons = document.querySelectorAll('.btn-display');

let num1, num2, operator;
let secondNum = 1;

buttons.forEach(button => {
    button.addEventListener('click', e => {

        let number =  e.target.textContent;

        let isNumber = !isNaN(number);

        if (isNumber && secondNum === 1) {
            secondNum = 0;
            num1 = +number;
            displayValue.textContent = num1;

        } else if (!isNumber && secondNum !== 2) {
            operator = number;
            displayValue.textContent += operator;

        } else if (isNumber && !secondNum) {
            secondNum = 2;
            num2 = +number;
            displayValue.textContent += num2;

        } else if (!isNumber && secondNum === 2) {
            secondNum = 0;
            num1 = showResult(operator);
            operator = number;
            displayValue.textContent = `${num1}${operator}`;
        } 

        // displayValue.textContent += e.target.textContent;
    });
});

const equal = document.querySelector('#equal');

equal.addEventListener('click', e => {
    displayValue.textContent = showResult(operator);
});

// const clear = document.querySelector('#clear');

// clear.addEventListener('click', e => {
//     num1 = 0;
//     num2 = 0;
//     operator = '';
//     secondNum = 0;
//     displayValue.textContent = '';
// });
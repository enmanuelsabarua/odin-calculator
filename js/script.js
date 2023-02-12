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

    if(!num2) {
        return 'Error: division by 0'
    }
    return num1 / num2;
}

function operate(operator, num1, num2) {
    return operator(num1, num2);
}

function showResult(operator, num1, num2) {
    switch (operator) {
        case '+':
            return operate(add, num1, num2);
        case '-':
            return operate(subtract, num1, num2);
        case '*':
            return operate(multiply, num1, num2);
        case '/':
            return operate(divide, num1, num2);
    
        default:
            break;
    }    
}

const displayValue = document.querySelector('#display');

const buttons = document.querySelectorAll('.btn-display');

let num1 = '', num2 = '', operator, number = '';
let operation, result;
let secondNum = 1;

buttons.forEach(button => {
    button.addEventListener('click', e => {

        let input = e.target.textContent;

        number += input;
        displayValue.textContent += input;

        let isNumber = !isNaN(number);

        if (isNumber && secondNum === 1) {
            num1 = number;
            console.log(num1);

        } else if(!isNumber) {
            if (secondNum === 0) {
                if (!num2) num2 = num1;
                
                displayValue.textContent = showResult(operator, +num1, +num2) + number[number.length - 1];
                num1 = showResult(operator, +num1, +num2);
            }
            
            secondNum = 0;
            operator = number[number.length - 1];
            number = '';
            console.log(operator);

        } else if(isNumber && secondNum === 0) {
            num2 = number;
            console.log(num2);
        }
    });
});

const equal = document.querySelector('#equal');

equal.addEventListener('click', e => {
    displayValue.textContent = showResult(operator, +num1, +num2);
});

const clear = document.querySelector('#clear');

clear.addEventListener('click', e => {
    num1 = '';
    num2 = '';
    operator = '';
    input = '';
    number = '';
    secondNum = 1;
    displayValue.textContent = '';
});
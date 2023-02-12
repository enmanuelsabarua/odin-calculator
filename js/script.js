// Operations
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

// Take a callback and do the operation
function operate(operator, num1, num2) {
    return operator(num1, num2);
}

function showResult(operator, num1, num2) {
    switch (operator) {
        case '+':
            // Check if the result is a decimal
            if (operate(add, num1, num2) % 1 != 0) {
                return operate(add, num1, num2).toFixed(2);
            }

            return operate(add, num1, num2);
        case '-':
            if (operate(subtract, num1, num2) % 1 != 0) {
                return operate(subtract, num1, num2).toFixed(2);
            }

            return operate(subtract, num1, num2);
        case '*':
            if (operate(multiply, num1, num2) % 1 != 0) {
                return operate(multiply, num1, num2).toFixed(2);
            }

            return operate(multiply, num1, num2);
        case '/':
            if (operate(divide, num1, num2) % 1 != 0) {
                return operate(divide, num1, num2).toFixed(2);
            }

            return operate(divide, num1, num2);
    
        default:
            break;
    }    
}

const displayValue = document.querySelector('#display');
const buttons = document.querySelectorAll('.btn-display');
const btnPoint = document.querySelector('#point');

let num1 = '', num2 = '', operator = '', number = '';
let operation = '', result, point;
let secondNum = 1; // Check if the user wrote an operator (0: already wrote an operator)

buttons.forEach(button => {
    button.addEventListener('click', e => {

        let input = e.target.textContent;

        operation += input;

        number += input; // `number` take the operands

        displayValue.textContent += input;

        let isNumber = !isNaN(input); // Check if the input is a number

        if (isNumber && secondNum === 1) {

            num1 = number;

        } else if(!isNumber) {
            // Check if the user wrote a point
            if(input == '.') {
                btnPoint.disabled = true;
                return;
            } else {
                btnPoint.disabled = false;
            }

            // if the user already wrote an operator, do this
            if (secondNum === 0) {
                if(!num2) num2 = num1;
                
                displayValue.textContent = showResult(operator, +num1, +num2) + number[number.length - 1];
                num1 = showResult(operator, +num1, +num2);
            }
            
            secondNum = 0;
            operator = number[number.length - 1]; // Take the operator
            number = ''; // Take the second operand

        } else if(isNumber && secondNum === 0) {
            num2 = number;
        }
    });
});

const equal = document.querySelector('#equal');

equal.addEventListener('click', e => {
    if (num1 && num2) {
        displayValue.textContent = showResult(operator, +num1, +num2);
        number = showResult(operator, +num1, +num2);
        secondNum = 1;
    }
});

const clear = document.querySelector('#clear');

clear.addEventListener('click', e => {
    num1 = '';
    num2 = '';
    operator = '';
    operation = '';
    input = '';
    number = '';
    secondNum = 1;
    btnPoint.disabled = false;
    displayValue.textContent = '';
});

const backspace = document.querySelector('#backspace');

backspace.addEventListener('click', e => {
    number = number.toString().slice(0, -1);
    if(!number) {
        number = num1;
        num2 = '';
        secondNum = 1;
        operator = '';
    }
    if(secondNum) {
        num1 = number;
    } else if(secondNum === 0) {
        num2 = number;
    }
    
    displayValue.textContent = `${num1}${operator}${num2}`;

});
var displayValue = '';
var num1;
var num2;
var operatorHolder = '';

var decimal = document.getElementById('point');
var zero = document.getElementById('zero');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');

var addition = document.getElementById('addition');
var subtra = document.getElementById('subtraction');
var divid = document.getElementById('division');
var multipl = document.getElementById('multiply');
var equals = document.getElementById('equals');
var clean = document.getElementById('clear');
var dele = document.getElementById('delete');

decimal.onmousedown = () => displayNum('.');
zero.onmousedown = () => displayNum('0');
one.onmousedown = () => displayNum('1');
two.onmousedown = () => displayNum('2');
three.onmousedown = () => displayNum('3');
four.onmousedown = () => displayNum('4');
five.onmousedown = () => displayNum('5');
six.onmousedown = () => displayNum('6');
seven.onmousedown = () => displayNum('7');
eight.onmousedown = () => displayNum('8');
nine.onmousedown = () => displayNum('9');

addition.onmousedown = () => equate(num1,num2, add);
subtra.onmousedown = () => equate(num1,num2, subtract);
multipl.onmousedown = () => equate(num1,num2, multiply);
divid.onmousedown = () => equate(num1,num2, divide);
equals.onmousedown = () => operate(operatorHolder, num1, displayValue)

var smallerInput = document.getElementById('smol');

clean.onmousedown = () => clear();
dele.onmousedown = () => delet();

function displayNum(number) {
    var input = document.getElementById('input');
    displayValue += number;
    input.innerHTML = ` ${displayValue}`;
}

function equate(number1,number2, x, ) {

    if (displayValue === '') {
        operatorHolder = x;
        switch (operatorHolder) {
            case add:
                holder = '+';
                smallerInput.textContent = num1 + ' ' + holder;
                break;
            case subtract:
                holder = '-';
                smallerInput.textContent = num1 + ' ' + holder;
                break;
            case multiply:
                holder = 'x';
                smallerInput.textContent = num1 + ' ' + holder;
                break;
            case divide:
                holder = '/';
                smallerInput.textContent = num1 + ' ' + holder;
                break;
        }
        return;
    }   else if (num1 === undefined || num1 === '') {
        num1 = input.innerHTML;
        displayValue = '';
        operatorHolder = x;
        switch (operatorHolder) {
            case add:
                holder = '+';
                smallerInput.textContent = num1 + ' ' + holder;
            break;
        case subtract:
            holder = '-';
            smallerInput.textContent = num1 + ' ' + holder;
            break;
        case multiply:
            holder = 'x';
            smallerInput.textContent = num1 + ' ' + holder;
            break;
        case divide:
            holder = '/';
            smallerInput.textContent = num1 + ' ' + holder;
            break;
        }
        
    }   else if (num2 === '' || num2 === undefined ) {
        
        switch (operatorHolder) {
            case add:
                holder = '+';
                smallerInput.textContent = num1 + ' ' + holder;
            break;
        case subtract:
            holder = '-';
            smallerInput.textContent = num1 + ' ' + holder;
            break;
        case multiply:
            holder = 'x';
            smallerInput.textContent = num1 + ' ' + holder;
            break;
        case divide:
            holder = '/';
            smallerInput.textContent = num1 + ' ' + holder;
            break;
        }
        
        operate(operatorHolder, Number(num1), Number(input.innerHTML));
        displayValue = '';
        operatorHolder = x;
        switch (operatorHolder) {
            case add:
                holder = '+';
                smallerInput.textContent = num1 + ' ' + holder;
            break;
        case subtract:
            holder = '-';
            smallerInput.textContent = num1 + ' ' + holder;
            break;
        case multiply:
            holder = 'x';
            smallerInput.textContent = num1 + ' ' + holder;
            break;
        case divide:
            holder = '/';
            smallerInput.textContent = num1 + ' ' + holder;
            break;
        }
        smallerInput.textContent = num1 + ' ' + holder;

    }
    
}

    
function operate(operat, a, b) {
    if (operatorHolder === ''|| displayValue === '') {
        return;
    }
    smallerInput.textContent = num1 + ' ' + holder + ' ' + input.innerHTML + ' =';
    switch(operat) {
        case add:
            displayValue = add(Number(a),Number(b));
            break;
        case subtract:
            displayValue = subtract(a,b);
            break;
        case multiply:
            displayValue = multiply(a,b);
            break;
        case divide:
            displayValue = divide(a,b);
            break;
    }
    var rounded = displayValue;
    rounded = rounded.toFixed(3);
    num1 = displayValue;
    displayValue = '';
    var wholeNumCheck = rounded - num1;
    if (wholeNumCheck === 0) {
        input.innerHTML = `${num1}`;
    } else {
    input.innerHTML = `${rounded}`;
    }
}



function clear() {
    displayValue ='';
    operatorHolder = '';
    holder = ';'
    smallerInput.textContent = '';
    input.innerHTML = `0`;
    num1 = '';
    num2 = '';
}

function delet() {
    displayValue = displayValue.substring(0, displayValue.length - 1);
    input.innerHTML = `${displayValue}`;
}

function add(a,b) {
    return Number(a + b);
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}


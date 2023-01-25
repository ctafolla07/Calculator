var displayValue = '';


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
var subtract = document.getElementById('subtract');
var divide = document.getElementById('divide ');
var multiply = document.getElementById('multiply');
var equals = document.getElementById('equals');
var clean = document.getElementById('clear');
var dele = document.getElementById('delete');


one.onmousedown = () => displayNum('1');
two.onmousedown = () => displayNum('2');
three.onmousedown = () => displayNum('3');
four.onmousedown = () => displayNum('4');
five.onmousedown = () => displayNum('5');
six.onmousedown = () => displayNum('6');
seven.onmousedown = () => displayNum('7');
eight.onmousedown = () => displayNum('8');
nine.onmousedown = () => displayNum('9');

clean.onmousedown = () => clear();
dele.onmousedown = () => delet();

function displayNum(number) {
    var input = document.getElementById('input');
    displayValue += number;
    input.innerHTML = ` ${displayValue}`;
}

function clear() {
    displayValue ='';
    input.innerHTML = ` ${displayValue}`;
}

function delet() {
    displayValue = displayValue.substring(0, displayValue.length - 1);
    input.innerHTML = `${displayValue}`;
}

function add(a,b) {
    return a + b;
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

function operate(operat, a, b) {
    switch(operat) {
        case add:
            return add(a,b);
            break;
        case subtract:
            return subtract(a,b);
            break;
        case multiply:
            return multiply(a,b);
            break;
        case divide:
            return divide(a,b);
            break;
    }
}
function returnTwo() {
    return 2
}

function greeting(name) {
    return `Hello, ${name}.`
}

function argsAreNumbers(num1, num2) {
    return typeof num1 === 'number' && typeof num2 === 'number'
}

function add (num1, num2) {
    if(!argsAreNumbers(num1, num2)) {
        return NaN
    }
    return num1 + num2
}
function subtract (num1, num2) {
    if(!argsAreNumbers(num1, num2)) {
        return NaN
    }
    return num1 - num2
}

function multiply (num1, num2) {
    if(!argsAreNumbers(num1, num2)) {
        return NaN
    }
    return num1 * num2
}

function divide (num1, num2) {
    if(!argsAreNumbers(num1, num2)) {
        return NaN
    }
    if(num2 === 0) {
        return NaN
    }
    return num1 / num2
}

function exponent (num1, num2) {
     if(!argsAreNumbers(num1, num2)) {
        return NaN
    }
    return Math.pow(num1, num2)
}

module.exports = {
    returnTwo,
    greeting,
    add,
    subtract,
    multiply,
    divide,
    exponent
}
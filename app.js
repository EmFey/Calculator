function sum(a, b) {
    return console.log(a + b);
}

function subtract(a, b) {
    return console.log(a - b);
}

function multiply(a, b) {
    return console.log(a * b);
}

function divide(a, b) {
    return console.log(a / b);
}

function operator(num1, op, num2) {
    if (op === "+") {
        return console.log(sum(num1, num2));
    } else if (op === "-") {
        return console.log(subtract(num1, num2));
    } else if (op === "*") {
        return console.log(multiply(num1, num2));
    } else if (op === "/") {
        return console.log(divide(num1, num2));
    } else {
        console.log("Incorrect inputs!");
    }
}

operator(5, "+", 2);
operator(5, "-", 2);
operator(5, "*", 2);
operator(4, "/", 2);
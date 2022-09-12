const numbers = document.querySelectorAll("[num]");
const fullOperation = document.querySelector(".fullOperation");

numbers.forEach((button) => button.addEventListener("click", displayValue));

function displayValue() {
    fullOperation.textContent = numbers.textContent;
}

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
    if (b === 0) return null
      else return console.log(a / b);
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
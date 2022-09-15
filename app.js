//getting the elements from HTML
const numbers = document.querySelectorAll(".num");
const fullOperation = document.querySelector(".fullOperation").textContent = "Clowning";
const currrentOperation = document.querySelector(".currentOperation"); 

//setting event listeners
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", () => displayNumber(numbers.textContent));
}

//numbers.forEach((button) => button.addEventListener("click", () => displayNumber(button.textContent)));

function displayNumber(number) {
    currrentOperation.textContent = " ";
    currrentOperation.textContent += number;
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
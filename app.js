//getting the elements from HTML and declaring variables
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".del");
const point = document.querySelector(".point");
const equals = document.querySelector(".equals");
let finalResult = document.querySelector(".fullOperation");
let currentOperation = document.querySelector(".currentOperation");
let lastValue = "";
let op = "";
let firstValue = null;
let secondValue = null;

//setting event listeners
clearBtn.addEventListener("click", clearFunction)
delBtn.addEventListener("click", delFunction)

const buttonsToDisplay = document.querySelectorAll(".btn")
for (const button of buttonsToDisplay) {
    button.addEventListener("click", (event) => {
        const buttonValue = event.target.textContent;

        switch (buttonValue) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                handleNumberButtonClick(buttonValue);
                break;
            case '.':
                handleDecimalButtonClick();
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                handleOperatorButtonClick(buttonValue);
                break;
            case '=':
                handleEqualsButtonClick();
                break;
        }

        displayValue();
    });
}

function handleNumberButtonClick(number) {
    if (op === "") {
        if (firstValue === null) {
            firstValue = number;
        } else {
            firstValue += number;
        }
    } else {
        if (secondValue === null) {
            secondValue = number;
        } else {
            secondValue += number;
        }
    }

    lastValue = number;
}

function handleDecimalButtonClick() {
    if (secondValue === null) {
        if (!firstValue.includes('.')) {
            firstValue += '.';
        }
    } else {
        if (!secondValue.includes('.')) {
            secondValue += '.';
        }
    }
}

function handleOperatorButtonClick(operatorClicked) {
    if (op === "") {
        op = operatorClicked;
    } else {
        if (firstValue !== null && secondValue !== null) {
            firstValue = operate(parseFloat(firstValue), op, parseFloat(secondValue));
            secondValue = null;
        }
        operator = operatorClicked;
    }

    lastValue = operatorClicked;
}

function handleEqualsButtonClick() {
    if (firstValue !== null && secondValue !== null && op !== null) {
        currentOperation.textContent = operate(parseFloat(firstValue), op, parseFloat(secondValue));
        op = "";
        firstValue = null;
        secondValue = null;
    }

    lastValue = "=";
}

function operate(num1, op, num2) {
    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return null;
    }
}

function displayValue() {
    if (secondValue === null) {
        currentOperation.textContent = firstValue;
    } else {
        currentOperation.textContent = secondValue;
    }
}


//Edit buttons functions
function clearFunction() {
    op = ""
    firstValue = null
    secondValue = null
    currentOperation.textContent = '0'
    finalResult.textContent = ""
}

function delFunction() {
    currentOperation.textContent = currentOperation.textContent.toString().slice(0, -1)
}

//logic
function sum(a, b) {
    finalResult.textContent = a + b;
    return console.log(a + b);
}
function subtract(a, b) {
    finalResult.textContent = a - b;
    return console.log(a - b);
}
function multiply(a, b) {
    finalResult.textContent = a * b;
    return console.log(a * b);
}
function divide(a, b) {
    if (b === 0) {
        return null
    } else {
        finalResult.textContent = a / b;
        return console.log(a / b);
    }
}

function operate(num1, op, num2) {
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
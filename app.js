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
for (let i = 0; i < buttonsToDisplay.length; i++) {
    buttonsToDisplay[i].addEventListener("click", (button) => {
        switch(button.target.textContent){
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
                if(op == ""){
                    if(firstValue == null){
                        firstValue = button.target.textContent
                    } else{
                        firstValue += button.target.textContent
                    }
                } else {
                    if(secondValue == null){
                        secondValue = button.target.textContent
                    } else {
                        secondValue += button.target.textContent
                    }
                }
                lastValue = button.target.textContent
                break;
            case '.':
                if(secondValue == null){
                    if(firstValue.includes('.')){
                        //Already has a dot
                    } else {
                        firstValue += '.'
                    }
                } else {
                    if(secondValue.includes('.')){
                        //Already has a dot
                    } else {
                        secondValue += '.'
                    }
                }
                break;
            case '+':
                if(op == ""){
                    op = '+'
                } else {
                    if(firstValue != null && secondValue != null){
                        firstValue = operate(firstValue, op, secondValue)
                        secondValue = null
                    } 
                    if(op != '+'){
                        op = '+'
                    }
                 }
                lastValue = button.target.textContent
                break;
            case '-':
                if(op == ""){
                    op = '-'
                } else {
                    if(firstValue != null && secondValue != null){
                        firstValue = operate(firstValue, op, secondValue)
                        secondValue = null
                    }
                    if(op != '-'){
                        op = '-'
                    }   
                 }
                lastValue = button.target.textContent
                break;
            case '/':
                if(op == ""){
                    op = '/'
                } else {
                    if(firstValue != null && secondValue != null){
                        firstValue = operate(firstValue, op, secondValue)
                        secondValue = null
                    } 
                    if(op != '/'){
                        op = '/'
                    }  
                 }
                lastValue = button.target.textContent
                break;
            case '*':
                if(op == ""){
                    op = '*'
                } else {
                    if(firstValue != null && secondValue != null){
                        firstValue = operate(op, firstValue, secondValue)
                        secondValue = null
                    }   
                    if(op != '*'){
                        op = '*'
                    }
                 }
                lastValue = button.target.textContent
                break;
            case '=':
                if(firstValue != null && secondValue != null && op != null){
                    currentOperation.textContent = operate(Number(firstValue), op, Number(secondValue))
                    op = ""
                    firstValue = null
                    secondValue = null
                }
                lastValue = button.target.textContent
                break;
        }
        if(secondValue == null){
            currentOperation.textContent = firstValue
        } else {
            currentOperation.textContent = secondValue
        }
    });
}

//Edit buttons funcions
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
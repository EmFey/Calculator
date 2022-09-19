let lastValue = ""
let operator = ""
let firstValue = null
let secondValue = null

function updateScreenValue(value){
    switch(value){
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
                // Working on first value
                if(firstValue == null){
                    firstValue = value
                } else{
                    firstValue += value
                }
            } else {
                // Working on second value
                if(secondValue == null){
                    secondValue = value
                } else {
                    secondValue += value
                }
            }
            lastValue = value
            break;
        case '.':
            if(secondValue == null){
                if(firstValue.includes('.')){
                    //Already has a '.' don't do anything
                } else {
                    firstValue += '.'
                }
            } else {
                if(secondValue.includes('.')){
                    //Already has a '.' don't do anything
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
                    firstValue = operate(op, firstValue, secondValue)
                    secondValue = null
                } 
                if(op != '+'){
                    op = '+'
                }
             }
            lastValue = value
            break;
        case '-':
            if(op == ""){
                op = '-'
            } else {
                if(firstValue != null && secondValue != null){
                    firstValue = operate(op, firstValue, secondValue)
                    secondValue = null
                }
                if(op != '-'){
                    op = '-'
                }   
             }
            lastValue = value
            break;
        case '/':
            if(op == ""){
                op = '/'
            } else {
                if(firstValue != null && secondValue != null){
                    firstValue = operate(op, firstValue, secondValue)
                    secondValue = null
                } 
                if(op != '/'){
                    op = '/'
                }  
             }
            lastValue = value
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
            lastValue = value
            break;
        case '=':
            if(firstValue != null && secondValue != null && op != null){
                document.getElementById('screen-value').innerHTML = operate(op, Number(firstValue), Number(secondValue)).toFixed(4)
                op = ""
                firstValue = null
                secondValue = null
            }
            lastValue = value
            break;
        case 'clear':
            op = ""
            firstValue = null
            secondValue = null
            document.getElementById('screen-value').innerHTML = '0'
            break;

    }
    if(value == '='){
        // We already changed element's value
    } else if(value == 'clear') {
        // Also don't do anything
    } else if(secondValue == null){
        document.getElementById('screen-value').innerHTML = firstValue
    } else {
        document.getElementById('screen-value').innerHTML = secondValue
    }
}




//logic
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
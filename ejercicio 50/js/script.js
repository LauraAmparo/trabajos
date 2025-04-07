let displayValue = '';
let operador = '';
let firstOperand = '';

function appendCharacter(char){
    displayValue += char;
    updateDisplay();
}

function setOperador(op){
    operador = op;
    firstOperand = displayValue;
    displayValue = '';
    updateDisplay();
}

function calculate() {
    const secondOperand = displayValue;
    let resultado = '';

    switch (operador) {
        case '+':
            resultado = sumar(parseFloat(firstOperand), parseFloat(secondOperand));
            break;
        case '-':
            resultado = restar(parseFloat(firstOperand), parseFloat(secondOperand));
            break;
        case '*':
            resultado = multiplicar(parseFloat(firstOperand), parseFloat(secondOperand));
            break;
        case '/':
            resultado = dividir(parseFloat(firstOperand), parseFloat(secondOperand));
            break;
        default:
            resultado = 'Error';
    }
    displayValue = resultado.toString();
    operador = '';
    updateDisplay();
}

function clearDisplay(){
    displayValue = '';
    firstOperand = '';
    updateDisplay();
}

function updateDisplay(){
    document.getElementById('display').value = displayValue;
}

function sumar(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

function dividir(a, b){
    if (b !== 0){
        return a / b;
    } else {
        return 'Error: No se puede dividir por cero';
    }
}


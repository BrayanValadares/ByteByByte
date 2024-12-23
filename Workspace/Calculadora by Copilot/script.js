let display = document.getElementById('display');
let current = '';
let operation = null;
let previous = '';

function appendNumber(number) {
    if (number === ',') {
        if (current === '' || current.includes('.')) return;
        number = '.';
    }
    if (number === '.' && current === '') return;
    current += number;
    updateDisplay();
}

function chooseOperation(op) {
    if (current === '' && previous !== '') {
        operation = op;
        updateDisplay();
        return;
    }
    if (current === '') return;
    if (previous !== '') {
        compute();
    }
    operation = op;
    previous = current;
    current = '';
    updateDisplay();
}

function compute() {
    let computation;
    const prev = parseFloat(previous.replace(',', '.'));
    const curr = parseFloat(current.replace(',', '.'));
    if (isNaN(prev) || isNaN(curr)) return;
    switch(operation){
        case '+':
            computation = prev + curr;
            break;
        case '-':
            computation = prev - curr;
            break;
        case '*':
            computation = prev * curr;
            break;
        case '/':
            computation = prev / curr;
            break;
        default:
            return;
    }
    current = computation.toString().replace('.', ',');
    operation = null;
    previous = '';
    updateDisplay();
}

function clearDisplay() {
    current = '';
    previous = '';
    operation = null;
    updateDisplay();
}

function updateDisplay(){
    if (operation !== null) {
        display.value = `${previous.replace('.', ',')} ${operation} ${current}`;
    } else {
        display.value = current;
    }
}
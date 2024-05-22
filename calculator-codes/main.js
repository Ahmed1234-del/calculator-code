function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    var display = document.getElementById('display');
    display.value = eval(display.value);
}

function clearDisplay() {
    document.getElementById('display').value = '';
}
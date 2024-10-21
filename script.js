let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('btn'));
let clearButton = document.getElementById('clear');
let equalsButton = document.getElementById('equals');

let currentInput = ''; // Stores the current input from the user

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.getAttribute('data-value');

        // If it's not the equals or clear button, append to input
        if (value) {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});

equalsButton.addEventListener('click', () => {
    try {
        let result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString(); // Update currentInput to allow chaining
    } catch (e) {
        display.textContent = 'Error';
        currentInput = '';
    }
});

clearButton.addEventListener('click', () => {
    currentInput = '';
    display.textContent = '';
});

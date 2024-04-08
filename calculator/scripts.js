/* Place your JavaScript in this file */

function showValue(button) {
    var buttonText = button.innerText;
    var displayBox = document.getElementById('display-box');

    if (buttonText === '=') {
        calculateResult();
    } else if (buttonText === 'x') {
        clearLastInput();
    } else {
        displayBox.innerText += buttonText;
    }
}

function clearLastInput() {
    var displayBox = document.getElementById('display-box');
    displayBox.innerText = displayBox.innerText.slice(0, -1);
}

function calculateResult() {
    var displayBox = document.getElementById('display-box');
    var expression = displayBox.innerText;

    // Use regular expression to split the expression into operands and operator
    var regex = /(\d+)([+\-*\/])(\d+)/;
    var match = regex.exec(expression);

    if (match) {
        var operand1 = parseFloat(match[1]);
        var operator = match[2];
        var operand2 = parseFloat(match[3]);
        var result;

        switch (operator) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            case '/':
                if (operand2 !== 0) {
                    result = operand1 / operand2;
                } else {
                    displayBox.innerText = 'Cannot divide by zero';
                    return;
                }
                break;
            default:
                displayBox.innerText = 'Invalid operation';
                return;
        }

        displayBox.innerText += ' = ' + result;

        // Add a reset option
        displayBox.innerHTML += '<span class="reset-button" onclick="resetDisplay()">Reset</span>';
    } else {
        displayBox.innerText = 'Invalid expression';
    }
}

function resetDisplay() {
    var displayBox = document.getElementById('display-box');
    displayBox.innerText = '';
}

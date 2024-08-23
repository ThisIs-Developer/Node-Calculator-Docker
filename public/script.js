let topDisplay = document.getElementById('topDisplay');
let display = document.getElementById('display');
let currentInput = '';
let isNewCalculation = false;

const clearDisplay = () => {
  currentInput = '';
  display.value = '0';
  topDisplay.value = '';
  isNewCalculation = false;
};

const formatExpression = (expression) => {
  return expression.replace(/\*/g, '×').replace(/\//g, '÷');
};

const inputValue = (value) => {
  if (isNewCalculation) {
    clearDisplay();
  }

  let displayValue = value;
  if (value === '*') {
    displayValue = '×';
  } else if (value === '/') {
    displayValue = '÷';
  }

  if (value === '.' && currentInput.includes('.')) {
    return;
  }
  
  if (value === '+/-' && currentInput !== '') {
    if (currentInput.charAt(0) === '-') {
      currentInput = currentInput.slice(1);
    } else {
      currentInput = '-' + currentInput;
    }
    display.value = currentInput;
    return;
  }

  if (value === '%') {
    try {
      currentInput = eval(currentInput) / 100;
      display.value = currentInput;
    } catch (error) {
      display.value = 'Error';
    }
    return;
  }

  currentInput += value;
  display.value = currentInput.replace(/\*/g, '×').replace(/\//g, '÷');
  isNewCalculation = false;
};

const calculateResult = () => {
  try {
    const result = new Function('return ' + currentInput)();
    const expression = currentInput;
    currentInput = result.toString();
    display.value = currentInput;

    topDisplay.value = formatExpression(expression);
    isNewCalculation = true;
  } catch (error) {
    display.value = 'Error';
    isNewCalculation = true;
  }
};

document.addEventListener('keydown', (event) => {
  const key = event.key;
  
  if (!isNaN(key) || key === '.') {
    inputValue(key);
  }

  if (key === '/' || key === '*' || key === '-' || key === '+') {
    inputValue(key);
  }

  if (key === 'Enter') {
    calculateResult();
  }

  if (key === 'Escape') {
    clearDisplay();
  }

  if (key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput.replace(/\*/g, '×').replace(/\//g, '÷');
  }

  if (key === 'Delete') {
    clearDisplay();
  }
});

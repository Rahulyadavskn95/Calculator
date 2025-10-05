const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const modeToggle = document.getElementById('modeToggle');
let currentInput = '';

function updateDisplay(value) {
  display.textContent = value || '0';
}

// Button clicks
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = '';
      updateDisplay(currentInput);
    } 
    else if (value === '⌫') {
      currentInput = currentInput.slice(0, -1);
      updateDisplay(currentInput);
    }
    else if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
        updateDisplay(currentInput);
      } catch {
        updateDisplay('Error');
        currentInput = '';
      }
    } 
    else {
      currentInput += value;
      updateDisplay(currentInput);
    }
  });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
  if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.', '%'].includes(e.key)) {
    currentInput += e.key;
    updateDisplay(currentInput);
  } else if (e.key === 'Enter') {
    try {
      currentInput = eval(currentInput).toString();
      updateDisplay(currentInput);
    } catch {
      updateDisplay('Error');
      currentInput = '';
    }
  } else if (e.key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput);
  } else if (e.key === 'Escape') {
    currentInput = '';
    updateDisplay(currentInput);
  }
});

// Dark/Light mode toggle
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  modeToggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});

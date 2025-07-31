let display = document.getElementById('display');

function insert(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(display.value);
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}

function sqrt() {
  if (display.value) {
    display.value = Math.sqrt(eval(display.value));
  }
}

function power() {
  if (display.value) {
    display.value = Math.pow(eval(display.value), 2);
  }
}

// Keyboard support
document.addEventListener("keydown", function(event) {
  let key = event.key;

  // Numbers and operators
  if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
    insert(key);
  }

  // Enter = calculate
  if (key === "Enter") {
    calculate();
  }

  // Backspace = delete
  if (key === "Backspace") {
    deleteChar();
  }

  // Escape = clear
  if (key === "Escape") {
    clearDisplay();
  }
});

const display = document.getElementById('display');
const keys    = document.querySelector('.calc__keys');

/* Allow typing on real keyboard */
document.addEventListener('keydown', (e) => {
  const key = e.key;
  if ('0123456789.+-*/'.includes(key)) append(key);
  else if (key === 'Enter') calculate();
  else if (key === 'Escape') clear();
});

/* Clicks / taps */
keys.addEventListener('click', (e) => {
  const key = e.target.dataset.key;
  if (!key) return;           // clicked grid gap
  if (key === '.')  appendDot();
  else if ('+-*/'.includes(key)) appendOp(key);
  else append(key);           // digit
});

document.getElementById('equals').onclick = calculate;
document.getElementById('clear').onclick  = clear;

function append(char) {
  if (display.value === '0' || display.value === 'Error') display.value = char;
  else display.value += char;
}

function appendDot() {
  const lastNum = display.value.split(/[+\-*/]/).pop();
  if (!lastNum.includes('.')) append('.');
}

function appendOp(op) {
  const val = display.value;
  if (/[+\-*/]$/.test(val)) {         // replace trailing operator
    display.value = val.slice(0, -1) + op;
  } else {
    display.value += op;
  }
}

function clear() { display.value = '0'; }

function calculate() {
  try {
    const sanitized = display.value.replace(/[^0-9.+\-*/]/g, '');
    const result = Function(`"use strict";return (${sanitized})`)();
    display.value = Number.isFinite(result) ? result : 'Error';
  } catch {
    display.value = 'Error';
  }
}

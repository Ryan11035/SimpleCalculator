let display = document.getElementById('display');
let currentOperator = null;
let previousValue = null;
let currentValue = null;

function appendToDisplay(value) {
  display.value += value;
}

function setOperator(operator) {
  if (operator === '%') {
    currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && previousValue !== null) {
      previousValue = previousValue * (currentValue / 100);
      display.value = previousValue;
    }
    currentOperator = null;
  } else {
    if (currentOperator !== null && previousValue !== null) {
      calculate(); // 先執行之前的運算
    }
    currentOperator = operator;
    previousValue = parseFloat(display.value);
    display.value = '';
  }
}

function calculate() {
  currentValue = parseFloat(display.value);

  if (currentOperator === null || previousValue === null || isNaN(currentValue)) {
    return; // 如果有任何數值為空或不是數字，則不進行計算
  }

  let result;

  switch (currentOperator) {
    case '+':
      result = previousValue + currentValue;
      break;
    case '-':
      result = previousValue - currentValue;
      break;
    case '*':
      result = previousValue * currentValue;
      break;
    case '/':
      if (currentValue === 0) {
        result = 'Error: 除數不能為零';
      } else {
        result = previousValue / currentValue;
      }
      break;
    default:
      return;
  }

  display.value = result;
  currentOperator = null;
  previousValue = result; // 將這次的結果作為下一次計算的 previousValue
  currentValue = null;
}

function clearDisplay() {
  display.value = '';
  currentOperator = null;
  previousValue = null;
  currentValue = null;
}

function deleteLastNumber() {
  display.value = display.value.slice(0, -1);
}

function showAbout() {
  alert("此計算機由 Ryan11035 開發，請勿轉載或偷取源碼！\n如果你還是把我的源碼偷了，我只會把你當成 Paper :)\n這個計算機我做很久 awa");
}

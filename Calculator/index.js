/* Globals that contain the calculator state. */
let tempNum = 0;
let operator = '';
let displayElem = null;
let historyElem = null;
let calcInputArr = []

function clearHandler() {
  displayElem.innerHTML = '';
  historyElem.innerHTML = '';
  calcInputArr = [];
  tempNum = '';
  console.log(calcInputArr);
}

function numHandler(e) {
  displayElem.innerHTML += this.value;
  historyElem.innerHTML += this.value;
  tempNum += this.value;
}

function operatorHandler() {
  calcInputArr.push(parseInt(tempNum));
  operator = this.value;
  calcInputArr.push(operator);
  displayElem.innerHTML += ' ' + this.value + ' ';
  historyElem.innerHTML += ' ' + this.value + ' ';
  console.log(calcInputArr);
  tempNum = '';
}

function equalsHandler() {
  calcInputArr.push(parseInt(tempNum));
  let isValidArr = validateArr(calcInputArr);
  if(isValidArr === false){
    displayElem.innerHTML = 'Invalid Syntax!';
  }
  else{
    result = calculate(calcInputArr);
    calcInputArr = [];
    displayElem.innerHTML = result;
    tempNum = result;
  }
}

function addClickHandler(selector, handler) {
  document.querySelectorAll(selector).forEach(
    button => button.addEventListener('click', handler)
  )
}
/* Checks the calculation for bad inputs */
function validateArr(arr){ 
  for(let i = 0; i < arr.length; i += 2){ /*Checks every other digit to see if the input is NaN */
    if(Number.isNaN(arr[i])){
      return false;
    }
  }
  return true;
}

function popAt(arr, index) {
  return arr.splice(index, 1)[0]
}

function calculate(arr) {
  const convertedArr = convertCalculationArray(arr);

  let i = 0;
  let j = 0;
  let simpleCalcs = [];

  /* Calculate multiplication and division */
  while (i < convertedArr.length) {

    /* Collect calculations of '*' and '/' in a row  */
    j = i;
    while (j < convertedArr.length && ['*', '/'].includes(convertedArr[j][1])) {
      simpleCalcs.push(popAt(convertedArr, j));
      /* Removed an item from the array so not incrementing j */
    }

    /* Calculate result and place it in the larger calculations array */
    if (simpleCalcs.length !== 0) {
      result = doSimpleCalc(simpleCalcs);
      if (convertedArr.length === 0) {  /* All the calculations were '*' or '/' */
        return result;
      } else if (i === 0) {             /* Calculations were at the beginning */
        convertedArr[i + 1][0] = result;
      } else {                          /* Calculations were at the middle or end */
        convertedArr[i - 1][2] = result;
      }

      simpleCalcs = [];
    }
    i = j + 1;
  }

  /* Calculate addition and subtraction */
  return doSimpleCalc(convertedArr);
}

/* Calculates a string of calculations from left to right, assuming no complicated order of operations. */
function doSimpleCalc(arr) {
  result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = doSingleCalc(arr[i]);
    if (i < arr.length - 1) { /* Put result in next calculation */
      arr[i + 1][0] = result;
    }
  }
  return result;
}

function doSingleCalc(calc){
  switch(calc[1]){
    case '+':
      return calc[0] + calc[2];
    case '-':
      return calc[0] - calc[2];
    case '*':
      return calc[0] * calc[2];
    case '/':
      return parseFloat(calc[0]) / calc[2];
  }
}

// Array should be: [3, '+', 2, '*', 6]
// Converted to:    [[3, '+', 2], [2, '*', 6]]
function convertCalculationArray(arr) {
  const convertedArr = [];
  for (let i = 0; i < arr.length - 2; i += 2) {
    convertedArr.push([arr[i], arr[i + 1], arr[i + 2]]);
  }
  return convertedArr;
}

function init() {
  displayElem = document.querySelector('h3');
  historyElem = document.querySelector('.history');

  addClickHandler('.clear-button', clearHandler)
  addClickHandler('.operator', operatorHandler)
  addClickHandler('.num', numHandler)
  addClickHandler('.equals', equalsHandler)
}

init();
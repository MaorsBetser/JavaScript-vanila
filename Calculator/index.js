let buttons = document.querySelectorAll('button');
let display = document.querySelector('h3');
let history = document.querySelector('.history');
let numOne;
let numTwo;
let operator;


buttons.forEach(button =>{
  button.addEventListener('click',() =>{
    if(button.innerHTML === 'AC'){
      display.innerHTML = '';
      history.innerHTML = '';
      numOne = 0;
      numTwo = 0;
    }
    else if(button.innerHTML === '+' || button.innerHTML === '-' ||
    button.innerHTML === '*' || button.innerHTML === '/' ){
      operator = button.innerHTML;
      numOne = parseInt(display.innerHTML);
      display.innerHTML = '';
      history.innerHTML += ' ' + button.innerHTML + ' ';
      console.log('numOne is ' + numOne + 'and the operator is ' + operator);
    }
    else if (button.innerHTML === '='){
      numTwo = parseInt(display.innerHTML);
      console.log('numTwo is ' + numTwo);
      operate(numOne, operator, numTwo);
    }
    else{
      display.innerHTML += button.innerHTML + '';
      history.innerHTML += button.innerHTML;
    }
  });
});
function operate(x,operator,y){
  let result = 0;
  switch(operator){
    case '+':
      result = x + y;
      display.innerHTML = result;
      break;
    case '-':
      result = x - y;
      display.innerHTML = result;
      break;
    case '*':
      result = x * y;
      display.innerHTML = result;
      break;
    case '/':
      result = x / y;
      display.innerHTML = result;
      break;
  }
}

// Function Declaration - Addition Feature
function add(number1, number2) {
    return number1 + number2;
  }
  
  // Function Declaration - addNumbers Feature
  function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
  }
  
  document.querySelector('#addNumbers').addEventListener('click', addNumbers);
  
  // Function Expression - Subtraction Feature
  const subtract = function(number1, number2) {
    return number1 - number2;
  };
  
  const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
  };
  
  document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
  
  // Arrow Functions - Multiplication Feature
  const multiply = (number1, number2) => number1 * number2;
  
  const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
  };
  
  document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
  
  // Division Feature using a combination of function declaration and arrow function
  const divide = (number1, number2) => {
    if (number2 === 0) {
      return "Cannot divide by zero";
    }
    return number1 / number2;
  };
  
  const divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
  };
  
  document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
  
  // Selection Structures - Get Total Due button event listener
  document.querySelector('#getTotalDue').addEventListener('click', () => {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let total;
    if (document.querySelector('#membership').checked) {
      total = subtotal * 0.8; // Applying 20% discount
    } else {
      total = subtotal;
    }
    document.querySelector('#total').textContent = `Total Due: $${total.toFixed(2)}`;
  });
  
  // Array Methods - Functional Programming
  let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  
  document.querySelector('#array').textContent = numbersArray;
  
  document.querySelector('#odds').textContent = numbersArray.filter(number => number % 2 !== 0);
  
  document.querySelector('#evens').textContent = numbersArray.filter(number => number % 2 === 0);
  
  document.querySelector('#sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number);
  
  document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2);
  
  document.querySelector('#sumOfMultiplied').textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
  
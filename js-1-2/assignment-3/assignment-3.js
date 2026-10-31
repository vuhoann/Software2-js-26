let num1 = parseInt(prompt("Enter number 1"));
let num2 = parseInt(prompt("Enter number 2"));
let num3 = parseInt(prompt("Enter number 3"));
document.querySelector('#target').innerHTML = `Sum: ${num1+num2+num3}<br> Product: ${num1*num2*num3}<br> Average: ${(num1+num2+num3)/3}`

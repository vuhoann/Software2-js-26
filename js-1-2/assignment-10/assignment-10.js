'use strict'
let num = parseInt(prompt('Enter a number of dice roll'));
let eye = parseInt(prompt('Enter a sum of the eye number'));
let count = 0;
for (let i=0; i <10000 ; i++){
    let sum = 0;
    for (let i=0; i<num ; i++){
        sum += Math.floor(Math.random() * 6) + 1
        };
    if(sum === eye){
        count += 1
    };
};
let result = (count/10000)*100;
document.querySelector('#target').innerHTML = `Probability to get sum ${eye} with ${num} dice is ${result}%`
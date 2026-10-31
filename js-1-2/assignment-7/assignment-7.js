'use strict'
let roll = parseInt(prompt('Enter a number of dice rolls'));
let dice = 0;
for(let i = 0; i < roll; i++) {
    dice += Math.floor(Math.random() * 6) + 1
}
document.querySelector('#target').innerHTML = `${dice}`;
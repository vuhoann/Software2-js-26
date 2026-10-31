'use strict';
let name = prompt('Enter your name')
let num = Math.floor(Math.random() * 4)+1;
if (num === 1){
    document.querySelector('#target').innerHTML = `${name}, you are Gryffindor.`
} else if( num === 2){
    document.querySelector('#target').innerHTML = `${name}, you are Slytherin.`
}else if( num === 3){
    document.querySelector('#target').innerHTML = `${name}, you are Hufflepuff.`
}else{
    document.querySelector('#target').innerHTML = `${name}, you are Ravenclaw.`
};

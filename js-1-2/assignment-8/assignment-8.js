'use strict'
let start = prompt('Enter start year');
let end = prompt('Enter end year');
for (let i = start ; i <= end ; i++){
    if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0){
        document.querySelector('#target').innerHTML += `<li>${i}</li>`
    }
}
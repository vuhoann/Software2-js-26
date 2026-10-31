'use strict';
let num = parseInt(prompt('Enter a number'));
let a = 0;
for (let i = 0; i <= num ; i++){
    if (num % i === 0 ){
        a++
    };
};
console.log(a)
if (a === 2){
    document.querySelector('#target').innerHTML =`${num} is a prime number.`

}else{
    document.querySelector('#target').innerHTML =`${num} is not a prime number.`
}
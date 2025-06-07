/**
 * 🧠 Day 07 - Count the Number of Digits (Math Only)
 * 
 * Problem:
 * Count digits in a number using math (no string conversion)
 */

const countDigits = (no)=>{
    let digits = 0
    let number = no
    do{
        number = (number/10) | 0
        digits++
    }while(number>0)
    return digits
}

// 🧪 Test Cases
console.log(countDigits(0));         // 1
console.log(countDigits(7));         // 1
console.log(countDigits(12345));     // 5
console.log(countDigits(1000000));   // 7
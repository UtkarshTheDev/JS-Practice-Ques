/**
 * 🧠 Day 07 - Count the Number of Digits (Math Only)
 * 
 * Problem:
 * Count digits in a number using math (no string conversion)
 */

const countDigits = (no)=>{
    if (no === 0) return 1;
    let digits = 0
    do{
        no = (no/10) | 0
        digits++
    }while(no>0)
    return digits
}

// 🧪 Test Cases
console.log(countDigits(0));         // 1
console.log(countDigits(7));         // 1
console.log(countDigits(12345));     // 5
console.log(countDigits(1000000));   // 7
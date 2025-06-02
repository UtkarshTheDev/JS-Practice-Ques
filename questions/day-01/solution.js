/**
 * 🧠 Day 01 - Reverse a String
 * 
 * Problem:
 * Write a function that reverses a given string without using built-in reverse().
 * 
 * Example:
 * reverseString("utkarsh") ➞ "hsraktu"
 * 
 * Constraints:
 * - No use of built-in reverse()
 * - Use both iterative and recursive methods
 */

const reverseString = (str) => {
  // Iterative Approach Done
    arrStr = str.split("")
    revArrStr = []
    for (let i=arrStr.length - 1;i>=0;i--){
      revArrStr.push(arrStr[i])
    }
     revStr = revArrStr.join("")
     return revStr
}

console.log(reverseString("Hello"))
/**
 * 🧠 Day 02 - Check for Anagram
 * 
 * Problem:
 * Check if two strings are anagrams of each other.
 * 
 * Constraints:
 * - Ignore case
 * - Ignore spaces and punctuation
 */

const cleanStr = (str)=>{
    let cleanStr = str.toLowerCase().split(""). sort().join("")
    return cleanStr
}

const isAnagram = (str1,str2)=>{
    if(cleanStr(str1)==cleanStr(str2)) return true;
else return false;
}

console.log(isAnagram("listen", "silent"));               // true
console.log(isAnagram("Hello", "Olelh"));                 // true
console.log(isAnagram("School master", "The classroom")); // true
console.log(isAnagram("Hi there", "Bye there"));          // false

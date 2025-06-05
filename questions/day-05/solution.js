/**
 * 🧠 Day 05 - First Non-Repeating Character
 * 
 * Problem:
 * Find and return the first character that does not repeat in the string.
 * If none exist, return null.
 */

const firstNonRepeatingChar = (str)=>{
    let freq = {}
    for(let i=0; i<str.length;i++){
        if(str[i] in freq === false){
            let count=0
            for(let j=0; j<str.length; j++){
               if (str[i] === str[j]){
                count++
                }
            }
            let character = str[i]
            freq = {...freq, [character]:count}
        }
    }

    
    const firstNonRepatingChar = Object.keys(freq).find(key => freq[key] === 1);
    if (firstNonRepatingChar === undefined) return null;

    return firstNonRepatingChar;

}

// 🧪 Test Cases
console.log(firstNonRepeatingChar("leetcode"));       // "l"
console.log(firstNonRepeatingChar("aabbccddeeff"));   // null
console.log(firstNonRepeatingChar("aabbc"));          // "c"
console.log(firstNonRepeatingChar(""));               // null

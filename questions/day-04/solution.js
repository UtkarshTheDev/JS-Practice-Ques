/**
 * 🧠 Day 04 - String Compression (Run Length Encoding)
 * 
 * Problem:
 * Compress string using character counts. Return original if compression isn't shorter.
 */

const compressStr = (str)=>{
    let compressedStr = ""
    let count = 1
    for(let i= 0; i < str.length; i++){

        
        if (str[i] == str[i+1] && i+1 < str.length){
            count++
        }else{
          compressedStr += str[i] + count
        count = 1
        }
    }
    if(compressedStr.length <= str.length) return compressedStr
    else return str
}

// 🧪 Test Cases
console.log(compressStr("aabcccccaaa")); // "a2b1c5a3"
console.log(compressStr("abcdef"));      // "abcdef"
console.log(compressStr("aaAAaa"));      // "a2A2a2"
console.log(compressStr(""));            // ""

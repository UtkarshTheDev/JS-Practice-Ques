/**
 * 🧠 Day 03 - Capitalize the First Letter of Each Word
 * 
 * Problem:
 * Capitalize the first letter of each word in the input string.
 * 
 * Constraints:
 * - Use only toUpperCase() and toLowerCase()
 * - No external libraries
 */

const capitalizeWords = (str) => {
    let words = str.split(" ")
    for(let i=0; i < words.length; i++){
        let word = words[i]
        if (word){
           word = word.toLowerCase()
           let capitalize = word[0].toUpperCase()
        
           word = word.replace(word[0],capitalize)
           words[i] = word
        }
    }
    str = words.join(" ") 
    return str
        
}

// 🧪 Test Cases
console.log(capitalizeWords("hello world"));         // "Hello World"
console.log(capitalizeWords("javaScript is fun"));   // "Javascript Is Fun"
console.log(capitalizeWords("UTKARSH tiwari!"));     // "Utkarsh Tiwari!"
console.log(capitalizeWords(""));                    // ""
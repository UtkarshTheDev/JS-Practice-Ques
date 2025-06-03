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
    console.log(`🧠 THOUGHT PROCESS:`);
    console.log(`   Input: "${str}"`);
    console.log(`   Approach: Split → Process → Join`);
    console.log(`   Why this works: Each word gets processed individually\n`);
    
    // Step 1: Split string into individual words
    let words = str.split(" ");
    
    // Step 2: Process each word in the array
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        
        // Skip empty strings (handles multiple spaces between words)
        if (word){
            // Convert to lowercase first, then capitalize first letter
            word = word.toLowerCase();
            let capitalize = word[0].toUpperCase();
            
            // Replace first character with capitalized version
            word = word.replace(word[0], capitalize);
            
            // Update the word in the array
            words[i] = word;
        }
    }
    
    // Step 3: Join words back into a single string
    str = words.join(" ");
    
    console.log(`✅ RESULT: "${str}"`);
    console.log(`💡 KEY INSIGHT: Empty word check prevents undefined errors`);
    console.log(`---`);
    
    return str;
}

// 🧪 Test Cases
console.log(capitalizeWords("hello world"));         // "Hello World"
console.log(capitalizeWords("javaScript is fun"));   // "Javascript Is Fun"
console.log(capitalizeWords("UTKARSH tiwari!"));     // "Utkarsh Tiwari!"
console.log(capitalizeWords(""));                    // ""
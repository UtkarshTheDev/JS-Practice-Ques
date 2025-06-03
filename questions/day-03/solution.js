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
    /**
     * 🧠 THOUGHT PROCESS:
     * We need to capitalize the first letter of each word while keeping the rest lowercase.
     * The challenge is handling edge cases like multiple spaces or empty strings.
     * 
     * 📋 APPROACH:
     * 1. Split the string by spaces to get individual words
     * 2. Process each word: lowercase it, then capitalize first letter
     * 3. Join the processed words back into a string
     * 
     * 💡 WHY THIS WORKS:
     * - split(" ") breaks the string at spaces, giving us an array of words
     * - Processing each word individually ensures proper capitalization
     * - Checking for empty strings prevents undefined errors from multiple spaces
     */
    
    // Step 1: Split string into individual words
    let words = str.split(" ");
    
    // Step 2: Process each word in the array
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        
        // Skip empty strings (handles multiple spaces between words)
        // This prevents undefined errors when accessing word[0]
        if (word){
            // Convert entire word to lowercase first for consistency
            word = word.toLowerCase();
            
            // Get the first character and make it uppercase
            let capitalize = word[0].toUpperCase();
            
            // Replace the first character with its capitalized version
            word = word.replace(word[0], capitalize);
            
            // Update the word in the original array
            words[i] = word;
        }
    }
    
    // Step 3: Join words back into a single string with spaces
    // This preserves the original spacing structure
    str = words.join(" ");
    
    return str;
}

// 🧪 Test Cases
console.log(capitalizeWords("hello world"));         // "Hello World"
console.log(capitalizeWords("javaScript is fun"));   // "Javascript Is Fun"
console.log(capitalizeWords("UTKARSH tiwari!"));     // "Utkarsh Tiwari!"
console.log(capitalizeWords(""));                    // ""
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
    console.log(`🔍 INPUT: "${str}"`);
    console.log("📝 APPROACH: Split string → Process each word → Join back");
    
    // Step 1: Split the string into words
    let words = str.split(" ");
    console.log(`📊 SPLIT RESULT: [${words.map(w => `"${w}"`).join(', ')}] (${words.length} elements)`);
    
    // Step 2: Process each word individually
    console.log("\n🔄 PROCESSING EACH WORD:");
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        console.log(`  [${i}] Processing: "${word}" (length: ${word.length})`);
        
        // Check if word is not empty (handles multiple spaces)
        if (word){
            console.log(`    ✅ Word is valid, proceeding with capitalization`);
            
            // Convert entire word to lowercase first
            word = word.toLowerCase();
            console.log(`    📝 Lowercased: "${word}"`);
            
            // Get the first character and capitalize it
            let capitalize = word[0].toUpperCase();
            console.log(`    🔤 First char "${word[0]}" → capitalized: "${capitalize}"`);
            
            // Replace first character with capitalized version
            word = word.replace(word[0], capitalize);
            console.log(`    ✨ Final word: "${word}"`);
            
            // Update the array
            words[i] = word;
        } else {
            console.log(`    ⚠️  Empty word detected, skipping...`);
        }
    }
    
    // Step 3: Join words back into a string
    console.log(`\n📋 WORDS ARRAY AFTER PROCESSING: [${words.map(w => `"${w}"`).join(', ')}]`);
    str = words.join(" ");
    console.log(`🎯 FINAL RESULT: "${str}"`);
    console.log("=" .repeat(50));
    
    return str;
}

// 🧪 Test Cases
console.log(capitalizeWords("hello world"));         // "Hello World"
console.log(capitalizeWords("javaScript is fun"));   // "Javascript Is Fun"
console.log(capitalizeWords("UTKARSH tiwari!"));     // "Utkarsh Tiwari!"
console.log(capitalizeWords(""));                    // ""
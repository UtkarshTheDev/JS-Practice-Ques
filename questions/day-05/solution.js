
/**
 * 🧠 Day 05 - First Non-Repeating Character
 * 
 * Problem:
 * Find and return the first character that does not repeat in the string.
 * If none exist, return null.
 * 
 * 💡 DEEP THOUGHT PROCESS:
 * 
 * 🔍 UNDERSTANDING THE PROBLEM:
 * We need to find the FIRST character that appears exactly once in the string.
 * Key insight: "first" means the leftmost character when reading left to right.
 * 
 * Example: "leetcode"
 * - 'l' appears once → this is our answer (first non-repeating)
 * - 'e' appears 3 times → repeating
 * - 't' appears once → but 'l' comes first
 * 
 * 🎯 APPROACH COMPARISON:
 * 
 * APPROACH 1 (Your Original - O(n²)):
 * - For each character, count its occurrences by scanning entire string
 * - Store counts in frequency object
 * - Find first character with count = 1
 * - Time: O(n²), Space: O(n)
 * 
 * APPROACH 2 (Optimized - O(n)):
 * - Single pass to count all character frequencies
 * - Second pass to find first character with frequency = 1
 * - Time: O(n), Space: O(n)
 * 
 * 📋 ALGORITHM STEPS (Optimized):
 * 1. Build frequency map in single pass
 * 2. Iterate through original string to find first char with freq = 1
 * 3. Return that character or null if none found
 */

const firstNonRepeatingChar = (str) => {
    console.log(`🔍 Processing string: "${str}"`);
    
    // 🚨 EDGE CASE: Handle empty string
    if (str.length === 0) {
        console.log("📝 Empty string detected, returning null");
        return null;
    }
    
    /**
     * 📊 STEP 1: BUILD FREQUENCY MAP
     * 
     * We count how many times each character appears in the string.
     * This is more efficient than your original approach because we only
     * scan the string once instead of scanning for each unique character.
     * 
     * Time Complexity: O(n) - single pass through string
     * Space Complexity: O(k) where k = unique characters
     */
    console.log("📊 Step 1: Building frequency map...");
    const freqMap = {};
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        // If character exists in map, increment count; otherwise set to 1
        freqMap[char] = (freqMap[char] || 0) + 1;
        
        console.log(`   Character '${char}' now has count: ${freqMap[char]}`);
    }
    
    console.log("📋 Final frequency map:", freqMap);
    
    /**
     * 🎯 STEP 2: FIND FIRST NON-REPEATING CHARACTER
     * 
     * Now we iterate through the ORIGINAL string (not the frequency map)
     * to maintain the order and find the FIRST character with frequency = 1.
     * 
     * Why iterate through original string instead of Object.keys(freqMap)?
     * Because Object.keys() doesn't guarantee order in older JS versions,
     * and we need to find the FIRST occurrence in the original sequence.
     * 
     * Time Complexity: O(n) - second pass through string
     */
    console.log("🎯 Step 2: Finding first non-repeating character...");
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        console.log(`   Checking '${char}' at position ${i}, frequency: ${freqMap[char]}`);
        
        // Found first character that appears exactly once
        if (freqMap[char] === 1) {
            console.log(`✅ Found first non-repeating character: '${char}' at position ${i}`);
            return char;
        }
    }
    
    // 🚫 No non-repeating character found
    console.log("❌ No non-repeating character found, returning null");
    return null;
}

/**
 * 🔄 COMPARISON: Your Original vs Optimized Approach
 * 
 * YOUR APPROACH (O(n²)):
 * ➕ Pros: Easy to understand, straightforward logic
 * ➖ Cons: Inefficient for large strings, nested loops
 * 
 * OPTIMIZED APPROACH (O(n)):
 * ➕ Pros: Better time complexity, scalable for large inputs
 * ➕ Pros: Clear separation of concerns (count then find)
 * ➖ Cons: Requires two passes, slightly more complex
 * 
 * 📈 PERFORMANCE DIFFERENCE:
 * For string length n=1000:
 * - Your approach: ~1,000,000 operations
 * - Optimized approach: ~2,000 operations
 */

// 🧪 Test Cases with Detailed Logging
console.log("🧪 Running Test Cases:\n");

console.log("Test 1:");
console.log("Expected: 'l', Got:", firstNonRepeatingChar("leetcode"));
console.log(""); // Empty line for readability

console.log("Test 2:");
console.log("Expected: null, Got:", firstNonRepeatingChar("aabbccddeeff"));
console.log("");

console.log("Test 3:");
console.log("Expected: 'c', Got:", firstNonRepeatingChar("aabbc"));
console.log("");

console.log("Test 4:");
console.log("Expected: null, Got:", firstNonRepeatingChar(""));
console.log("");

/**
 * 💭 KEY INSIGHTS FOR YOUR GROWTH:
 * 
 * 🎯 ALGORITHM OPTIMIZATION:
 * - Always consider time complexity when solving problems
 * - Look for opportunities to reduce nested loops
 * - Sometimes trading space for time is worth it
 * 
 * 📝 CODE DOCUMENTATION:
 * - Explain WHY you chose an approach, not just WHAT the code does
 * - Include time/space complexity analysis
 * - Add examples to clarify complex logic
 * 
 * 🧪 TESTING MINDSET:
 * - Think about edge cases upfront
 * - Add logging to understand algorithm flow
 * - Test with various input sizes
 * 
 * 🔄 REFACTORING SKILLS:
 * - First make it work, then make it efficient
 * - Consider alternative approaches before settling
 * - Balance readability with performance
 */

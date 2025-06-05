
/**
 * 🧠 Day 04 - String Compression (Run Length Encoding)
 * 
 * Problem:
 * Compress string using character counts. Return original if compression isn't shorter.
 * 
 * 💡 THOUGHT PROCESS:
 * Run-length encoding compresses consecutive identical characters into "character + count" format.
 * For example: "aaa" becomes "a3", "bb" becomes "b2"
 * 
 * 🔍 APPROACH:
 * 1. Iterate through each character in the string
 * 2. Count consecutive occurrences of the same character
 * 3. When we find a different character (or reach the end), add "character + count" to result
 * 4. Compare compressed length with original - return shorter one
 * 
 * 📋 ALGORITHM STEPS:
 * - Use a counter to track consecutive identical characters
 * - Compare current character with next character
 * - When they differ (or we reach end), append character + count to result
 * - Reset counter for the next group of characters
 */

const compressStr = (str) => {
    // 🚨 EDGE CASE: Handle empty string immediately
    if (str.length === 0) return str;
    
    let compressedStr = "";  // Our result string that will store compressed format
    let count = 1;           // Counter for consecutive identical characters (starts at 1)
    
    /**
     * 🔄 MAIN LOGIC LOOP:
     * We iterate through each character and compare it with the next one.
     * This approach allows us to count consecutive characters efficiently.
     */
    for (let i = 0; i < str.length; i++) {
        
        /**
         * 🔍 CHARACTER COMPARISON:
         * Check if current character equals the next character AND we're not at the end
         * 
         * str[i] == str[i+1]: Are current and next characters the same?
         * i+1 < str.length: Make sure we don't go out of bounds
         * 
         * WHY both conditions?
         * - First condition: Identifies consecutive characters
         * - Second condition: Prevents accessing undefined when i+1 exceeds array length
         */
        if (str[i] == str[i + 1] && i + 1 < str.length) {
            // ➕ FOUND CONSECUTIVE CHARACTER: Increment count and continue
            count++;
        } else {
            /**
             * 🏁 END OF CONSECUTIVE SEQUENCE:
             * Either we found a different character, or we reached the end of string.
             * Time to add this character group to our compressed result.
             * 
             * Format: character + count (e.g., "a3", "b1", "c5")
             */
            compressedStr += str[i] + count;
            
            // 🔄 RESET: Prepare counter for next character group
            count = 1;
        }
    }
    
    /**
     * 📏 LENGTH COMPARISON & DECISION:
     * Run-length encoding is only beneficial when it makes the string shorter.
     * If compressed version is longer or equal, return original string.
     * 
     * Example where compression helps: "aabcccccaaa" → "a2b1c5a3" (11 chars → 8 chars)
     * Example where compression hurts: "abcdef" → "a1b1c1d1e1f1" (6 chars → 12 chars)
     */
    if (compressedStr.length < str.length) {
        return compressedStr;  // ✅ Compression was beneficial
    } else {
        return str;            // ❌ Original was shorter or equal, return it
    }
}

// 🧪 Test Cases
console.log(compressStr("aabcccccaaa")); // "a2b1c5a3" - compression helps (11→8 chars)
console.log(compressStr("abcdef"));      // "abcdef" - original shorter (6 vs 12 chars)
console.log(compressStr("aaAAaa"));      // "a2A2a2" - compression helps, case-sensitive
console.log(compressStr(""));            // "" - empty string edge case

/**
 * 🔧 IMPROVEMENTS MADE:
 * 1. Added explicit empty string check at the beginning
 * 2. Changed condition from <= to < for more precise compression logic
 * 3. Added comprehensive comments explaining each step
 * 
 * 💭 KEY INSIGHTS FOR BEGINNERS:
 * - Always handle edge cases (empty strings, single characters)
 * - Boundary checking is crucial when accessing array elements
 * - Compare efficiency: only use compression if it actually saves space
 * - Loop invariant: count always represents consecutive identical characters seen so far
 */


/**
 * 🧠 Day 02 - Check for Anagram
 * 
 * Problem:
 * Check if two strings are anagrams of each other.
 * 
 * Constraints:
 * - Ignore case
 * - Ignore spaces and punctuation
 * 
 * 💡 THOUGHT PROCESS:
 * 1. Two strings are anagrams if they contain the same characters with same frequency
 * 2. We need to clean both strings (remove spaces, convert to lowercase)
 * 3. Sort the characters and compare - if they match, it's an anagram
 * 
 * 🔍 APPROACH:
 * - Create a helper function to clean and sort strings
 * - Compare the cleaned versions of both strings
 * - Return true if they match, false otherwise
 */

/**
 * Helper function to clean and sort a string
 * @param {string} str - Input string to clean
 * @returns {string} - Cleaned and sorted string
 */
const cleanStr = (str) => {
    console.log(`🔧 Cleaning string: "${str}"`);
    
    // Step 1: Convert to lowercase
    let lowercased = str.toLowerCase();
    console.log(`   ↳ Lowercase: "${lowercased}"`);
    
    // Step 2: Remove spaces and punctuation (keep only letters)
    let lettersOnly = lowercased.replace(/[^a-z]/g, '');
    console.log(`   ↳ Letters only: "${lettersOnly}"`);
    
    // Step 3: Split into array, sort, then join back
    let sorted = lettersOnly.split('').sort().join('');
    console.log(`   ↳ Sorted: "${sorted}"`);
    console.log('');
    
    return sorted;
}

/**
 * Main function to check if two strings are anagrams
 * @param {string} str1 - First string
 * @param {string} str2 - Second string
 * @returns {boolean} - True if anagram, false otherwise
 */
const isAnagram = (str1, str2) => {
    console.log(`🎯 Checking if "${str1}" and "${str2}" are anagrams...`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    
    // Clean and sort both strings
    const cleaned1 = cleanStr(str1);
    const cleaned2 = cleanStr(str2);
    
    // Compare the cleaned strings
    const result = cleaned1 === cleaned2;
    
    console.log(`📊 Comparison: "${cleaned1}" === "${cleaned2}" → ${result}`);
    console.log(`✅ Result: ${result ? 'ANAGRAM!' : 'NOT an anagram'}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    return result;
}

// 🧪 TEST CASES
console.log('🚀 Starting Anagram Tests...\n');

console.log('Test 1:');
console.log(isAnagram("listen", "silent"));

console.log('Test 2:');
console.log(isAnagram("Hello", "Olelh"));

console.log('Test 3:');
console.log(isAnagram("School master", "The classroom"));

console.log('Test 4:');
console.log(isAnagram("Hi there", "Bye there"));

console.log('🎉 All tests completed!');

/**
 * 📚 LEARNING NOTES FOR BEGINNERS:
 * 
 * 1. String Methods Used:
 *    - toLowerCase(): Converts string to lowercase
 *    - replace(/[^a-z]/g, ''): Removes non-alphabetic characters using regex
 *    - split(''): Converts string to array of characters
 *    - sort(): Sorts array alphabetically
 *    - join(''): Converts array back to string
 * 
 * 2. Why This Works:
 *    - If two words are anagrams, they have same letters
 *    - Sorting puts letters in same order for comparison
 *    - Example: "listen" → "eilnst", "silent" → "eilnst" (match!)
 * 
 * 3. Edge Cases Handled:
 *    - Different cases: "Hello" vs "hello"
 *    - Spaces: "School master" vs "The classroom"
 *    - Punctuation: Automatically removed by regex
 * 
 * 4. Time Complexity: O(n log n) due to sorting
 *    Space Complexity: O(n) for storing cleaned strings
 */

/**
 * 🧠 Day 02 - Check for Anagram
 * 
 * Problem: Check if two strings are anagrams of each other.
 * 
 * 💡 THOUGHT PROCESS:
 * 1. Two strings are anagrams if they contain the same characters with same frequency
 * 2. Clean both strings (remove spaces, convert to lowercase)
 * 3. Sort the characters and compare - if they match, it's an anagram
 * 
 * 🔍 APPROACH:
 * - Create helper function to clean and sort strings
 * - Compare cleaned versions of both strings
 */

const cleanStr = (str) => {
    // Convert to lowercase, remove non-letters, sort characters
    return str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
}

const isAnagram = (str1, str2) => {
    console.log(`Checking: "${str1}" vs "${str2}"`);

    const cleaned1 = cleanStr(str1);
    const cleaned2 = cleanStr(str2);

    const result = cleaned1 === cleaned2;
    console.log(`Result: ${result ? 'ANAGRAM ✅' : 'NOT anagram ❌'}\n`);

    return result;
}

// Test cases
console.log(isAnagram("listen", "silent"));               // true
console.log(isAnagram("Hello", "Olelh"));                 // true
console.log(isAnagram("School master", "The classroom")); // true
console.log(isAnagram("Hi there", "Bye there"));          // false

/**
 * 📝 KEY INSIGHT:
 * If two words are anagrams, sorting their letters gives the same result.
 * Example: "listen" → "eilnst", "silent" → "eilnst" ✅
 */
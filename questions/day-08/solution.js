
/**
 * 🧠 Day 08 - Most Frequent Element in Array
 * 
 * 🎯 PROBLEM UNDERSTANDING:
 * Given an array of numbers, find the element that appears most frequently.
 * If there's a tie, return the one that appears first in the array.
 * 
 * Example: [1, 3, 2, 1, 4, 1, 3, 3, 3]
 * - 1 appears 3 times
 * - 3 appears 4 times ← WINNER (most frequent)
 * - 2 appears 1 time
 * - 4 appears 1 time
 * 
 * 💡 DEEP THOUGHT PROCESS FOR BEGINNERS:
 * 
 * 🤔 FIRST THOUGHTS:
 * How do we count things? We need to keep track of how many times each number appears.
 * Think of it like counting votes in an election - we need a tally sheet!
 * 
 * 📊 APPROACH COMPARISON:
 * 
 * ❌ NAIVE APPROACH (O(n²) - Too Slow):
 * For each element, scan the entire array to count how many times it appears.
 * This is like counting votes by going through all ballots for each candidate separately.
 * 
 * ✅ FREQUENCY COUNTER PATTERN (O(n) - Efficient):
 * 1. Go through array once and count frequencies (like making a tally sheet)
 * 2. Go through array again to find which element has highest frequency
 * This is like counting all votes once, then checking the tally sheet.
 * 
 * 🔍 WHY FREQUENCY COUNTER PATTERN?
 * - It's a fundamental pattern in programming
 * - Used in: caching systems, analytics, rate limiting, search optimization
 * - Time complexity: O(n) instead of O(n²)
 * - Space complexity: O(k) where k = unique elements
 * 
 * Pattern: Frequency Counter
 * Use case: Logging, caching, search optimization
 */

const mostFrequentElement = (arr) => {
    console.log(`🔍 Starting analysis of array: [${arr.join(', ')}]`);
    console.log(`📏 Array length: ${arr.length}`);
    
    // 🚨 EDGE CASE HANDLING - Always check for empty inputs!
    if (!arr.length) {
        console.log("⚠️  EDGE CASE: Empty array detected");
        console.log("📤 Returning: null (no elements to count)");
        return null;
    }
    
    /**
     * 📊 STEP 1: BUILD FREQUENCY MAP
     * 
     * 💭 BEGINNER EXPLANATION:
     * Imagine you have a box of colored balls and want to count each color.
     * You could make a list like: "Red: 3, Blue: 5, Green: 2"
     * That's exactly what we're doing with numbers!
     * 
     * 🛠️ HOW MAPS WORK:
     * Map is like a super-powered object that can store key-value pairs.
     * Key = the number we're counting
     * Value = how many times we've seen it
     * 
     * 📈 WHY USE MAP INSTEAD OF OBJECT?
     * - Maps preserve insertion order (guaranteed)
     * - Better performance for frequent additions/deletions
     * - Can use any data type as keys (not just strings)
     * - Has built-in methods like .get(), .set(), .has()
     */
    
    console.log("\n📊 STEP 1: Building frequency map...");
    console.log("💡 Think of this as making a tally sheet for each number");
    
    const freqMap = new Map();
    
    // 🔄 ITERATION EXPLANATION:
    // We use 'for...of' loop because it's cleaner and more readable
    // Alternative: for(let i = 0; i < arr.length; i++) would work too
    
    for (const num of arr) {
        console.log(`   📝 Processing number: ${num}`);
        
        /**
         * 🔑 KEY CONCEPT - The Counting Logic:
         * 
         * freqMap.get(num) returns the current count for 'num'
         * If 'num' doesn't exist in map, .get() returns undefined
         * 
         * (freqMap.get(num) || 0) means:
         * - If map has the number, use its current count
         * - If map doesn't have it, use 0 as starting count
         * 
         * Then we add 1 to increment the count
         * 
         * This is equivalent to:
         * if (freqMap.has(num)) {
         *     freqMap.set(num, freqMap.get(num) + 1);
         * } else {
         *     freqMap.set(num, 1);
         * }
         */
        const currentCount = freqMap.get(num) || 0;
        const newCount = currentCount + 1;
        freqMap.set(num, newCount);
        
        console.log(`      🔢 Count for ${num}: ${currentCount} → ${newCount}`);
    }
    
    console.log("\n📋 Final frequency map:");
    for (const [num, count] of freqMap) {
        console.log(`   ${num} appears ${count} time(s)`);
    }
    
    /**
     * 🎯 STEP 2: FIND ELEMENT WITH HIGHEST FREQUENCY
     * 
     * 💭 BEGINNER EXPLANATION:
     * Now we have our tally sheet, we need to find who got the most votes!
     * We'll go through our original array (not the map) to maintain order.
     * 
     * 🤔 WHY ITERATE THROUGH ORIGINAL ARRAY INSTEAD OF MAP?
     * The problem says "if there's a tie, return the one that appears first"
     * 
     * Example: [1, 3, 1, 3] - both 1 and 3 appear twice
     * Since 1 appears first in the original array, we should return 1
     * 
     * If we iterate through the map, we might lose this "first appearance" information
     */
    
    console.log("\n🎯 STEP 2: Finding the most frequent element...");
    console.log("💡 We'll check each element and see which has the highest frequency");
    
    let maxFreq = 0;                    // Tracks the highest frequency found so far
    let mostFrequent = arr[0];          // Our current "winner" (starts with first element)
    
    console.log(`🏁 Starting with: element=${mostFrequent}, frequency=${freqMap.get(mostFrequent)}`);
    
    /**
     * 🔄 THE SEARCH PROCESS:
     * We go through each element in the original array and check:
     * 1. What's its frequency? (look it up in our map)
     * 2. Is this frequency higher than our current maximum?
     * 3. If yes, update our "winner"
     * 
     * 📝 NOTE: We could optimize by only checking unique elements,
     * but this approach is clearer for beginners and the performance
     * difference is negligible for most practical purposes.
     */
    
    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        const currentFreq = freqMap.get(currentElement);
        
        console.log(`   🔍 Position ${i}: element=${currentElement}, frequency=${currentFreq}`);
        
        /**
         * 🏆 COMPARISON LOGIC:
         * We only update our winner if the current frequency is STRICTLY GREATER
         * than maxFreq. This ensures that in case of ties, we keep the first one.
         * 
         * Example: [1, 3, 1, 3]
         * - At position 0: 1 has freq 2, maxFreq 0 → 1 becomes winner
         * - At position 1: 3 has freq 2, maxFreq 2 → no change (tie, keep first)
         * - At position 2: 1 has freq 2, maxFreq 2 → no change
         * - At position 3: 3 has freq 2, maxFreq 2 → no change
         * Result: 1 (the first element in the tie)
         */
        
        if (currentFreq > maxFreq) {
            console.log(`      🎉 NEW WINNER! ${currentElement} (freq: ${currentFreq}) beats previous max ${maxFreq}`);
            maxFreq = currentFreq;
            mostFrequent = currentElement;
        } else if (currentFreq === maxFreq) {
            console.log(`      🤝 TIE! ${currentElement} has same frequency as current winner, keeping ${mostFrequent}`);
        } else {
            console.log(`      📉 ${currentElement} (freq: ${currentFreq}) doesn't beat current max ${maxFreq}`);
        }
    }
    
    console.log(`\n✅ FINAL RESULT: ${mostFrequent} appears ${maxFreq} times`);
    console.log(`📤 Returning: ${mostFrequent}\n`);
    
    return mostFrequent;
}

/**
 * 🧪 COMPREHENSIVE TEST CASES WITH DETAILED ANALYSIS
 * 
 * Each test case demonstrates different scenarios:
 */

console.log("=" .repeat(60));
console.log("🧪 TEST CASE 1: Mixed frequencies with clear winner");
console.log("=" .repeat(60));
console.log("Expected: 3 (appears 4 times, more than any other)");
console.log("Result:", mostFrequentElement([1, 3, 2, 1, 4, 1, 3, 3, 3]));

console.log("\n" + "=" .repeat(60));
console.log("🧪 TEST CASE 2: Multiple elements with same frequency");
console.log("=" .repeat(60));
console.log("Expected: 4 (appears 3 times, same as 5, but 4 comes first)");
console.log("Result:", mostFrequentElement([4, 4, 4, 5, 5, 5, 6]));

console.log("\n" + "=" .repeat(60));
console.log("🧪 TEST CASE 3: All elements appear once");
console.log("=" .repeat(60));
console.log("Expected: 1 (all have frequency 1, return first)");
console.log("Result:", mostFrequentElement([1, 2, 3, 4]));

console.log("\n" + "=" .repeat(60));
console.log("🧪 TEST CASE 4: Edge case - empty array");
console.log("=" .repeat(60));
console.log("Expected: null (no elements to count)");
console.log("Result:", mostFrequentElement([]));

/**
 * 💭 KEY LEARNING POINTS FOR BEGINNERS:
 * 
 * 🎯 ALGORITHM PATTERNS:
 * - Frequency Counter: Count occurrences of elements
 * - Two-pass algorithm: First pass to gather data, second to find answer
 * - Map/HashMap usage: Efficient key-value storage and retrieval
 * 
 * 🔍 PROBLEM-SOLVING APPROACH:
 * 1. Understand the problem completely (what input, what output, edge cases)
 * 2. Think of naive solution first (even if inefficient)
 * 3. Identify patterns and optimize
 * 4. Handle edge cases
 * 5. Test thoroughly
 * 
 * 📊 COMPLEXITY ANALYSIS:
 * - Time: O(n) - we scan the array twice, but that's still linear
 * - Space: O(k) where k = number of unique elements in array
 * 
 * 🛠️ JAVASCRIPT CONCEPTS USED:
 * - Map data structure and its methods (.get, .set, .has)
 * - for...of loops vs traditional for loops
 * - Logical OR operator (||) for default values
 * - Array destructuring in for...of with Map.entries()
 * 
 * 🚀 REAL-WORLD APPLICATIONS:
 * - Web analytics: Finding most visited pages
 * - E-commerce: Most popular products
 * - Social media: Trending hashtags
 * - System monitoring: Most frequent error types
 * - Gaming: Most used characters/items
 * 
 * 💡 VARIATIONS TO PRACTICE:
 * - Find top K frequent elements
 * - Find least frequent element
 * - Find all elements with same frequency as most frequent
 * - Sort array by frequency
 */

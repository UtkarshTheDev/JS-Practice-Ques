
/**
 * 🧠 Day 08 - Most Frequent Element in Array
 * 
 * Pattern: Frequency Counter
 * Use case: Logging, caching, search optimization
 */

const mostFrequentElement = (arr) => {
    if (!arr.length) return null;
    
    // Step 1: Count frequencies using a Map
    const freqMap = new Map();
    for (const num of arr) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    // Step 2: Find element with highest frequency
    let maxFreq = 0;
    let mostFrequent = arr[0];
    
    for (const [num, freq] of freqMap) {
        if (freq > maxFreq) {
            maxFreq = freq;
            mostFrequent = num;
        }
    }
    
    return mostFrequent;
}

// 🧪 Test Cases
console.log(mostFrequentElement([1, 3, 2, 1, 4, 1, 3, 3, 3])); // 3
console.log(mostFrequentElement([4, 4, 4, 5, 5, 5, 6]));       // 4
console.log(mostFrequentElement([1, 2, 3, 4]));                // 1
console.log(mostFrequentElement([]));                         // null

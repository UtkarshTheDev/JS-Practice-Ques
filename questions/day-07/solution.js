
/**
 * 🧠 Day 07 - Count the Number of Digits (Math Only)
 * 
 * Problem:
 * Count digits in a number using math (no string conversion)
 * 
 * 💭 THOUGHT PROCESS FOR BEGINNERS:
 * When counting digits, think about how numbers work in base-10:
 * - 7 has 1 digit
 * - 75 has 2 digits  
 * - 750 has 3 digits
 * 
 * Pattern: Each time we divide by 10, we "remove" one digit from the right.
 * Example: 12345 → 1234 → 123 → 12 → 1 → 0 (5 divisions = 5 digits)
 * 
 * 🎯 APPROACH:
 * 1. Handle special case: 0 has exactly 1 digit
 * 2. Keep dividing the number by 10 until it becomes 0
 * 3. Count how many divisions we performed
 * 4. Use floor division to get integer results (no decimals)
 * 
 * 🔍 KEY INSIGHT:
 * We use bitwise OR (| 0) instead of Math.floor() for performance.
 * This is an advanced optimization that truncates decimals.
 * 
 * ⏰ Time Complexity: O(log n) - where n is the input number
 * 💾 Space Complexity: O(1) - only using constant extra variables
 */

const countDigits = (no) => {
    // 🚨 EDGE CASE: Zero is a special case with exactly 1 digit
    if (no === 0) return 1;
    
    let digitCount = 0;  // Counter for total digits found
    
    /**
     * 🔄 MAIN ALGORITHM LOOP:
     * We use do-while because we want to execute at least once,
     * even for single-digit numbers like 7.
     * 
     * Why do-while vs while?
     * - do-while: Execute first, then check condition
     * - while: Check condition first, then execute
     * - For digit counting, we always need at least one iteration
     */
    do {
        // 🔢 BITWISE FLOOR DIVISION: (no/10) | 0
        // This removes the rightmost digit by dividing by 10 and truncating decimals
        // Example: 12345 / 10 = 1234.5 → (1234.5 | 0) = 1234
        no = (no / 10) | 0;
        
        // 📊 INCREMENT COUNTER: We've processed one digit
        digitCount++;
        
    } while (no > 0);  // Continue until no digits remain
    
    return digitCount;
}

// 🧪 Test Cases
console.log(countDigits(0));         // 1 (special case)
console.log(countDigits(7));         // 1 (single digit)
console.log(countDigits(12345));     // 5 (multiple digits)
console.log(countDigits(1000000));   // 7 (number with trailing zeros)

/**
 * 🎓 LEARNING NOTES FOR BEGINNERS:
 * 
 * 💡 Why bitwise (| 0) instead of Math.floor()?
 * - Performance: Bitwise operations are faster than function calls
 * - Behavior: Both truncate decimals for positive numbers
 * - Limitation: Bitwise only works reliably with positive integers
 * 
 * 🔄 Alternative approaches you could consider:
 * 1. String conversion: no.toString().length (but problem forbids this)
 * 2. Logarithmic: Math.floor(Math.log10(no)) + 1 (for non-zero numbers)
 * 3. Recursive: function calls itself with no/10 until no becomes 0
 * 
 * 📈 Why this approach is good:
 * - Simple and intuitive logic
 * - Handles edge cases properly
 * - Efficient performance
 * - Easy to understand and debug
 */

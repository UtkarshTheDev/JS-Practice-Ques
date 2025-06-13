/**
 * 🧠 Day 12 - Build Your Own Array.filter() Method (Polyfill)
 * WITH Complete Beginner's Guide and In-Depth Explanation
 * 
 * 🎯 PROBLEM UNDERSTANDING:
 * Create our own version of JavaScript's built-in Array.filter() method.
 * A polyfill is code that provides functionality that you expect the browser
 * to provide natively, but doesn't exist yet.
 * 
 * 💭 WHAT DOES ARRAY.FILTER() DO?
 * filter() creates a NEW array with all elements that pass a test (callback function).
 * It doesn't modify the original array - it's a pure function!
 * 
 * Example: [1, 2, 3, 4].filter(x => x > 2) → [3, 4]
 * 
 * 🌟 REAL-WORLD ANALOGY:
 * Think of filter() like a coffee filter:
 * - You pour coffee grounds and water (original array)
 * - Filter lets only liquid coffee pass through (elements that pass the test)
 * - Coffee grounds stay behind (elements that don't pass)
 * - You get clean coffee in a new cup (new filtered array)
 * 
 * 💡 BEGINNER'S THOUGHT PROCESS - STEP BY STEP:
 * 
 * 🤔 FIRST THOUGHTS:
 * "How do I add a new method to ALL arrays in JavaScript?"
 * "How do I make it work exactly like the native filter?"
 * 
 * 🔍 BREAKING DOWN THE REQUIREMENTS:
 * 1. Add method to Array.prototype (so ALL arrays can use it)
 * 2. Accept a callback function that tests each element
 * 3. Accept optional 'thisArg' to set context for callback
 * 4. Return a NEW array (don't modify original)
 * 5. Handle edge cases: sparse arrays, invalid callbacks
 * 6. Call callback with: (element, index, wholeArray)
 * 
 * 🧩 WHAT TOOLS DO WE NEED?
 * - Array.prototype manipulation
 * - Function.call() for context binding
 * - Type checking with typeof
 * - for...in loop vs regular for loop understanding
 * - Sparse array handling
 * 
 * 💡 WHY IS THIS USEFUL TO LEARN?
 * 
 * 🎓 EDUCATIONAL VALUE:
 * - Understand how native JavaScript methods work internally
 * - Learn about prototypes and method extension
 * - Practice callback handling and function context
 * - Master polyfill patterns used in real libraries
 * 
 * 🛠️ PRACTICAL APPLICATIONS:
 * - Supporting older browsers that lack modern methods
 * - Creating custom array methods for specific business logic
 * - Understanding libraries like Lodash, Underscore.js
 * - Interview preparation (common coding question)
 * 
 * Pattern: Polyfill Implementation
 * Used In: Babel transpilation, browser compatibility, library development
 */

// 🔥 Custom implementation of Array.prototype.filter
// 🚀 Day 12 - Build your own 'myFilter' method

Array.prototype.myFilter = function(callback, thisArg) {
    /**
     * 🚨 STEP 1: INPUT VALIDATION
     * 
     * 💡 BEGINNER EXPLANATION:
     * Before we do anything, we need to make sure the user passed
     * a valid callback function. If they pass something else
     * (like a number or string), we should throw an error.
     * 
     * 🔍 WHY CHECK typeof callback !== 'function'?
     * - Functions in JS have type 'function'
     * - This prevents runtime errors later when we try to call it
     * - Native filter() throws this exact same error message
     * 
     * 🎯 ERROR HANDLING BEST PRACTICE:
     * Always validate inputs early and give clear error messages
     */
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    /**
     * 🏗️ STEP 2: SETUP VARIABLES
     * 
     * 💡 BEGINNER EXPLANATION:
     * - result: This will be our new filtered array (empty to start)
     * - array: 'this' refers to the array that called myFilter()
     * 
     * 🔍 WHY STORE 'this' IN A VARIABLE?
     * - 'this' can change context inside loops or callbacks
     * - Storing it ensures we always reference the correct array
     * - More readable and less confusing than using 'this' everywhere
     * 
     * Example: [1,2,3].myFilter(...) → 'this' = [1,2,3]
     */
    const result = []; // 🧺 Final array to store filtered elements
    const array = this; // 🚀 'this' refers to the array calling myFilter

    /**
     * 🔄 STEP 3: ITERATE THROUGH ARRAY
     * 
     * 💡 BEGINNER EXPLANATION:
     * We use a traditional for loop instead of forEach because:
     * 1. We need to handle sparse arrays (arrays with gaps)
     * 2. We need full control over iteration
     * 3. Better performance for polyfills
     * 
     * 🎯 LOOP STRUCTURE BREAKDOWN:
     * for (let i = 0; i < array.length; i++) {
     *   - i = 0: Start at first index
     *   - i < array.length: Don't go past the end
     *   - i++: Move to next index after each iteration
     * }
     */
    for (let i = 0; i < array.length; i++) {
        /**
         * 🕳️ STEP 4: HANDLE SPARSE ARRAYS
         * 
         * 💡 BEGINNER EXPLANATION - WHAT ARE SPARSE ARRAYS?
         * Sparse arrays have "holes" - missing elements at certain indices.
         * 
         * Example of sparse array:
         * const sparseArray = [1, , , 4]; // indices 1 and 2 are empty
         * sparseArray.length = 4, but sparseArray[1] = undefined
         * sparseArray.hasOwnProperty(1) = false
         * 
         * 🔍 WHY USE 'in' OPERATOR?
         * - (i in array) checks if index i actually exists in the array
         * - For sparse arrays, missing indices return false
         * - This matches native filter() behavior exactly
         * 
         * 🚨 CRITICAL INSIGHT:
         * Native filter() skips holes in sparse arrays, so we must too!
         * If we don't skip, we'd process 'undefined' values that shouldn't exist.
         */
        if (!(i in array)) continue; // ✅ Skip empty slots (sparse arrays)

        /**
         * 📦 STEP 5: GET CURRENT ELEMENT
         * 
         * 💡 BEGINNER EXPLANATION:
         * We store the current element in a variable for clarity.
         * This makes the code more readable and avoids repeated array access.
         * 
         * 🎯 PERFORMANCE NOTE:
         * array[i] is an array lookup operation. While fast, doing it once
         * and storing the result is slightly more efficient.
         */
        const element = array[i];

        /**
         * 📞 STEP 6: CALL THE CALLBACK FUNCTION
         * 
         * 💡 BEGINNER EXPLANATION - FUNCTION.CALL():
         * callback.call(thisArg, element, i, array) does several things:
         * 
         * 1. CALLS the callback function
         * 2. SETS 'this' context inside callback to thisArg
         * 3. PASSES three arguments: element, index, whole array
         * 
         * 🔍 WHY USE .call() INSTEAD OF callback()?
         * - .call() lets us control what 'this' means inside the callback
         * - Native filter() supports thisArg parameter, so we must too
         * - Without .call(), 'this' inside callback would be undefined/window
         * 
         * 🧪 EXAMPLE OF thisArg IN ACTION:
         * const ctx = { min: 3 };
         * [1,2,3,4,5].myFilter(function(x) {
         *   return x >= this.min; // 'this' refers to ctx object
         * }, ctx); // → [3,4,5]
         * 
         * 🎯 CALLBACK SIGNATURE:
         * The callback receives: (currentElement, currentIndex, entireArray)
         * This matches native filter() exactly.
         */
        const shouldInclude = callback.call(thisArg, element, i, array);

        /**
         * ✅ STEP 7: CONDITIONALLY ADD TO RESULT
         * 
         * 💡 BEGINNER EXPLANATION:
         * The callback returns a "truthy" or "falsy" value:
         * - Truthy: true, 1, "hello", {}, [] → Include element
         * - Falsy: false, 0, "", null, undefined → Skip element
         * 
         * 🔍 WHY JUST 'if (shouldInclude)'?
         * JavaScript automatically converts values to boolean in if statements.
         * This matches how native filter() works - it doesn't require strict true/false.
         * 
         * 🧪 EXAMPLES:
         * [1,2,3].filter(x => x > 1) → callback returns true/false
         * [1,2,3].filter(x => x) → callback returns the number itself (truthy/falsy)
         */
        if (shouldInclude) {
            result.push(element); // ✅ Add to result if condition passes
        }
    }

    /**
     * 🎉 STEP 8: RETURN THE NEW ARRAY
     * 
     * 💡 BEGINNER EXPLANATION:
     * We return our new 'result' array containing only elements
     * that passed the test. The original array remains unchanged.
     * 
     * 🎯 IMMUTABILITY PRINCIPLE:
     * Good JavaScript functions don't modify their inputs.
     * They create new data structures instead.
     */
    return result;
};

/**
 * 🧪 COMPREHENSIVE TEST CASES WITH DETAILED ANALYSIS
 * 
 * Let's test our implementation to make sure it works like native filter():
 */

console.log("=" .repeat(60));
console.log("🧪 TEST CASE 1: Basic filtering with numbers");
console.log("=" .repeat(60));

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.myFilter(function(num) {
    return num % 2 === 0; // Return true for even numbers
});

console.log("Original array:", numbers);
console.log("Filtered (even numbers):", evenNumbers);
console.log("Expected: [2, 4, 6]");
console.log("✅ Test passed:", JSON.stringify(evenNumbers) === JSON.stringify([2, 4, 6]));

console.log("\n" + "=" .repeat(60));
console.log("🧪 TEST CASE 2: Using thisArg context");
console.log("=" .repeat(60));

const context = { threshold: 3 };
const filtered = numbers.myFilter(function(num) {
    return num >= this.threshold; // 'this' refers to context object
}, context);

console.log("Numbers >= 3 (using context):", filtered);
console.log("Expected: [3, 4, 5, 6]");
console.log("✅ Test passed:", JSON.stringify(filtered) === JSON.stringify([3, 4, 5, 6]));

console.log("\n" + "=" .repeat(60));
console.log("🧪 TEST CASE 3: Sparse array handling");
console.log("=" .repeat(60));

const sparseArray = [1, , 3, , 5]; // Has holes at indices 1 and 3
const nonEmpty = sparseArray.myFilter(function(x) {
    return x !== undefined; // Should only get actual values
});

console.log("Sparse array:", sparseArray);
console.log("Filtered (non-empty):", nonEmpty);
console.log("Expected: [1, 3, 5] (holes skipped)");
console.log("✅ Test passed:", JSON.stringify(nonEmpty) === JSON.stringify([1, 3, 5]));

console.log("\n" + "=" .repeat(60));
console.log("🧪 TEST CASE 4: Error handling");
console.log("=" .repeat(60));

try {
    [1, 2, 3].myFilter("not a function"); // Should throw error
    console.log("❌ Test failed: Should have thrown an error");
} catch (error) {
    console.log("✅ Correctly threw error:", error.message);
}

/**
 * 💭 KEY LEARNING POINTS FOR BEGINNERS:
 * 
 * 🎯 POLYFILL PATTERNS:
 * - Always validate inputs first
 * - Handle edge cases (sparse arrays, context binding)
 * - Match native behavior exactly
 * - Use descriptive variable names
 * 
 * 🔍 JAVASCRIPT CONCEPTS MASTERED:
 * - Array.prototype extension
 * - Function.call() for context control
 * - Sparse array detection with 'in' operator
 * - Type checking with typeof
 * - Error throwing and handling
 * 
 * 🛠️ PROBLEM-SOLVING APPROACH:
 * 1. Understand requirements completely
 * 2. Break down into small, manageable steps
 * 3. Handle edge cases and errors
 * 4. Test thoroughly with various inputs
 * 5. Document your thought process
 * 
 * 🚀 REAL-WORLD APPLICATIONS:
 * - Browser compatibility libraries
 * - Custom array methods for business logic
 * - Understanding how frameworks work internally
 * - Building your own utility libraries
 * 
 * 📈 COMPLEXITY ANALYSIS:
 * - Time: O(n) - we visit each array element once
 * - Space: O(k) where k = number of elements that pass the filter
 * 
 * 🔄 ALTERNATIVE IMPLEMENTATIONS:
 * - Using for...of loop (but harder to handle sparse arrays)
 * - Using reduce() (more functional but less clear)
 * - Using recursion (overkill for this problem)
 */
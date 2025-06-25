
/**
 * 🧠 Day 15 - Retryable Promise Wrapper
 * WITH In-Depth Explanation for Beginners
 * 
 * 🎯 PROBLEM UNDERSTANDING:
 * Create a function that wraps another function to automatically retry it
 * if it fails, with a specified delay between attempts.
 * 
 * 💭 REAL-WORLD ANALOGY:
 * Think of this like trying to call someone on the phone:
 * - If the call fails (busy/no answer), wait a bit and try again
 * - Keep trying up to X times before giving up
 * - If any attempt succeeds, stop trying and celebrate!
 * 
 * 🔍 WHY DO WE NEED THIS?
 * In real applications, things fail all the time:
 * - Network requests timeout
 * - APIs are temporarily down
 * - Database connections drop
 * - External services are overloaded
 * 
 * Instead of immediately giving up, we can be smart and try again!
 * 
 * 🎯 APPROACH BREAKDOWN:
 * 1. Create a wrapper function that takes the original function + retry config
 * 2. Return a new function that implements the retry logic
 * 3. Use recursion to attempt the function multiple times
 * 4. Use setTimeout to add delays between attempts
 * 5. Stop retrying when we succeed OR run out of attempts
 * 
 * 💡 KEY CONCEPTS FOR BEGINNERS:
 * - Higher-Order Functions: Functions that take/return other functions
 * - Closures: Inner functions remember outer function's variables
 * - Promises: Handle async operations that might succeed or fail
 * - Recursion: Function calls itself with different parameters
 * - setTimeout: Delay execution for a specific time
 */

// 🚀 Day 16 – Retryable Async Function

/**
 * 🎯 MAIN FUNCTION: retry(fn, retries, delay)
 * 
 * 📥 PARAMETERS:
 * @param {Function} fn - The async function we want to make retryable
 * @param {number} retries - Maximum number of retry attempts
 * @param {number} delay - Milliseconds to wait between attempts
 * 
 * 📤 RETURNS:
 * A new function that wraps the original with retry logic
 * 
 * 💭 THOUGHT PROCESS:
 * We need to return a function that:
 * 1. Accepts the same arguments as the original function
 * 2. Tries to execute the original function
 * 3. If it succeeds → return the result
 * 4. If it fails → wait and try again (up to retry limit)
 * 5. If all attempts fail → throw the last error
 */
function retry(fn, retries, delay) {
  /**
   * 🔄 WRAPPER FUNCTION: executor(...args)
   * 
   * This is the function users will actually call.
   * It implements the retry logic using the original function.
   * 
   * 💡 WHY ...args?
   * We use rest parameters to accept any number of arguments
   * and pass them to the original function unchanged.
   * Example: If original function takes (a, b, c), our wrapper
   * can be called with the same (a, b, c) arguments.
   */
  return function executor(...args) {
    /**
     * 🎁 PROMISE WRAPPER:
     * We return a Promise so the caller can use .then()/.catch()
     * or async/await to handle the result.
     * 
     * 💭 WHY PROMISE?
     * - Consistent async interface
     * - Can chain with .then()/.catch()
     * - Works with async/await
     * - Handles both success and failure cases
     */
    return new Promise((resolve, reject) => {
      /**
       * 🔄 RECURSIVE ATTEMPT FUNCTION:
       * 
       * This is the heart of our retry logic.
       * It tries the function and either:
       * - Resolves if successful
       * - Retries if failed and attempts remain
       * - Rejects if no attempts left
       * 
       * @param {number} count - Remaining retry attempts
       * 
       * 💡 RECURSION PATTERN:
       * - Base case: count <= 0 (no more attempts)
       * - Recursive case: count > 0 (try again)
       */
      function attempt(count) {
        console.log(`🔄 Attempting function call... (${count} attempts remaining)`);
        
        /**
         * 🎯 EXECUTE THE ORIGINAL FUNCTION:
         * 
         * We call fn(...args) which returns a Promise.
         * Then we handle both success and failure cases.
         * 
         * 💭 PROMISE CHAINING EXPLAINED:
         * fn(...args)           // Call original function
         *   .then(resolve)       // If success: resolve main Promise
         *   .catch((err) => {    // If failure: decide what to do
         */
        fn(...args)
          .then((result) => {
            /**
             * ✅ SUCCESS CASE:
             * The original function succeeded!
             * We resolve the main Promise with the result.
             * This stops all retry attempts.
             */
            console.log(`✅ Success! Function completed successfully.`);
            resolve(result);
          })
          .catch((err) => {
            /**
             * ❌ FAILURE CASE:
             * The original function failed.
             * Now we need to decide: retry or give up?
             */
            console.log(`❌ Attempt failed with error:`, err);
            
            if (count <= 0) {
              /**
               * 🚫 NO MORE ATTEMPTS:
               * We've used up all our retries.
               * Reject the main Promise with the last error.
               */
              console.log(`🚫 No more attempts remaining. Giving up.`);
              reject(err);
            } else {
              /**
               * ⏰ RETRY AFTER DELAY:
               * We still have attempts left.
               * Wait for the specified delay, then try again.
               * 
               * 💡 WHY setTimeout?
               * - Gives the system time to recover
               * - Prevents overwhelming a failing service
               * - Common pattern in production systems
               */
              console.log(`⏰ Waiting ${delay}ms before next attempt...`);
              setTimeout(() => {
                /**
                 * 🔄 RECURSIVE CALL:
                 * After the delay, try again with one less attempt.
                 * This is where the recursion happens!
                 */
                attempt(count - 1);
              }, delay);
            }
          });
      }

      /**
       * 🚀 START THE RETRY PROCESS:
       * Begin with the specified number of retries.
       * This kicks off the recursive attempt chain.
       */
      attempt(retries);
    });
  };
}

/**
 * 🧪 TESTING SECTION:
 * Let's create a function that fails sometimes to test our retry logic.
 */

console.log("🧪 Testing Retryable Function...\n");

// Track how many times our test function has been called
let attempt = 0;

/**
 * 🎭 MOCK UNSTABLE FUNCTION:
 * This simulates a real-world function that might fail due to:
 * - Network timeouts
 * - Database connection issues  
 * - External API rate limits
 * - Temporary server overload
 * 
 * Our function fails the first 2 times, then succeeds on the 3rd attempt.
 */
const unstable = () =>
  new Promise((resolve, reject) => {
    attempt++;
    console.log(`📞 Function called - Attempt #${attempt}`);
    
    /**
     * 🎲 FAILURE SIMULATION:
     * Fail the first 2 attempts to test our retry logic.
     * In real apps, this would be actual network/system failures.
     */
    if (attempt < 3) {
      console.log(`💥 Simulated failure on attempt ${attempt}`);
      reject(new Error(`Attempt ${attempt} failed`));
    } else {
      console.log(`🎉 Success on attempt ${attempt}!`);
      resolve(`Success after ${attempt} attempts`);
    }
  });

/**
 * 🛡️ CREATE RETRYABLE VERSION:
 * Wrap our unstable function with retry logic:
 * - Try up to 5 times total
 * - Wait 1000ms (1 second) between attempts
 */
const retryable = retry(unstable, 5, 1000);

/**
 * 🚀 EXECUTE AND OBSERVE:
 * Call our retryable function and see the retry logic in action!
 */
console.log("🚀 Starting retryable function execution...\n");

retryable()
  .then((result) => {
    console.log(`\n🎊 Final Result: ${result}`);
    console.log("✅ Mission accomplished!");
  })
  .catch((error) => {
    console.log(`\n💀 All attempts failed: ${error.message}`);
    console.log("❌ Mission failed!");
  });

/**
 * 🎓 LEARNING NOTES FOR BEGINNERS:
 * 
 * 🏗️ ARCHITECTURE PATTERNS:
 * - Wrapper Pattern: Enhance existing functions without modifying them
 * - Decorator Pattern: Add behavior to functions dynamically
 * - Retry Pattern: Handle transient failures gracefully
 * 
 * 🔧 JAVASCRIPT CONCEPTS USED:
 * - Higher-Order Functions: Functions that operate on other functions
 * - Closures: Inner functions access outer function variables
 * - Promises: Handle async operations and their outcomes
 * - Rest Parameters (...args): Accept variable number of arguments
 * - setTimeout: Delay execution for specified time
 * - Recursion: Function calls itself with modified parameters
 * 
 * 🌍 REAL-WORLD APPLICATIONS:
 * - HTTP request libraries (axios, fetch with retry)
 * - Database connection pooling
 * - Message queue processing
 * - File upload with network retry
 * - API rate limit handling
 * - Microservice communication
 * 
 * 📈 COMPLEXITY ANALYSIS:
 * - Time: O(n) where n = number of attempts
 * - Space: O(n) due to recursive call stack
 * 
 * 🔄 ALTERNATIVE APPROACHES:
 * 1. While loop instead of recursion (iterative)
 * 2. Exponential backoff (increasing delays)
 * 3. Jitter (random delays to prevent thundering herd)
 * 4. Circuit breaker pattern (stop trying after threshold)
 * 
 * 💡 NEXT STEPS TO EXPLORE:
 * - Add exponential backoff: delay *= 2 each attempt
 * - Add maximum delay cap: Math.min(delay, maxDelay)
 * - Add conditional retry: only retry certain error types
 * - Add timeout per attempt: Promise.race with timer
 * - Add progress callbacks: notify caller of each attempt
 */

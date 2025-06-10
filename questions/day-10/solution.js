
/**
 * 🧠 Day 10 - Debounce Logic Implementation
 * WITH Complete Beginner's Guide and In-Depth Explanation
 *
 * 🎯 PROBLEM UNDERSTANDING:
 * Create a function that delays execution of another function until a certain time
 * has passed without any new calls. Think of it like a "cooling off" period.
 *
 * 🌟 REAL-WORLD ANALOGY:
 * Imagine you're in an elevator:
 * - Someone presses a floor button
 * - Elevator waits 3 seconds before moving
 * - If someone else presses a button within those 3 seconds, timer resets
 * - Elevator only moves when 3 full seconds pass without any button presses
 * 
 * That's exactly how debounce works with function calls!
 *
 * 💭 BEGINNER'S THOUGHT PROCESS - STEP BY STEP:
 *
 * 🤔 FIRST THOUGHTS:
 * "How do I delay a function call? And how do I cancel previous delays?"
 * 
 * 🔍 BREAKING DOWN THE PROBLEM:
 * 1. We need to delay function execution
 * 2. If function is called again before delay expires, cancel previous delay
 * 3. Start a new delay from the latest call
 * 4. Only execute when the delay completes without interruption
 *
 * 🧩 WHAT TOOLS DO WE NEED?
 * - setTimeout(): To create delays
 * - clearTimeout(): To cancel previous delays
 * - Closures: To remember the timer between function calls
 * - Higher-order function: Return a new function that has debounce behavior
 *
 * 💡 WHY IS THIS USEFUL IN REAL PROJECTS?
 * 
 * 🔍 SEARCH BARS:
 * Without debounce: User types "h", "e", "l", "l", "o" → 5 API calls
 * With debounce: User types "hello", waits 300ms → 1 API call
 * 
 * 📜 SCROLL EVENTS:
 * Without debounce: 100+ scroll events per second → browser lag
 * With debounce: Handle scroll only after user stops scrolling
 * 
 * 🎨 WINDOW RESIZE:
 * Without debounce: Hundreds of resize events → performance issues
 * With debounce: Handle resize only when user finishes resizing
 *
 * 🎯 OUR APPROACH - THE STRATEGY:
 * 1. Create a "wrapper" function that controls when the original function runs
 * 2. Use a timer variable to track pending executions
 * 3. Every time the wrapper is called, cancel any existing timer
 * 4. Start a new timer for the delay period
 * 5. Only execute the original function when timer completes
 *
 * Pattern: Closures + Timers + Function Control
 * Used In: Search optimization, event throttling, API rate limiting, performance control
 */

const debounce = (fn, delay) => {
    /**
     * 🔒 CLOSURE VARIABLE - THE SECRET SAUCE
     * 
     * 💡 BEGINNER EXPLANATION:
     * This `timer` variable is special because it's trapped in a "closure".
     * A closure is like a backpack that the returned function carries around.
     * Every time we call the debounced function, it can access this same `timer` variable.
     * 
     * 🎯 WHY WE NEED THIS:
     * - We need to remember if there's already a timer running
     * - We need to be able to cancel that timer from future calls
     * - Each debounced function needs its own separate timer
     * 
     * 💭 ANALOGY:
     * Think of `timer` as a "reservation slip" at a restaurant.
     * - If you have a slip, you have a pending reservation
     * - If someone else wants to make a reservation, they cancel your slip first
     * - Then they get a new slip for their reservation
     * 
     * 🔍 TECHNICAL DETAILS:
     * - timer = null means "no pending execution"
     * - timer = <number> means "execution scheduled with this ID"
     * - setTimeout() returns a unique ID that we can use with clearTimeout()
     */
    let timer = null;

    /**
     * 🎭 THE DEBOUNCED FUNCTION - THE MAIN ACTOR
     * 
     * 💡 BEGINNER EXPLANATION:
     * We return a brand new function that wraps around the original function.
     * This new function has debounce superpowers! When called, it doesn't
     * immediately execute the original function. Instead, it:
     * 1. Cancels any previous scheduled execution
     * 2. Schedules a new execution after the delay
     * 
     * 🔍 WHY RETURN A FUNCTION?
     * We're creating a "modified version" of the original function.
     * The original: execute immediately when called
     * The debounced: execute only after delay, and cancel previous attempts
     * 
     * 🎯 FUNCTION SIGNATURE:
     * We use `function()` instead of arrow function to properly handle `this` binding
     * and `arguments` object if the original function needs them.
     */
    return function () {
        /**
         * 🛑 STEP 1: CANCEL PREVIOUS TIMER (IF EXISTS)
         * 
         * 💡 BEGINNER EXPLANATION:
         * Before scheduling a new execution, we need to cancel any existing one.
         * It's like saying "Cancel my previous order, I want to place a new one."
         * 
         * 🔍 WHAT HAPPENS HERE:
         * - if (timer) checks if there's a pending execution
         * - clearTimeout(timer) cancels that pending execution
         * - This ensures only the LATEST call will eventually execute
         * 
         * 📋 EXECUTION FLOW EXAMPLE:
         * Call 1: timer = null → no cancellation needed
         * Call 2: timer = 123 → clearTimeout(123), cancels Call 1
         * Call 3: timer = 456 → clearTimeout(456), cancels Call 2
         * Only Call 3 will eventually execute (if no Call 4 comes)
         * 
         * 🎯 KEY INSIGHT:
         * This is the heart of debouncing! We're constantly resetting the timer,
         * so only the final call (after a period of silence) actually executes.
         */
        if (timer) {
            console.log(`🛑 Canceling previous timer: ${timer}`);
            clearTimeout(timer);
        }

        /**
         * 🕐 STEP 2: SCHEDULE NEW EXECUTION
         * 
         * 💡 BEGINNER EXPLANATION:
         * Now we set up a new timer to execute the original function after the delay.
         * It's like setting an alarm clock: "Wake me up in X milliseconds"
         * 
         * 🔍 SETTIMEOUT() BREAKDOWN:
         * - setTimeout(callback, delay) schedules callback to run after delay
         * - Returns a unique timer ID that we can use to cancel it later
         * - The callback (our arrow function) will execute the original function
         * 
         * 📱 REAL-WORLD COMPARISON:
         * Like setting a timer on your phone:
         * - You set timer for 5 minutes
         * - Phone gives you timer ID: "Timer #789"
         * - You can cancel it anytime before it rings using that ID
         * - If it rings, your alarm (original function) goes off
         * 
         * 🎯 WHY ARROW FUNCTION INSIDE?
         * () => fn() ensures that when the timer expires, it calls the original
         * function. We wrap it in an arrow function to maintain proper execution context.
         */
        timer = setTimeout(() => {
            console.log(`⏰ Timer expired! Executing function after ${delay}ms delay`);
            
            /**
             * 🎯 THE ACTUAL EXECUTION
             * 
             * 💡 BEGINNER EXPLANATION:
             * This is where the magic happens! After waiting patiently for the delay,
             * we finally call the original function that was passed to debounce().
             * 
             * 🔍 EXECUTION CONTEXT:
             * fn() calls the original function exactly as it was meant to be called.
             * If the original function returns something, this execution will also return it.
             * 
             * 🧹 CLEANUP:
             * After execution, the timer automatically becomes "expired" and can't be
             * cancelled anymore. We could set timer = null here, but it's not necessary
             * since the timer ID becomes invalid after execution anyway.
             */
            fn();
            
            // Optional: Reset timer to null for clarity (not required)
            timer = null;
        }, delay);
        
        console.log(`⏳ New timer scheduled: ${timer} (will execute in ${delay}ms)`);
    };
};

/**
 * 🧪 DRY RUN EXAMPLE - STEP BY STEP EXECUTION:
 *
 * Let's trace through this scenario:
 * const debouncedLog = debounce(() => console.log("API call"), 1000);
 * 
 * At time 0ms: debouncedLog() called
 * At time 300ms: debouncedLog() called  
 * At time 600ms: debouncedLog() called
 * At time 1600ms: "API call" is logged
 *
 * 📋 DETAILED EXECUTION TRACE:
 *
 * 🔸 Call 1 (t=0ms):
 * ├─ timer = null (no previous timer)
 * ├─ if (timer) → false, no cancellation
 * ├─ timer = setTimeout(..., 1000) → timer = 123
 * ├─ Function scheduled to execute at t=1000ms
 * └─ Returns immediately, function not executed yet
 *
 * 🔸 Call 2 (t=300ms):
 * ├─ timer = 123 (from previous call)
 * ├─ if (timer) → true, clearTimeout(123)
 * ├─ Previous execution cancelled! (would have executed at t=1000ms)
 * ├─ timer = setTimeout(..., 1000) → timer = 456
 * ├─ Function scheduled to execute at t=1300ms
 * └─ Returns immediately, function not executed yet
 *
 * 🔸 Call 3 (t=600ms):
 * ├─ timer = 456 (from previous call)
 * ├─ if (timer) → true, clearTimeout(456)
 * ├─ Previous execution cancelled! (would have executed at t=1300ms)
 * ├─ timer = setTimeout(..., 1000) → timer = 789
 * ├─ Function scheduled to execute at t=1600ms
 * └─ Returns immediately, function not executed yet
 *
 * 🔸 Timer Expiration (t=1600ms):
 * ├─ setTimeout callback from Call 3 executes
 * ├─ fn() is called → console.log("API call")
 * ├─ "API call" is printed to console
 * └─ timer becomes invalid/expired
 *
 * 🎉 FINAL RESULT:
 * Only 1 "API call" log instead of 3!
 * The function executed only after 1000ms of silence.
 *
 * 💡 KEY TAKEAWAY:
 * Debouncing converts multiple rapid calls into a single delayed call.
 * This is perfect for expensive operations like API calls, DOM updates, or calculations.
 */

// 🧪 Test with detailed logging
console.log("🧪 Testing debounce function with detailed logging:");
console.log("=" .repeat(60));

const log = debounce(() => {
    console.log("🎉 Debounced function executed! This is the actual work being done.");
}, 1000);

console.log("\n📞 Making rapid calls to debounced function:");
console.log("⏰ Call 1 at time: " + Date.now());
log(); 

setTimeout(() => {
    console.log("⏰ Call 2 at time: " + Date.now());
    log(); 
}, 300);

setTimeout(() => {
    console.log("⏰ Call 3 at time: " + Date.now());
    log(); 
}, 600);

console.log("\n⏳ Waiting for debounced function to execute...");
console.log("💡 Only the last call should execute after 1000ms delay from the final call");

/**
 * 🌟 ADVANCED CONCEPTS FOR CURIOUS BEGINNERS:
 *
 * 🔄 DEBOUNCE VS THROTTLE:
 * - Debounce: "Execute only after activity stops"
 * - Throttle: "Execute at most once per time period"
 * 
 * Example - Search suggestions:
 * - Debounce: Wait until user stops typing, then search
 * - Throttle: Search at most once every 500ms while user types
 *
 * 🎯 COMMON DEBOUNCE PATTERNS:
 * 
 * 1. SEARCH INPUT:
 * const debouncedSearch = debounce((query) => {
 *   fetch(`/api/search?q=${query}`)
 * }, 300);
 * 
 * 2. FORM VALIDATION:
 * const debouncedValidate = debounce((formData) => {
 *   validateForm(formData);
 * }, 500);
 * 
 * 3. WINDOW RESIZE:
 * const debouncedResize = debounce(() => {
 *   updateLayout();
 * }, 250);
 * 
 * 4. SCROLL EVENTS:
 * const debouncedScroll = debounce(() => {
 *   checkIfNearBottom();
 * }, 100);
 *
 * 🚀 PERFORMANCE BENEFITS:
 * - Reduces API calls: 100 keystrokes → 1 API call
 * - Prevents UI lag: 100 resize events → 1 layout update  
 * - Saves bandwidth: Multiple rapid requests → Single final request
 * - Improves user experience: Smooth interactions, no stuttering
 *
 * 💻 BROWSER COMPATIBILITY:
 * - setTimeout/clearTimeout: Supported in all browsers
 * - Closures: ES5+ (all modern browsers)
 * - Arrow functions: ES6+ (use regular functions for older browsers)
 *
 * 🎓 KEY LEARNING POINTS FOR BEGINNERS:
 * 
 * 📚 PROGRAMMING CONCEPTS:
 * - Closures: Variables trapped in function scope
 * - Higher-order functions: Functions that return functions
 * - Timers: Asynchronous scheduling with setTimeout
 * - Function composition: Wrapping functions to add behavior
 * 
 * 🛠️ PRACTICAL SKILLS:
 * - Optimizing performance in real applications
 * - Handling user input efficiently
 * - Managing asynchronous operations
 * - Creating reusable utility functions
 * 
 * 🔍 DEBUGGING TIPS:
 * - Add console.logs to see timer IDs and cancellations
 * - Test with different delay values to see the effect
 * - Use browser dev tools to monitor network requests
 * - Measure performance before/after debouncing
 */

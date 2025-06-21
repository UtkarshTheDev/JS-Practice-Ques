// 🚀 Day 14 – Throttle Function Implementation
// Problem: Implement a throttle function that limits how often a function can be called.
// Throttling is useful for performance optimization, e.g., limiting API calls or event handler executions.

// Approach:
// 1. Store the last time the function was called.
// 2. When the returned function is called, check if enough time (delay) has passed since the last call.
// 3. If yes, call the original function and update the last call time.
// 4. If not, ignore the call.
//
// Best Practices:
// - Use 'let' for variables that change (like lasttime).
// - Use 'const' for functions and values that don't change.
// - Use 'apply' to preserve 'this' context and pass all arguments.
// - Minimal logging for demonstration and debugging.

const throttle = (fn, delay) => {
    let lasttime = 0; // Stores the timestamp of the last allowed call

    // Return a new function that wraps the original function
    return function (...args) {
        const now = Date.now(); // Current timestamp
        // Check if enough time has passed since the last call
        if (now - lasttime >= delay) {
            lasttime = Date.now(); // Update last call time
            // Call the original function with correct context and arguments
            fn.apply(this, args);
        }
        // else: Do nothing (throttle in effect)
    }
}

// Example usage:
// This function will only log at most once every 2 seconds, no matter how often it's called
const throttledLog = throttle(() => {
  console.log('Called at', Date.now()); // Minimal log to show when function is actually called
}, 2000);

// Simulate rapid calls (only the first call will log immediately)
throttledLog();
throttledLog();
throttledLog();

setTimeout(throttledLog, 2200); // This one should fire after 2.2 seconds
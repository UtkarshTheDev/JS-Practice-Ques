
/**
 * 🧠 Day 11 - EventEmitter Class
 *
 * 🎯 PROBLEM UNDERSTANDING FOR BEGINNERS:
 * An EventEmitter is like a notification system. Think of it like:
 * - A bell in a school (the event)
 * - Students who listen for the bell (listeners/callbacks)
 * - When bell rings, all students react (emit triggers all listeners)
 * 
 * Real World Examples:
 * - Button clicks in websites
 * - Server requests in Node.js
 * - Game events (player jumps, enemy spawns)
 * - Chat notifications
 *
 * 💡 CORE CONCEPT:
 * Observer Pattern - objects can "subscribe" to events and get notified when they happen.
 * This is the foundation of most modern frameworks and libraries.
 *
 * 📋 WHAT WE NEED TO BUILD:
 * - on(event, callback): Subscribe to an event
 * - emit(event, data): Trigger all subscribers of an event
 * - off(event, callback): Unsubscribe from an event
 * - once(event, callback): Subscribe but only trigger once
 *
 * 🔍 DATA STRUCTURE CHOICE:
 * We'll use a Map to store events because:
 * - Key = event name (string)
 * - Value = array of callback functions
 * - Map is better than object for dynamic keys
 */

class EventEmitter {
    constructor() {
        /**
         * 📊 STORAGE STRATEGY:
         * Map structure will look like:
         * {
         *   "login" => [function1, function2, function3],
         *   "logout" => [function4],
         *   "click" => [function5, function6]
         * }
         */
        this.events = new Map();
        console.log("🎉 EventEmitter created with empty events storage");
    }

    /**
     * 📝 METHOD: on(event, callback)
     * PURPOSE: Register a listener for an event
     * 
     * 🧠 BEGINNER LOGIC:
     * 1. Check if this event already exists in our storage
     * 2. If NOT exists: Create new array with this callback
     * 3. If EXISTS: Add this callback to existing array
     * 
     * 💭 WHY ARRAYS?
     * Multiple functions can listen to the same event.
     * Example: Both "saveData" and "showNotification" might listen to "userLogin"
     */
    on(event, callback) {
        console.log(`📌 Registering listener for event: "${event}"`);
        
        if (!this.events.has(event)) {
            // First listener for this event
            this.events.set(event, [callback]);
            console.log(`   ✨ Created new event "${event}" with first listener`);
        } else {
            // Add to existing listeners
            this.events.get(event).push(callback);
            console.log(`   ➕ Added listener to existing event "${event}"`);
        }
        
        console.log(`   📊 Event "${event}" now has ${this.events.get(event).length} listener(s)`);
    }

    /**
     * 🚀 METHOD: emit(event, msg)
     * PURPOSE: Trigger all listeners of an event
     * 
     * 🧠 BEGINNER LOGIC:
     * 1. Find all functions listening to this event
     * 2. Call each function one by one with the message
     * 3. Think: "Ring the bell, all students respond"
     * 
     * ⚠️ IMPORTANT: We need to check if event exists first!
     */
    emit(event, msg) {
        console.log(`🔔 Emitting event: "${event}" with message: "${msg}"`);
        
        if (!this.events.has(event)) {
            console.log(`   ❌ No listeners found for event "${event}"`);
            return;
        }

        const listeners = this.events.get(event);
        console.log(`   📢 Found ${listeners.length} listener(s) to notify`);
        
        // Call each listener function
        for (let i = 0; i < listeners.length; i++) {
            const fn = listeners[i];
            console.log(`   🎯 Calling listener ${i + 1}...`);
            fn(msg);
        }
    }

    /**
     * 🗑️ METHOD: off(event, callback)
     * PURPOSE: Remove a specific listener from an event
     * 
     * 🧠 BEGINNER LOGIC:
     * 1. Check if event exists (can't remove from nothing!)
     * 2. Check if this specific function is in the listeners array
     * 3. Find its position and remove it
     * 4. Think: "Student leaves school, stops listening to bell"
     * 
     * 🔍 ARRAY OPERATIONS:
     * - indexOf(): Find position of element in array
     * - splice(): Remove element from specific position
     */
    off(event, callback) {
        console.log(`🚫 Removing listener from event: "${event}"`);
        
        if (!this.events.has(event)) {
            console.log(`   ❌ Event "${event}" does not exist`);
            return;
        }

        const listeners = this.events.get(event);
        
        if (!listeners.includes(callback)) {
            console.log(`   ❌ Function not found in listeners for "${event}"`);
            return;
        }

        const indexOfCallback = listeners.indexOf(callback);
        listeners.splice(indexOfCallback, 1);
        
        console.log(`   ✅ Removed listener from "${event}". Remaining: ${listeners.length}`);
    }

    /**
     * 🔄 METHOD: once(event, callback)
     * PURPOSE: Listen to an event only once, then auto-remove
     * 
     * 🧠 BEGINNER LOGIC - SIMPLE APPROACH:
     * 1. Register the listener normally
     * 2. Immediately trigger it once
     * 3. Remove it so it won't trigger again
     * 
     * 💭 NOTE: This is a simplified implementation.
     * Real-world EventEmitters usually wrap the callback in a special function
     * that removes itself after first call. But this works for learning!
     */
    once(event, callback) {
        console.log(`🔂 Setting up one-time listener for event: "${event}"`);
        
        this.on(event, callback);           // Step 1: Register normally
        this.emit(event, "Hello");          // Step 2: Trigger once
        this.off(event, callback);          // Step 3: Remove it
        
        console.log(`   ✅ One-time listener for "${event}" completed and removed`);
    }
}

/**
 * 🧪 TESTING SECTION WITH DETAILED LOGS
 * Let's see our EventEmitter in action!
 */

console.log("\n🧪 Starting EventEmitter Tests...\n");

const emitter = new EventEmitter();

// Test function that we'll use as a listener
const log = (msg) => console.log(`📝 Logger received: ${msg}`);

console.log("--- Test 1: Basic on/emit/off cycle ---");
emitter.on("greet", log);
emitter.emit("greet", "Hello");     // Should output: "📝 Logger received: Hello"
emitter.off("greet", log);
emitter.emit("greet", "World");     // Should output nothing (listener removed)

console.log("\n--- Test 2: Once functionality ---");
emitter.once("ping", () => console.log("🏓 PONG"));
emitter.emit("ping");               // Should output: "🏓 PONG" (but once already triggered it)
emitter.emit("ping");               // Should output nothing (listener was removed)

/**
 * 💭 KEY INSIGHTS FOR BEGINNERS:
 * 
 * 🎯 DESIGN PATTERNS:
 * - Observer Pattern: Objects subscribe to events they care about
 * - Decoupling: Event emitters separate "what happened" from "what to do about it"
 * 
 * 🔧 PRACTICAL APPLICATIONS:
 * - DOM events: button.addEventListener('click', handler)
 * - Node.js: server.on('request', handleRequest)
 * - React: useState, useEffect hooks use similar concepts
 * 
 * 📚 NEXT STEPS TO LEARN:
 * - Async event handling
 * - Error handling in listeners
 * - Event bubbling and capturing
 * - Custom event systems in frameworks
 */

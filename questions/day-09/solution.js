/**
 * 🧠 Day 09 - Deep Clone Without JSON.parse
 * WITH In-Depth Explanation for Beginners
 *
 * 🎯 PROBLEM UNDERSTANDING:
 * Create a complete copy of any JavaScript object, including nested objects, arrays,
 * and special types like Date, without using JSON.stringify/parse.
 *
 * 💭 WHY NOT JSON.stringify/parse?
 * JSON has limitations:
 * - Loses functions: { fn: () => {} } → {} (function disappears)
 * - Loses undefined values: { a: undefined } → {} (undefined disappears)
 * - Converts Dates to strings: { date: new Date() } → { date: "2024-01-01T..." }
 * - Loses symbols, prototype chain, and other non-JSON types
 *
 * 🔍 OUR APPROACH - RECURSIVE TYPE CHECKING:
 * 1. Check if value is primitive (number, string, boolean, null, undefined)
 * 2. Handle special objects (Date, Array) separately
 * 3. For regular objects, recursively clone each property
 * 4. Return a completely new object with no shared references
 *
 * 🎯 KEY INSIGHT:
 * Recursion is perfect for nested structures because:
 * - Each level of nesting is the same problem (clone an object)
 * - We can handle it the same way, just smaller
 * - Base case: primitive values (just return them)
 * - Recursive case: objects (clone each property)
 *
 * Pattern: Recursion + Type Detection
 * Used In: State management, undo/redo, data backup, configuration cloning
 */

const deepClone = (obj) => {
    /**
     * 🚨 BASE CASE 1: PRIMITIVE VALUES
     *
     * 💡 BEGINNER EXPLANATION:
     * Primitives are simple values that can't be broken down further:
     * - Numbers: 42, 3.14, -5
     * - Strings: "hello", 'world'
     * - Booleans: true, false
     * - null and undefined
     *
     * 🔍 WHY CHECK FOR null SEPARATELY?
     * In JavaScript: typeof null === "object" (this is a famous JS quirk!)
     * So we need to check for null first, otherwise it would be treated as an object.
     *
     * Example:
     * deepClone(42) → returns 42 (primitive, no cloning needed)
     * deepClone("hello") → returns "hello" (primitive, no cloning needed)
     * deepClone(null) → returns null (not an object despite typeof)
     */
    if (obj === null || typeof obj !== "object") return obj;

    /**
     * 🚨 SPECIAL CASE: DATE OBJECTS
     *
     * 💡 WHY DATES NEED SPECIAL HANDLING:
     * Date is a built-in JavaScript object that represents time.
     * If we don't handle it specially, it would be treated as a regular object
     * and we'd lose the actual date value.
     *
     * 🔍 INSTANCEOF EXPLANATION:
     * instanceof checks if an object was created by a specific constructor.
     * obj instanceof Date checks if obj is a Date object.
     *
     * Example:
     * const originalDate = new Date('2024-01-01');
     * deepClone(originalDate) → new Date('2024-01-01') (new Date object with same value)
     *
     * ❌ WITHOUT this check:
     * Date would become: {} (empty object, losing the actual date)
     */
    if (obj instanceof Date) return new Date(obj);

    /**
     * 🚨 SPECIAL CASE: ARRAYS
     *
     * 💡 WHY ARRAYS NEED SPECIAL HANDLING:
     * Arrays are technically objects in JavaScript, but they have:
     * - Numeric indices (0, 1, 2, ...)
     * - Length property
     * - Array methods (push, pop, map, etc.)
     *
     * 🔍 ARRAY.ISARRAY() EXPLANATION:
     * Array.isArray() is the reliable way to check if something is an array.
     * We can't use instanceof Array because it might fail with arrays from other frames.
     *
     * 🎯 RECURSIVE MAPPING:
     * .map() creates a new array by transforming each element.
     * For each item in the array, we call deepClone() recursively.
     * This handles nested arrays and objects within arrays.
     *
     * Example:
     * Original: [1, [2, 3], { a: 4 }]
     * Step 1: deepClone(1) → 1
     * Step 2: deepClone([2, 3]) → [2, 3] (recursive call)
     * Step 3: deepClone({ a: 4 }) → { a: 4 } (recursive call)
     * Result: [1, [2, 3], { a: 4 }] (completely new array)
     */
    if (Array.isArray(obj)) {
        return obj.map((item) => deepClone(item));
    }

    /**
     * 🚨 MAIN CASE: REGULAR OBJECTS
     *
     * 💡 BEGINNER EXPLANATION:
     * Regular objects are collections of key-value pairs:
     * { name: "John", age: 30, address: { city: "NYC" } }
     *
     * 🎯 CLONING STRATEGY:
     * 1. Create a completely new empty object
     * 2. Loop through each property of the original object
     * 3. For each property, recursively clone its value
     * 4. Assign the cloned value to the new object
     *
     * 🔍 FOR...IN LOOP EXPLANATION:
     * for...in iterates over all enumerable properties of an object.
     * It gives us the property names (keys), not the values.
     *
     * 🚨 HASOWNPROPERTY CHECK:
     * hasOwnProperty() ensures we only clone properties that belong
     * directly to this object, not inherited properties from the prototype chain.
     *
     * Example without hasOwnProperty:
     * If obj inherits from another object, we might clone inherited properties too.
     */
    const clone = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            /**
             * 🔄 RECURSIVE MAGIC HAPPENS HERE:
             *
             * For each property:
             * - If it's a primitive: deepClone returns it as-is
             * - If it's an array: deepClone handles it with map
             * - If it's an object: deepClone calls itself again
             * - If it's a Date: deepClone creates a new Date
             *
             * This is how we handle unlimited nesting levels!
             */
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
};

/**
 * 🧪 DRY RUN EXAMPLE - STEP BY STEP EXECUTION:
 *
 * Let's trace through this object:
 * const original = {
 *   name: "Utkarsh",
 *   age: 15,
 *   tech: ["JS", "React"],
 *   meta: {
 *     joined: new Date('2024-01-01')
 *   }
 * };
 *
 * 📋 EXECUTION TRACE:
 *
 * 🔸 Call: deepClone(original)
 * ├─ Check: obj === null? No
 * ├─ Check: typeof obj !== "object"? No (it's an object)
 * ├─ Check: obj instanceof Date? No
 * ├─ Check: Array.isArray(obj)? No
 * ├─ Create: clone = {}
 * ├─ Loop through properties:
 * │
 * │  🔹 Property: "name"
 * │  ├─ Call: deepClone("Utkarsh")
 * │  ├─ Check: typeof "Utkarsh" !== "object"? Yes (it's string)
 * │  ├─ Return: "Utkarsh"
 * │  └─ Set: clone.name = "Utkarsh"
 * │
 * │  🔹 Property: "age"
 * │  ├─ Call: deepClone(15)
 * │  ├─ Check: typeof 15 !== "object"? Yes (it's number)
 * │  ├─ Return: 15
 * │  └─ Set: clone.age = 15
 * │
 * │  🔹 Property: "tech"
 * │  ├─ Call: deepClone(["JS", "React"])
 * │  ├─ Check: Array.isArray? Yes
 * │  ├─ Map over array:
 * │  │  ├─ deepClone("JS") → "JS"
 * │  │  └─ deepClone("React") → "React"
 * │  ├─ Return: ["JS", "React"]
 * │  └─ Set: clone.tech = ["JS", "React"]
 * │
 * │  🔹 Property: "meta"
 * │  ├─ Call: deepClone({ joined: new Date('2024-01-01') })
 * │  ├─ Check: it's an object, not array, not date
 * │  ├─ Create: innerClone = {}
 * │  ├─ Loop through properties:
 * │  │  └─ Property: "joined"
 * │  │     ├─ Call: deepClone(new Date('2024-01-01'))
 * │  │     ├─ Check: instanceof Date? Yes
 * │  │     ├─ Return: new Date('2024-01-01')
 * │  │     └─ Set: innerClone.joined = new Date('2024-01-01')
 * │  ├─ Return: { joined: new Date('2024-01-01') }
 * │  └─ Set: clone.meta = { joined: new Date('2024-01-01') }
 * │
 * └─ Return: complete clone object
 *
 * 🎉 FINAL RESULT:
 * A completely new object with no shared references to the original!
 *
 * 💡 VERIFICATION:
 * original.meta.joined === copied.meta.joined // false (different Date objects)
 * original.tech === copied.tech // false (different arrays)
 * original === copied // false (different objects)
 *
 * But the values are identical:
 * original.name === copied.name // true ("Utkarsh")
 * original.meta.joined.getTime() === copied.meta.joined.getTime() // true (same timestamp)
 */

// 🧪 Test
const original = {
    name: "Utkarsh",
    age: 15,
    tech: ["JS", "React"],
    meta: {
        joined: new Date(),
    },
};

const copied = deepClone(original);
console.log(copied);

console.log(original.meta.joined === copied.meta.joined); // false (different Date objects)
console.log(original.tech === copied.tech); // false (different arrays)
console.log(original === copied); // false (different objects)

// But the values are identical:
console.log(original.name === copied.name); // true ("Utkarsh")
console.log(original.meta.joined.getTime() === copied.meta.joined.getTime()); // true (same timestamp)

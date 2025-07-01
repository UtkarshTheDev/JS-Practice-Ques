
/**
 * 🧠 Day 16 - Flatten a Nested Object
 * 
 * Problem: Convert a deeply nested object into a flat object with dot-separated keys
 * 
 * Example:
 * Input:  { user: { name: "Bruno", meta: { dev: true } } }
 * Output: { "user.name": "Bruno", "user.meta.dev": true }
 * 
 * 💡 APPROACH - Recursive Object Traversal:
 * 1. Loop through each property of the object
 * 2. If property value is an object → go deeper (recursion)
 * 3. If property value is primitive → add to result with dot notation
 * 4. Build key names by combining parent prefix with current key
 * 
 * 🔑 KEY CONCEPT: Recursion
 * The function calls itself to handle nested objects, gradually building
 * the full key path as it goes deeper into the structure.
 */

const flattenObject = (obj, prefix = "") => {
  let newObj = {}
  
  // Loop through each key-value pair in the current object
  for (const key in obj) {
    // Build the new key name: combine prefix with current key using dot notation
    // Example: prefix="user", key="name" → newPrefix="user.name"
    const newPrefix = prefix ? `${prefix}.${key}` : key;
    
    // 🔍 DECISION POINT: Is this value another object?
    if(typeof(obj[key]) === typeof({})) {
      // 🔄 RECURSIVE CASE: Value is an object, so we need to go deeper
      // Call the same function on this nested object, passing the new prefix
      const recursiveResult = flattenObject(obj[key], newPrefix);
      
      // Merge the flattened nested object into our result
      // Spread operator (...) combines all properties from recursiveResult
      newObj = { ...newObj, ...recursiveResult };
    }
    else {
      // 🎯 BASE CASE: Value is primitive (string, number, boolean, etc.)
      // Simply add it to result with the full dot-notation key
      newObj[newPrefix] = obj[key]
    }
  }
  
  return newObj
}

// Test with nested object
const input = {
  user: {
    name: "Bruno",
    age: 15,
    meta: {
      dev: true,
      level: "boss"
    }
  },
  location: {
    city: "Lucknow",
    pin: 226001
  }
};

console.log(flattenObject(input));

/**
 * 📝 HOW THE RECURSION WORKS (Step-by-step):
 * 
 * 1. Start with { user: {...}, location: {...} }
 * 2. Process "user" key → value is object → recurse with prefix="user"
 * 3. Inside recursion: process "name" → prefix="user.name", value="Bruno" → add to result
 * 4. Process "meta" → value is object → recurse with prefix="user.meta"
 * 5. Inside deeper recursion: "dev" → "user.meta.dev": true
 * 6. Continue until all nested objects are flattened
 * 
 * 💡 RECURSION TIP FOR BEGINNERS:
 * Think of it like exploring a building:
 * - If you find a room → record what's in it
 * - If you find stairs to another floor → go down and explore that floor too
 * - Keep track of your path (prefix) so you know where each item belongs
 */

## Day 12 - Custom Array Filter

### Problem
Implement a custom version of JavaScript's `Array.prototype.filter()` called `myFilter`.

### Features
- Works like native `.filter`
- Accepts optional `thisArg`
- Returns new filtered array

### Example
```js
[1,2,3].myFilter(x => x > 1) // [2, 3]
```
### 📦 Requirements:

- **Do not use .filter() internally.**

- **Use a for loop to iterate over this.**

- **Return a new array with elements where callback(element, index, array) returns true.**

- **Support an optional thisArg to bind the this value inside the callback.**


### Learning

- **Array Prototypes**

- **Callbacks and this**

- **Writing polyfills**

### Status

- **[] Done**
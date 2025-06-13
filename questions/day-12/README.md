# Day 12 - Custom `filter` Polyfill

## ✅ Goal
Build your own version of JavaScript’s built-in `filter()` using `Array.prototype`.

## 📌 Features
- Works like native `.filter()`
- Accepts a `thisArg` as second argument
- Handles sparse arrays
- Returns a new filtered array

## 🧠 Function Signature

```js
Array.prototype.myFilter = function(callback, thisArg) {
  // your implementation
};
```

### 📈 Example

```js
[1, 2, 3, 4].myFilter(x => x > 2); // [3, 4]

const ctx = { min: 3 };
[1, 2, 3, 4, 5].myFilter(function(x) {
  return x >= this.min;
}, ctx); // [3, 4, 5]
```

### 💡 Concepts Used

 - **Array prototype manipulation**

- **Callback execution and control**

- **Function context (thisArg)**

- **Polyfill architecture**

### Status

- [x] Done
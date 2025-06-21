## Day 14 – Throttle Function

### 🧠 Problem
Implement a `throttle(fn, delay)` that ensures `fn` is called at most once every `delay` milliseconds.

### ✅ Why Throttle?
To limit execution rate of expensive functions in:
- Scroll events
- Resize handlers
- Rapid UI clicks

### 🔧 Signature

```js
function throttle(fn,delay)
```

### 🧪 Example

```js
const log = throttle(() => console.log('Log'), 1000);
log();
log(); log(); // Only the first one executes immediately
```
## 💡 Concepts Covered

- **Closures**

- **Time tracking**

- **Rate limiting**

- **Function execution control**

### Status

- [x] Done
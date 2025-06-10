## 📅 Day 10: Debounce Function Logic

### ✅ Problem Statement
Implement a debounce function that delays execution until no calls are made within the cooldown window.

### 📥 Input
- A function `fn`
- A delay in ms (cooldown time)

### 📤 Output
- Returns a function that only executes after cooldown period has passed without another call

---

### 🧪 Test Case

```js
const debouncedLog = debounce(() => console.log("API call"), 1000);
debouncedLog(); debouncedLog(); debouncedLog(); // Logs only once after 1s
```

### 💡 Core Dev Insight
##### Core concept behind:

- **Input filters (like search)**

- **Scroll/resize listeners**

- **API rate control**

- **Pattern: Closures, Timers, Function control**

### Status

- [x] Done
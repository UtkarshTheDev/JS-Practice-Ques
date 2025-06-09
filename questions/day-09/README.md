## 📅 Day 09: Deep Clone Without JSON.parse

### ✅ Problem Statement
Clone any JS object deeply using recursion — without using `JSON.stringify/parse`.

### 📥 Input
- Any object, with nested objects, arrays, primitives, Dates

### 📤 Output
- A fully cloned object, no shared references

### 🧪 Test Cases

```js
deepClone({ a: 1, b: [2, 3] }) // => { a: 1, b: [2, 3] }
deepClone({ meta: { joined: new Date() } }) // cloned date, not same ref
```

### 💡 Core Dev Insight
- **Pattern:** Recursion + Type Checking

- **Avoids pitfalls of JSON.parse (loses functions, symbols, Dates)**

- **Used in:** App state management, Undo/Redo, Cloning config/data

### Status

- [] Done
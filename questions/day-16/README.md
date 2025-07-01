## Day 17 – Flatten a Nested Object

### 🧠 Problem
Convert a deeply nested object into a flat object with dot-separated keys.

### ✅ Function Signature

```js
function flattenObject(obj)
```

### 🧪 Example

**Input:**
```js
{
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
}
```

**Output:**
```js
{
  "a": 1,
  "b.c": 2,
  "b.d.e": 3
}
```

### 💡 Concepts Practiced

- **Recursion**

- **Object traversal**

- **Data transformation**

- **Real-world backend formatting**


### 🚀 Real Use Cases

- MongoDB update keys

- Admin dashboards

- i18n key generation

- Firebase field mapping

#### Status

- **[x] Done**
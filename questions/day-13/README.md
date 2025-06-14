# Day 13 – Custom Promise.all Implementation

## 🚀 Problem
Create your own version of `Promise.all`.

## ✅ Features
- Takes array of promises
- Resolves when all resolve
- Rejects immediately on first rejection
- Maintains order of results

## 📌 Signature

```js
function customPromiseAll(promises)
```

### 🧠 Example
```js
customPromiseAll([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
]).then(console.log); // [1, 2, 3]

customPromiseAll([
  Promise.resolve(1),
  Promise.reject("fail"),
  Promise.resolve(3),
]).catch(console.error); // "fail"
```

### 💡 Concepts Covered

- **Concurrency**

- **Promise chaining**

- **Asynchronous control flows**

- **Error bubbling in promises**

### Status

- **[] Done**
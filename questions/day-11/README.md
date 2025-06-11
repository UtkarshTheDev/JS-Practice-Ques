## 📅 Day 11: EventEmitter Class

### ✅ Problem Statement
Create an EventEmitter class with `on`, `emit`, `off`, and `once` methods.

### 📥 Input
- `on(event, fn)` – adds a listener
- `emit(event, payload)` – triggers all listeners
- `off(event, fn)` – removes a listener
- `once(event, fn)` – one-time listener

---

### 🧪 Test Cases

```js
emitter.on("log", fn);
emitter.emit("log", data); // fn gets called

emitter.once("boot", () => {});
emitter.emit("boot"); // called
emitter.emit("boot"); // not called
```

### 💡 Core Dev Insight

 - **Foundation of Node.js and UI libraries**
- **Useful in systems with state, user actions, or data pipelines**

### Status

- **[] Done**
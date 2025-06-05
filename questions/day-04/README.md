## 📅 Day 04: String Compression (Run Length Encoding)

### ✅ Problem Statement
Compress a string using run-length encoding.  
If compressed string isn't shorter than original, return original.

### 📥 Input
- A string

### 📤 Output
- Compressed string or original

### 🧪 Test Cases

```js
compressString("aabcccccaaa") // "a2b1c5a3"
compressString("abcdef")      // "abcdef"
compressString("aaAAaa")      // "a2A2a2"
```

### 💡 Constraints

- **Case-sensitive**

- **No regex**

- **Return original if compressed is not shorter**

#### Status

- [x] Done
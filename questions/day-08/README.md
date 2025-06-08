## 📅 Day 08: Most Frequent Element in Array (Freq Counter Pattern)

### ✅ Problem Statement
Find the number that appears most frequently in a given array.  
If there’s a tie, return the one that appears first.

### 📥 Input
- An array of integers

### 📤 Output
- The number with the highest frequency

### 🧪 Test Cases

```js
mostFrequentElement([1, 3, 2, 1, 4, 1, 3, 3, 3]); // 3
mostFrequentElement([4, 4, 4, 5, 5, 5, 6]);       // 4
mostFrequentElement([1, 2, 3, 4]);                // 1
```

### 💡 Core Dev Insight

- **Pattern:** Frequency Counter

- **Used in:** LFU Cache, rate-limiting, logging analysis

- **Performance:** O(n), no nested loops

### Status

- [] Done
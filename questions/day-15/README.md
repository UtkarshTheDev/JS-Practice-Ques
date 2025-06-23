# Day 16 – Retryable Promise Wrapper

## ✅ Goal
Implement a `retry(fn, retries, delay)` that wraps a function to retry it multiple times if it fails.

## 📌 Features
- Retry up to `n` times
- Delay between retries
- Stops when successful
- Stops and rejects after max retries

## 💼 Use Cases
- API failover logic
- React Query retries
- Stripe webhook retries

## 🧪 Example

```js
const fn = () => Promise.reject("fail");
const retryFn = retry(fn, 3, 1000);
retryFn().catch(console.error); // Will retry 3 times
```

## 🔧 Concepts Used

- Promises

- Closures

- Recursion

- Delays & retry logic

### Status
- [] Done
// 🚀 Day 16 – Retryable Async Function

function retry(fn, retries, delay) {
  return function executor(...args) {
    return new Promise((resolve, reject) => {
      function attempt(count) {
        fn(...args)
          .then(resolve)
          .catch((err) => {
            if (count <= 0) {
              reject(err);
            } else {
              setTimeout(() => {
                attempt(count - 1);
              }, delay);
            }
          });
      }

      attempt(retries);
    });
  };
}
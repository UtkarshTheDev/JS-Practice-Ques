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

let attempt = 0;

const unstable = () =>
  new Promise((resolve, reject) => {
    attempt++;
    console.log('Attempt:', attempt);
    attempt < 3 ? reject("Fail") : resolve("Success");
  });

const retryable = retry(unstable, 5, 1000);

retryable()
  .then(console.log)
  .catch(console.error);
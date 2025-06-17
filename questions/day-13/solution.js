/**
 * Custom implementation of Promise.all
 * @param {Array<Promise>} promises - Array of promises to resolve
 * @returns {Promise} - Promise that resolves with array of results or rejects with first error
 */

function customPromiseAll(promises) {
  // Your implementation here
  if (promises.length < 1) return Promise.resolve([]);

  let results = [];

  promises.forEach((promise,index)=>{
    Promise.resolve(promise).then((result)=>{
        results[index] = result;
    }).catch((err)=>{
        return err;
    });
  });

  return Promise.resolve(results);
}

// Test Case 1: All promises resolve
customPromiseAll([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
]).then(results => {
  console.log('Test 1 Results:', results); // Should be [1, 2, 3]
}).catch(err => {
  console.error('Test 1 Error:', err);
});

// Test Case 2: One promise rejects
customPromiseAll([
  Promise.resolve(1),
  Promise.reject("fail"),
  Promise.resolve(3),
]).then(results => {
  console.log('Test 2 Results:', results); // Should not reach here
}).catch(err => {
  console.error('Test 2 Error:', err); // Should be "fail"
});

// Test Case 3: Empty array
customPromiseAll([]).then(results => {
  console.log('Test 3 Results:', results); // Should be []
}).catch(err => {
  console.error('Test 3 Error:', err);
});

// Test Case 4: Non-promise values
customPromiseAll([
  1,
  Promise.resolve(2),
  "three"
]).then(results => {
  console.log('Test 4 Results:', results); // Should be [1, 2, "three"]
}).catch(err => {
  console.error('Test 4 Error:', err);
});
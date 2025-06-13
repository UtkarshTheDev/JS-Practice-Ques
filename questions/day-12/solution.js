// 🔥 Custom implementation of Array.prototype.filter
// 🚀 Day 12 - Build your own 'myFilter' method

Array.prototype.myFilter = function(callback, thisArg) {
  // 📌 Validate that the callback is a function
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  const result = []; // 🧺 Final array to store filtered elements

  // 🚀 'this' refers to the array calling myFilter
  const array = this;

  for (let i = 0; i < array.length; i++) {
    // ✅ Skip empty slots (sparse arrays)
    if (!(i in array)) continue;

    const element = array[i];

    // 🔁 Call the callback with correct context
    const shouldInclude = callback.call(thisArg, element, i, array);

    if (shouldInclude) {
      result.push(element); // ✅ Add to result if condition passes
    }
  }

  return result;
};
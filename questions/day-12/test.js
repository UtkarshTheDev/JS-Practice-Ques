require('./solution.js');

const arr = [1, 2, 3, 4, 5];

const even = arr.myFilter(function (el) {
  return el % 2 === 0;
});

console.log('Even:', even); // [2, 4]

const ctx = { min: 3 };

const filtered = arr.myFilter(function (el) {
  return el >= this.min;
}, ctx);

console.log('Filtered with context:', filtered); // [3, 4, 5]
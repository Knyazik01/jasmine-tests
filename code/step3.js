function map(fn, array) {
  var result = [];
  for (var i = 0; i < array.length; i += 1) {
    // Is it Array.push available?
    result[i] = fn(array[i]);
  }

  return result;
}

module.exports = map;

console.log('Step 3');

function square(x) { return x * x; } // возведение в квадрат
console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []

var arr = [1, 2, 3];
console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]
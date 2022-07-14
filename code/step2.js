var sequence = require('./step1.js');

function take(fn, count) {
  var result = [];
  for (var i = 0; i < count; i += 1) {
    // Is it Array.push available?
    result[i] = fn();
  }

  return result;
}

console.log('Step 2');

var gen2 = sequence(0, 2);
console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]
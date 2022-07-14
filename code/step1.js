function sequence(start, step) {
  start = typeof start != 'undefined' ? start : 0;
  step = typeof step != 'undefined' ? step : 1;
  var value = start;

  return function gen() {
    var result = value;
    value += step;
    return result;
  }
}

module.exports = sequence;

console.log('Step 1');

var generator = sequence(10, 3);
var generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 7

console.log(generator()); // 16

console.log(generator2()); // 8
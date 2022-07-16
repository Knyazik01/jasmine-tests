function filter(arr, fn) {
  var result = [];
  for (var i = 0; i < arr.length; i += 1) {
    if (fn(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log('Step 9');
var input = [1, 2, 3, 4, 5, 6];
function isEven(x) { return x % 2 == 0; } // проверяет на четность
console.log(filter(input, isEven)); // [2, 4, 6]

console.log(input); // [1, 2, 3, 4, 5, 6]
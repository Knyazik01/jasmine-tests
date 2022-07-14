function partial() {
  // bind arguments
  var fn = arguments[0];
  var bindArguments = [];
  for (var i = 1; i < arguments.length; i += 1) {
    // i - 1 as init i value is 1
    bindArguments[i - 1] = arguments[i];
  }

  return function foo() {
    var fnArguments = [];
    // copy values from bindArguments
    for (var k = 0; k < bindArguments.length; k += 1) {
      fnArguments[k] = bindArguments[k];
    }

    var initIndex = fnArguments.length;
    for (var j = 0; j < arguments.length; j += 1) {
      // Is it Array.push available?
      fnArguments[initIndex + j] = arguments[j];
    }
    return fn.apply(null, fnArguments);
  }
}

console.log('Step 5');

function add(a, b) { return a + b; }
function mult(a, b, c, d) { return a * b * c * d; }

var add5 = partial(add, 5); // Мы получили функцию с 1 аргументом, которая прибавляет к любому числу 5

console.log(add5(2)); // 7
console.log(add5(10)); // 15
console.log(add5(8)); // 13

var mult23 = partial(mult, 2, 3); // мы зафиксировали первые 2 аргумента mult() как 2 и 3

console.log(mult23(4, 5)); // 2*3*4*5 = 120
console.log(mult23(1, 1)); // 2*3*1*1 = 6
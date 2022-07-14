function getFirstUndefinedIndex(array) {
  var firstIndex = -1;
  for (var i = 0; i < array.length; i += 1) {
    if (typeof array[i] == 'undefined') {
      firstIndex = i;
      break;
    }
  }
  return firstIndex;
}

function partialAny() {
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

    var firstUndefinedIndex = getFirstUndefinedIndex(fnArguments);
    for (var j = 0; j < arguments.length; j += 1) {
      var index = firstUndefinedIndex;
      // if firstUndefinedIndex == -1 -> set index array.length
      if (firstUndefinedIndex == -1) {
        index = fnArguments.length;
      }

      // put value into array
      fnArguments[index] = arguments[j];

      // if firstUndefinedIndex != -1 -> update it value
      if (firstUndefinedIndex != -1) {
        firstUndefinedIndex = getFirstUndefinedIndex(fnArguments);
      }
    }
    return fn.apply(null, fnArguments);
  }
}

console.log('Step 6');

function test(a, b, c) { return 'a=' + a + ',b=' + b + ',c=' + c; }
var test1_3 = partialAny(test, 1, undefined, 3);
console.log(test1_3(5, 6)); // a=1,b=5,c=3
// use for ... in
function countForInLoop (obj) {
  var count = 0;
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      count += 1;
    }
  }

  return count;
}

// using Object.keys
function count (obj) {
  var count = 0;
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i += 1) {
    if (obj.hasOwnProperty(keys[i])) {
      count += 1;
    }
  }

  return count;
}

var a = { a: 1, b: 2 };
console.log(count(a)); // 2
var b = function () {};
console.log(count(b)); // 0
var c = [1, 2, 3];
console.log(count(c)); // 3
var d = [];
d[100] = 1;
console.log(count(d)); // 1
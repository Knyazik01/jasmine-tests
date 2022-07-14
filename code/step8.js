var map = require('./step3');

function pluck(objects, fieldName) {
  function getKeyValue(object) {
    return object[fieldName];
  }

  return map(getKeyValue, objects);
}

console.log('Step 8');

var characters = [
  { 'name': 'barney', 'age': 36 },
  { 'name': 'fred', 'age': 40 }
];

console.log(pluck(characters, 'name')); // ['barney', 'fred']
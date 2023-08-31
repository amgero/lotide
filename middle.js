const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
    
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
    
  return true;
};


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`👍👍👍 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`👎👎👎 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const middle = function(array) {
  // takes an array, and returns the middle-most element(s) of the array
  // for arrays with one or two elements there is no middle; return empy array
  let result = [];
    
  if (array.length === 1 || array.length === 2) {
    return result;
  } else if (array.length % 2 === 1) {
    const middleIndex = Math.floor(array.length / 2);
    result.push(array[middleIndex]);
  } else {
    const middleIndex = array.length / 2 - 1;
    const nextIndex = middleIndex + 1;
    result.push(array[middleIndex], array[nextIndex]);
  }
    
  return result;
};

//tests
const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5, 6];
const array3 = [1];
const array4 = [1, 2];

console.log(middle(array1)); // outputs [3]
console.log(middle(array2)); // outputs [3, 4]
console.log(middle(array3)); // outputs []
console.log(middle(array4)); // outputs []

assertArraysEqual(middle(array1), [3]);
assertArraysEqual(middle(array2), [3, 4]);
assertArraysEqual(middle(array3), []);
assertArraysEqual(middle(array4), []);

console.log(middle([1])); // outputs []
console.log(middle([1, 2])); // outputs []
console.log(middle([1, 2, 3])); // outputs [2]
console.log(middle([1, 2, 3, 4, 5])); // outputs [3]
console.log(middle([1, 2, 3, 4])); // outputs [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // outputs [3, 4]



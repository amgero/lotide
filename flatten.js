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


const flatten  = function(arr1) {
  // returns a flattened version of array (turns it into one array more or less)
  // only handles one level of nesting
  let result = [];
    
  for (let i = 0; i < arr1.length; i++) { // to iterate through each element in the array
      
    if (Array.isArray(arr1[i]) === false) {
      result.push(arr1[i]); // adds non-array element to result
    } else {
      for (let j = 0; j < arr1[i].length; j++) {
        result.push(arr1[i][j]); //adds nested element to result
      }
    }
  }
  return result;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

const anArray = [1, [2, 3], 4, [5]];
const theOutput = flatten(anArray);
const expected = [1, 2, 3, 4, 5];
assertArraysEqual(theOutput, expected);
